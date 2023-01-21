import FilterBtn from '../FilterBtn/FilterBtn'
import { ReactSVG } from 'react-svg'

import styles from './Filter.module.scss'

const Filter = (props) => {
  return (
    <div className={styles.filter}>
      <div className={styles.variants}>
        <FilterBtn isActive>Все</FilterBtn>
        {props.filters.map(item => (<FilterBtn key={item}>{item}</FilterBtn>))}
      </div>
      <div className={styles.sort}>
        <ReactSVG src="./img/arrow.svg" className={styles.svg} />
        <p className={styles.sortLike}>Сортировка по:</p>
        <select>
          <option>популярности</option>
          <option>цене</option>
          <option>алфавиту</option>
        </select>
      </div>
    </div>
  )
}

export default Filter