import React, { useState } from 'react'
import styles from './Movie.module.scss'

import MovieCard from '../../components/MovieCard'
import { FaSearch } from 'react-icons/fa'

import { useRecoilState } from 'recoil'
import { getSearchApi } from 'services/movie'
import { searchMovieList } from 'states/movie'

const Movie = () => {
  const [movieLists, setMovieLists] = useRecoilState(searchMovieList)
  const [searchKeyword, setSearchKeyword] = useState<string>('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchKeyword(e.currentTarget.value)
  }

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    getSearchApi({ s: searchKeyword, page: 1 })
      .then((res) => res.data)
      .then((data) => {
        if (data.Response === 'False') {
          return
        }

        setMovieLists(data.Search)
      })
  }

  return (
    <div>
      <div className={styles.searchContainer}>
        <input className={styles.searchInput} type='text' placeholder='검색어를 입력하세요' onChange={handleChange} />
        <button className={styles.searchButton} type='button' onClick={handleClick}>
          <FaSearch />
        </button>
      </div>
      <section>
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

export default Movie
