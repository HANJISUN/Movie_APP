import { Outlet } from 'react-router-dom'
import styles from './Layout.module.scss'

import Footer from 'components/Footer'

const Layout = () => {
  return (
    <div className={styles.layoutContainer}>
      <main className={styles.main}>
        <Outlet />
      </main>
      <footer className={styles.footer}>
        <Footer />
      </footer>
    </div>
  )
}

export default Layout
