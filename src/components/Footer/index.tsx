import { NavLink } from 'react-router-dom'

import styles from './Footer.module.scss'
import cx from 'classnames'

const Footer = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to='/' className={({ isActive }) => cx({ [styles.isActive]: isActive })}>
            검색
          </NavLink>
        </li>
        <li>
          <NavLink to='favorites' className={({ isActive }) => cx({ [styles.isActive]: isActive })}>
            내 즐겨찾기
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Footer
