import { atom } from 'hooks/state'
import { ISearchItem } from 'types/movie.d'

const searchMovieList = atom<ISearchItem[]>({
  key: '#searchMovieList',
  default: [],
})

const pageNumber = atom<number>({
  key: '#pageNumber',
  default: 1,
})

const favoriteMovieList = atom<ISearchItem[]>({
  key: '#favoriteMovieList',
  default: [],
})

export { searchMovieList, pageNumber, favoriteMovieList }
