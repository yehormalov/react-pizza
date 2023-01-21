import styles from './Header.module.scss'
import { ReactSVG } from 'react-svg'

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.left}>
        <img src="./img/logo.png" width={38} height={38} />
        <div className={styles.info}>
          <h2>React Pizza</h2>
          <p>самая вкусная пицца во вселенной</p>
        </div>
      </div>
      <div className={styles.btn}>
        <span className={styles.price}>520 ₴</span>
        <span className={styles.value}>
          <ReactSVG src='img/cart.svg' className={styles.cart} />
          3
        </span>
      </div>
    </div>
  )
}

export default Header