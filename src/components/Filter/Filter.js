import { useState } from 'react'
import FilterBtn from '../FilterBtn/FilterBtn'
import { ReactSVG } from 'react-svg'
import cn from 'classnames'

import styles from './Filter.module.scss'

const Filter = (props) => {
  const [filter, setFilter] = useState(props.filters[0])
  const [sort, setSort] = useState(props.sorts[0])
  const [isSortOpen, setIsSortOpen] = useState(false)

  const onSortClick = (item) => {
    setSort(item)
    setIsSortOpen(false)
  }

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
        <div 
          className={styles.sortName}
          onClick={() => {setIsSortOpen(!isSortOpen)}}
        >
          <ReactSVG 
            src="./img/arrow.svg" 
            className={cn(styles.svg, {
              [styles.rotate]: isSortOpen
            })}
          />
          <p className={styles.sortLike}>Сортировка по:</p>
          <span>{sort.toLowerCase()}</span>
        </div>
        <ul 
          className={cn(styles.nav, {
            [styles.dblock]: isSortOpen,
          })}
        >
          {props.sorts.map(item => (
            sort === item
              ? <li onClick={() => onSortClick(item)} key={item} className={styles.sortActive}>{item.toLowerCase()}</li>
              : <li onClick={() => onSortClick(item)} key={item}>{item.toLowerCase()}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Filter