import { useState, useEffect } from 'react'
import _ from 'lodash'

import styles from './Search.module.scss'

import MovieCard from '../../components/MovieCard'

import { useRecoilState } from 'recoil'
import { getSearchApi } from 'services/movie'
import { searchMovieList, MovieListpageNumber, searchMovieKeyword } from 'states/movie'

const Search = () => {
  const [searchKeyword] = useRecoilState(searchMovieKeyword)
  const [movieLists, setMovieLists] = useRecoilState(searchMovieList)
  const [pageNumber, setPageNumber] = useRecoilState(MovieListpageNumber)
  const [lastItem, setLastItem] = useState<HTMLDivElement | null>(null)

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

  const onIntersect: IntersectionObserverCallback = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setPageNumber((prev) => prev + 1)
        observer.unobserve(entry.target)
      }
    })
  }

  useEffect(() => {
    console.log('pageNum ? ', pageNumber)
    nextMovieLists()
  }, [pageNumber])

  useEffect(() => {
    let observer: IntersectionObserver
    if (lastItem) {
      observer = new IntersectionObserver(onIntersect, { threshold: 0.5 })
      observer.observe(lastItem)
    }
    return () => observer && observer.disconnect()
  }, [lastItem])

  return (
    <div>
      <section className={styles.movieListContainer}>
        {movieLists.length > 0 ? (
          <ul>
            {movieLists.map((item, index) => {
              if (index === movieLists.length - 1) {
                return (
                  <div key={`last-item-box-${index}`}>
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
