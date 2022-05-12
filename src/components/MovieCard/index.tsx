import { ISearchItem } from 'types/movie.d'
import styles from './MovieCard.module.scss'

interface Props {
  item: ISearchItem
}

const MovieCard = ({ item }: Props) => {
  return (
    <li className={styles.itemContainer}>
      <div className={styles.contentBox}>
        <span>{item.Title}</span>
        <span>{item.Year}</span>
        <span>{item.Type}</span>
      </div>
    </li>
  )
}

export default MovieCard
