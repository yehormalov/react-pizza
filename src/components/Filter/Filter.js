import { useEffect, useState } from 'react'
import FilterBtn from '../FilterBtn/FilterBtn'
import { ReactSVG } from 'react-svg'
import cn from 'classnames'

import styles from './Filter.module.scss'

const Filter = (props) => {
  const [isSortOpen, setIsSortOpen] = useState(false)

  const onSortClick = (item) => {
    props.setSort(item)
    setIsSortOpen(false)
  }

  const onSortPopularityClick = (item) => {
    onSortClick(item)
    props.setProducts( prev => prev.sort((a, b) => a.popularity - b.popularity) )
  }

  const onSortPriceClick = (item) => {
    onSortClick(item)
    props.setProducts( prev => prev.sort((a, b) => a.price - b.price) )
  }

  const onSortAlphabetClick = (item) => {
    onSortClick(item)
    props.setProducts( prev => prev.sort((a, b) => (
      a.title < b.title ? -1 : a.title > b.title ? 1 : 0
    )) )
  }

  return (
    <div className={styles.filter}>
      <div className={styles.variants}>
        {props.filters.map(item => (
          props.filter === item 
            ? <FilterBtn setFilter={props.setFilter} item={item} key={item} isActive>{item}</FilterBtn>
            : <FilterBtn setFilter={props.setFilter} item={item} key={item}>{item}</FilterBtn>
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
          <span>{props.sort.toLowerCase()}</span>
        </div>
        <ul 
          className={cn(styles.nav, {
            [styles.dblock]: isSortOpen,
          })}
        >
          <li onClick={(e) => onSortPopularityClick(e.target.outerText)} className={cn({[styles.sortActive]: props.sort == 'популярности'})}>популярности</li>
          <li onClick={(e) => onSortPriceClick(e.target.outerText)} className={cn({[styles.sortActive]: props.sort == 'цене'})}>цене</li>
          <li onClick={(e) => onSortAlphabetClick(e.target.outerText)} className={cn({[styles.sortActive]: props.sort == 'алфавиту'})}>алфавиту</li>
        </ul>
      </div>
    </div>
  )
}

export default Filter