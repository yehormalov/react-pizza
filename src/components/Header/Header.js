import styles from './Header.module.scss'
import { ReactSVG } from 'react-svg'

const Header = (props) => {
  const calcSum = (arr) => {
    let sum = 0;
    arr.forEach(obj => {
      sum += obj.price
    })
    let n = sum.toString();
    return n.replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, "$1" + ' ');
  }

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
        <span className={styles.price}>{calcSum(props.cartProducts)} ₴</span>
        <span className={styles.value}>
          <ReactSVG src='img/cart.svg' className={styles.cart} />
          {props.cartProducts.length}
        </span>
      </div>
    </div>
  )
}

export default Header