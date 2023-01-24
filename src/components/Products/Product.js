import { useState } from 'react'
import cn from 'classnames'

import AddBtn from '../AddBtn/AddBtn'

import styles from './Product.module.scss'

const Product = (props) => {
  const [type, setType] = useState('thin')
  const [size, setSize] = useState('small')

  const { img, title, price, popularity } = props

  return (
    <div className={styles.item}>
      <img src={img}/>
      <h3>{title}</h3>
      <div className={styles.settings}>
        <div className={styles.type}>
          <div 
            className={cn(styles.thin, {
              [styles.active]: type == 'thin'
            })}
            onClick={() => setType('thin')}
          >
            тонкое
          </div>
          <div 
            className={cn(styles.thick, {
              [styles.active]: type == 'thick'
            })}
            onClick={() => setType('thick')}
          >
            традиционное
          </div>
        </div>
        <div className={styles.size}>
          <div 
            className={cn(styles.small, {
              [styles.active]: size == 'small'
            })}
            onClick={() => setSize('small')}
          >
            26 см.
          </div>
          <div 
            className={cn(styles.medium, {
              [styles.active]: size == 'medium'
            })}
            onClick={() => setSize('medium')}
          >
            30 см.
          </div>
          <div 
            className={cn(styles.big, {
              [styles.active]: size == 'big'
            })}
            onClick={() => setSize('big')}
          >
            40 см.
          </div>
        </div>
      </div>
      <div className={styles.result}>
        <div className={styles.price}>от {price} ₴</div>
        <AddBtn 
          setCartProducts={props.setCartProducts}
          img={img}
          title={title}
          price={price}
          popularity={popularity}
        />
      </div>
    </div>
  )
}

export default Product