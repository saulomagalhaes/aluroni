import filters from './filters.json';
import styles from './Filters.module.scss';
type IOption = typeof filters[0];

export default function Filters() {
  function selectFilter(option:IOption) {
    console.log(option);
  }

  return (
    <div className={styles.filtros}>
      {filters.map(option => (
        <button className={styles.filtros__filtro} key={option.id} onClick={() => selectFilter(option) }>
          {option.label}
        </button>
      ))}
    </div>
  )
}