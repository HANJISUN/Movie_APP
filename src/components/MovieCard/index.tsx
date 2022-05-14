import { useState } from 'react'

import { ISearchItem } from 'types/movie.d'
import { favoriteMovieList } from 'states/movie'
import { useRecoilState } from 'recoil'

import styles from './MovieCard.module.scss'
import cx from 'classnames'
import { GrFavorite } from 'react-icons/gr'
import defaultImg from 'assets/default.png'

import FavoriteModal from 'components/FavoriteModal'

interface Props {
  item: ISearchItem
}

const MovieCard = ({ item }: Props) => {
  const [favoriteList] = useRecoilState(favoriteMovieList)
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false)

  const isAdded =
    favoriteList.find((favoriteItem) => favoriteItem.imdbID === item.imdbID) === undefined ? 'false' : 'true'

  const handleMovieCardClick = () => {
    setIsOpenModal(true)
  }

  return (
    <div>
      <li className={styles.itemContainer}>
        <div className={styles.contentBox} role='button' tabIndex={0} onClick={handleMovieCardClick}>
          {item.Poster === 'N/A' ? <img src={defaultImg} alt='defaultImg' /> : <img src={item.Poster} alt='poster' />}
          <div className={styles.textBox}>
            <span className={styles.titleText}>{item.Title}</span>
            <span>{item.Year}</span>
            <span>{item.Type.toUpperCase()}</span>
          </div>
          <div className={cx(styles.icon, { [styles.filledIcon]: isAdded === 'true' })}>
            <GrFavorite />
          </div>
        </div>
      </li>
      {isOpenModal && <FavoriteModal setIsOpenModal={setIsOpenModal} item={item} isAdded={isAdded} />}
    </div>
  )
}

export default MovieCard
