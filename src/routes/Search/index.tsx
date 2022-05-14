import styles from './Search.module.scss'

import MovieCard from '../../components/MovieCard'

import { useRecoilState } from 'recoil'
import { searchMovieList } from 'states/movie'

const Search = () => {
  const [movieLists] = useRecoilState(searchMovieList)

  return (
    <div>
      <section className={styles.movieListContainer}>
        {movieLists.length > 0 ? (
          <ul>
            {movieLists.map((item) => (
              <MovieCard key={item.imdbID} item={item} />
            ))}
          </ul>
        ) : (
          <span>검색 결과가 없습니다.</span>
        )}
      </section>
    </div>
  )
}

export default Search
