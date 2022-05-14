import styles from './Favorites.module.scss'

import { useRecoilState } from 'recoil'
import { favoriteMovieList } from 'states/movie'

import MovieCard from '../../components/MovieCard'

const Favorites = () => {
  const [favoriteList] = useRecoilState(favoriteMovieList)

  return (
    <section className={styles.movieListContainer}>
      {favoriteList.length > 0 ? (
        <ul>
          {favoriteList.map((item) => (
            <MovieCard key={`my-favorites-${item.imdbID}`} item={item} />
          ))}
        </ul>
      ) : (
        <span>즐겨찾기한 영화가 없습니다.</span>
      )}
    </section>
  )
}

export default Favorites
