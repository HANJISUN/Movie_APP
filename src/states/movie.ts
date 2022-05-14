import { atom } from 'hooks/state'
import { ISearchItem } from 'types/movie.d'

const searchMovieList = atom<ISearchItem[]>({
  key: '#searchMovieList',
  default: [],
})

const MovieListpageNumber = atom<number>({
  key: '#MovieListpageNumber',
  default: 1,
})

const searchMovieKeyword = atom<string>({
  key: '#searchMovieKeyword',
  default: '',
})

const favoriteMovieList = atom<ISearchItem[]>({
  key: '#favoriteMovieList',
  default: [],
})

export { searchMovieList, MovieListpageNumber, searchMovieKeyword, favoriteMovieList }
