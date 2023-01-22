import { useState } from 'react'
import FilterBtn from '../FilterBtn/FilterBtn'
import { ReactSVG } from 'react-svg'

import styles from './Filter.module.scss'

const Filter = (props) => {
  const [filter, setFilter] = useState(props.filters[0])

  return (
    <div className={styles.filter}>
      <div className={styles.variants}>
        {props.filters.map(item => (
          filter === item 
            ? <FilterBtn setFilter={setFilter} item={item} key={item} isActive>{item}</FilterBtn>
            : <FilterBtn setFilter={setFilter} item={item} key={item}>{item}</FilterBtn>
        ))}
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