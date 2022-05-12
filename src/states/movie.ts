import { atom } from 'hooks/state'
import { ISearchItem } from 'types/movie.d'

export const searchMovieList = atom<ISearchItem[]>({
  key: '#searchMovieList',
  default: [],
})
