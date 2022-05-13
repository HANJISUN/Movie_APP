import { NavLink } from 'react-router-dom'

import styles from './Footer.module.scss'
import cx from 'classnames'

const Footer = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to='/' className={({ isActive }) => cx({ [styles.isActive]: isActive })}>
            Search
          </NavLink>
        </li>
        <li>
          <NavLink to='favorites' className={({ isActive }) => cx({ [styles.isActive]: isActive })}>
            Favorites
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Footer
