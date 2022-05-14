import { Route, Routes } from 'react-router-dom'

import styles from './Routes.module.scss'

import Layout from '../components/Layout'
import Search from './Search'
import Favorites from './Favorites'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route path='/' element={<Search />} />
        <Route path='/favorites' element={<Favorites />} />
      </Route>
    </Routes>
  )
}

export default App
