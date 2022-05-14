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
            Add a movie
            <br />
            to your Favorites
          </p>
        ) : (
          <p>
            Remove a movie
            <br />
            to your Favorites
          </p>
        )}

        <div className={styles.buttonBox}>
          <button type='button' className={styles.button} onClick={handleCloseButtonClick}>
            Cancel
          </button>
          {isAdded === 'false' ? (
            <button type='button' className={styles.button} onClick={handleAddButtonClick}>
              Add
            </button>
          ) : (
            <button type='button' className={styles.button} onClick={handleDeleteButtonClick}>
              Remove
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

export default FavoriteModal
