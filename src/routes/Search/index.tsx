import { useState, useEffect } from 'react'
import _ from 'lodash'

import styles from './Search.module.scss'

import MovieCard from '../../components/MovieCard'

import { useRecoilState } from 'recoil'
import { getSearchApi } from 'services/movie'
import { searchMovieList, movieListpageNumber, searchMovieKeyword, searchMovieResult } from 'states/movie'

const Search = () => {
  const [searchKeyword] = useRecoilState(searchMovieKeyword)
  const [searchResult] = useRecoilState(searchMovieResult)
  const [movieLists, setMovieLists] = useRecoilState(searchMovieList)
  const [pageNumber, setPageNumber] = useRecoilState(movieListpageNumber)
  const [lastItem, setLastItem] = useState<HTMLDivElement | null>(null)

  useEffect(() => {
    const nextMovieLists = async () => {
      getSearchApi({ s: searchKeyword, page: pageNumber })
        .then((res) => res.data)
        .then((data) => {
          if (data.Response === 'False') {
            return
          }
          setMovieLists((prev) => _.uniqBy(prev.concat(data.Search), 'imdbID'))
        })
    }
    nextMovieLists()
  }, [pageNumber, searchKeyword, setMovieLists])

  useEffect(() => {
    const onIntersect: IntersectionObserverCallback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setPageNumber((prev) => prev + 1)
          observer.unobserve(entry.target)
        }
      })
    }
    let observer: IntersectionObserver
    if (lastItem) {
      observer = new IntersectionObserver(onIntersect, { threshold: 0.5 })
      observer.observe(lastItem)
    }
    return () => observer && observer.disconnect()
  }, [lastItem, setPageNumber])

  return (
    <div>
      <section className={styles.movieListContainer}>
        {movieLists.length > 0 && searchResult === true ? (
          <ul>
            {movieLists.map((item, index) => {
              if (index === movieLists.length - 1) {
                return (
                  <div key={`last-item-box-${item.imdbID}`}>
                    <MovieCard key={`search-movielist-${item.imdbID}`} item={item} />
                    <div ref={setLastItem} />
                  </div>
                )
              }
              return <MovieCard key={`search-movielist-${item.imdbID}`} item={item} />
            })}
          </ul>
        ) : (
          <span>검색 결과가 없습니다.</span>
        )}
      </section>
    </div>
  )
}

export default Search
