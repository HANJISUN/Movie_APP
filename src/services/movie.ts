import { axios } from 'hooks/worker'
import { IMovieAPIRes } from 'types/movie.d'

const API_KEY = process.env.REACT_APP_MOVIE_API_KEY

const MOVIE_BASE_URL = 'http://www.omdbapi.com/'

interface Params {
  s: string
  page: number
}

export const getSearchApi = (params: Params) =>
  axios.get<IMovieAPIRes>(`${MOVIE_BASE_URL}?apikey=${API_KEY}`, {
    params: {
      ...params,
      s: params.s,
      page: params.page,
    },
  })
