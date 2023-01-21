import cn from 'classnames'

import styles from './FilterBtn.module.scss'

const FilterBtn = (props) => {
  return (
    <button 
      className={cn(styles.btn, {
        [styles.active]: props.isActive
      })}
    >
      {props.children}
    </button>
  )
}

export default FilterBtn