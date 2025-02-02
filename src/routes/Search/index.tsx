import { useState, useEffect } from 'react'
import _ from 'lodash'

import styles from './Search.module.scss'

import MovieCard from 'components/MovieCard'
import NotFound from 'components/NotFound'

import { useRecoilState } from 'recoil'
import { getSearchApi } from 'services/movie'
import {
  searchMovieList,
  movieListpageNumber,
  searchMovieKeyword,
  searchMovieResult,
  movieListpageDone,
} from 'states/movie'

const Search = () => {
  const [searchKeyword] = useRecoilState(searchMovieKeyword)
  const [searchResult] = useRecoilState(searchMovieResult)
  const [pageDone, setPageDone] = useRecoilState(movieListpageDone)
  const [movieLists, setMovieLists] = useRecoilState(searchMovieList)
  const [pageNumber, setPageNumber] = useRecoilState(movieListpageNumber)
  const [lastItem, setLastItem] = useState<HTMLDivElement | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const nextMovieLists = async () => {
      if (pageNumber > 1) {
        getSearchApi({ s: searchKeyword, page: pageNumber })
          .then((res) => res.data)
          .then((data) => {
            if (data.Response === 'False') {
              if (searchKeyword === '') {
                setIsLoading(false)
                setPageDone(false)
                setPageNumber(1)
                return
              }
              setIsLoading(false)
              setPageDone(true)
              return
            }
            setIsLoading(false)
            setPageDone(false)
            setMovieLists((prev) => _.uniqBy(prev.concat(data.Search), 'imdbID'))
          })
      }
    }
    nextMovieLists()
  }, [pageNumber, searchKeyword, setMovieLists, setPageDone, setPageNumber])

  useEffect(() => {
    const onIntersect: IntersectionObserverCallback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setPageNumber((prev) => prev + 1)
          observer.unobserve(entry.target)
          setIsLoading(true)
          setPageDone(false)
        }
      })
    }

    let observer: IntersectionObserver

    if (lastItem) {
      observer = new IntersectionObserver(onIntersect, { threshold: 0.9 })
      observer.observe(lastItem)
    }

    return () => {
      observer && observer.disconnect()
    }
  }, [lastItem, setPageNumber, setPageDone])

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
          <NotFound />
        )}
        {isLoading ? <p className={styles.loadingText}>Loading...🎬</p> : ''}
        {pageDone ? <p className={styles.loadingText}>No data, nothing to show... 🙊</p> : ''}
      </section>
    </div>
  )
}

export default Search
