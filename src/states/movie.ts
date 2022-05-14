import { atom } from 'hooks/state'
import { ISearchItem } from 'types/movie.d'
import { AtomEffect } from 'recoil'

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

const localStorageEffect: <T>(key: string) => AtomEffect<T> =
  (key: string) =>
  ({ setSelf, onSet }) => {
    const savedValue = localStorage.getItem(key)
    if (savedValue != null) {
      setSelf(JSON.parse(savedValue))
    }

    onSet((newValue, _, isReset) => {
      isReset ? localStorage.removeItem(key) : localStorage.setItem(key, JSON.stringify(newValue))
    })
  }

const favoriteMovieList = atom<ISearchItem[]>({
  key: '#favoriteMovieList',
  default: [],
  effects: [localStorageEffect<ISearchItem[]>('GripBookMark')],
})

export { searchMovieList, MovieListpageNumber, searchMovieKeyword, favoriteMovieList }
