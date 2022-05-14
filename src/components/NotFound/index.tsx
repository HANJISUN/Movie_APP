import { useLocation } from 'react-router-dom'

import styles from './NotFound.module.scss'
import resultImg from 'assets/result.png'

const NotFound = () => {
  const location = useLocation()
  const currentState = location.pathname

  return (
    <div className={styles.resultBox}>
      <div className={styles.innerBox}>
        <img src={resultImg} alt='resultImg' />
        {currentState === '/favorites' ? <p>Sorry, No favorites yet!</p> : <p>Sorry, No result found!</p>}
      </div>
    </div>
  )
}

export default NotFound
