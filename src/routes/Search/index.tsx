import React, { useState } from 'react'
import styles from './Search.module.scss'

import MovieCard from '../../components/MovieCard'

import { useRecoilState } from 'recoil'
import { getSearchApi } from 'services/movie'
import { searchMovieList } from 'states/movie'

const Search = () => {
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
