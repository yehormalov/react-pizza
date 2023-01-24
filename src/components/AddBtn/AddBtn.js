import { useState } from 'react'
import styles from './AddBtn.module.scss'

const AddBtn = (props) => {
  const [purchases, setPurchases] = useState(0)
  const { img, title, price } = props

  const onButtonClick = () => {
    props.setCartProducts(prev => [...prev, { img, title, price }])
    setPurchases(prev => prev += 1)
  }

  return (
    <button 
      className={styles.btn}
      onClick={() => onButtonClick()}
    >
      <span className={styles.add}>
        <span></span>
        <span></span>
      </span>
      Добавить
      { purchases > 0 && <span className={styles.number}><span>{purchases}</span></span> }
    </button>
  )
}

export default AddBtn