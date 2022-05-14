import styles from './FavoriteModal.module.scss'
import { Dispatch, SetStateAction } from 'react'

import { favoriteMovieList } from 'states/movie'
import { ISearchItem } from 'types/movie.d'
import { useRecoilState } from 'recoil'

interface Props {
  setIsOpenModal: Dispatch<SetStateAction<boolean>>
  item: ISearchItem
  isAdded: string
}

const FavoriteModal = ({ setIsOpenModal, item, isAdded }: Props) => {
  const [favoriteList, setFavoriteList] = useRecoilState(favoriteMovieList)

  const handleCloseButtonClick = () => {
    setIsOpenModal(false)
  }

  const handleAddButtonClick = () => {
    const newFavoriteList = favoriteList.concat(item)
    setFavoriteList(newFavoriteList)
    setIsOpenModal(false)
  }

  const handleDeleteButtonClick = () => {
    const newFavoriteList = favoriteList.filter((favoriteItem) => favoriteItem.imdbID !== item.imdbID)
    setFavoriteList(newFavoriteList)
    setIsOpenModal(false)
  }

  return (
    <div className={styles.modalBackDrop}>
      <div className={styles.modalView}>
        <button type='button' className={styles.closeButton} onClick={handleCloseButtonClick}>
          &times;
        </button>
        {isAdded === 'false' ? (
          <p>
            선택한 영화를
            <br />내 즐겨찾기 목록에 추가합니다.
          </p>
        ) : (
          <p>
            선택한 영화를
            <br />내 즐겨찾기 목록에서 제거합니다.
          </p>
        )}

        <div className={styles.buttonBox}>
          <button type='button' className={styles.button} onClick={handleCloseButtonClick}>
            취소
          </button>
          {isAdded === 'false' ? (
            <button type='button' className={styles.button} onClick={handleAddButtonClick}>
              즐겨찾기 추가
            </button>
          ) : (
            <button type='button' className={styles.button} onClick={handleDeleteButtonClick}>
              즐겨찾기 제거
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

export default FavoriteModal
