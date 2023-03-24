import { useEffect, useState } from 'react';
import Item from './Item';
import menu from './items.json';
import styles from './Items.module.scss';

interface Props{
  search: string;
  filter: number | null;
  ordination: string;
}

export default function Items({ search, filter, ordination }: Props) {
  const [list, setList] = useState(menu);

  function testSearch(title: string) { 
    const regex = new RegExp(search, 'i');
    return regex.test(title);
  }

  function testFilter(categoryId: number) { 
    if (filter !== null) return filter === categoryId;
    return true;
  }

  function ordinate(list: typeof menu) { 
    switch (ordination) { 
      case 'porcao':
        return list.sort((a, b) => a.size > b.size ? 1 : -1);
      case 'qtd_pessoas':
        return list.sort((a, b) => a.serving > b.serving ? 1 : -1);
      case 'preco':
        return list.sort((a, b) => a.price > b.price ? 1 : -1);
      default:
        return list;
    }
  }

  useEffect(() => { 
    const newList = menu.filter(item => testSearch(item.title) && testFilter(item.category.id));
    setList(ordinate(newList));
  }, [search, filter]);

  return (
    <div className={styles.itens}>
      {list.map(item => (
        <Item key={item.id} {...item} />
      ))}
    </div>
  )
}