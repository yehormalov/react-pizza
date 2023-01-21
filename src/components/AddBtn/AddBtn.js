import styles from './AddBtn.module.scss'

const AddBtn = (props) => {
  return (
    <button className={styles.btn}>
      <span className={styles.add}>
        <span></span>
        <span></span>
      </span>
      Добавить
    </button>
  )
}

export default AddBtn