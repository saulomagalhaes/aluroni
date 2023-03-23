import Item from './Item'
import menu from './items.json'
import styles from './Items.module.scss'

export default function Items() {
  return (
    <div className={styles.itens}>
      {menu.map(item => (
        <Item key={item.id} {...item} />
      ))}
    </div>
  )
}