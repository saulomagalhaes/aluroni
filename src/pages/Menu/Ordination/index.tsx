import classNames from 'classnames';
import { useState } from 'react';
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md';
import options from './options.json';
import styles from './Ordination.module.scss';

interface Props{
  ordination: string;
  setOrdination: React.Dispatch<React.SetStateAction<string>>;
}

export default function Ordination({ordination, setOrdination}:Props) { 
  const [open, setOpen] = useState(false);
  const ordinationName = ordination && options.find(option => option.value === ordination)?.nome;
  return (
    <button className={classNames({
      [styles.ordenador]: true,
      [styles["ordenador--ativo"]]: ordination !== ""
    })}
      onClick={() => setOpen(!open)}
      onBlur={() => setOpen(false)}
    >
      <span>{ordinationName || "Ordenar Por"}</span>
      {open ? <MdKeyboardArrowUp size={20} /> : <MdKeyboardArrowDown size={20} />}
      <div className={classNames({
        [styles.ordenador__options]: true,
        [styles["ordenador__options--ativo"]]: open
      })}>
        {options.map(option => (
          <div className={styles.ordenador__option} key={option.value} onClick={()=> setOrdination(option.value)}>
            {option.nome}
          </div>
        ))}
      </div>
    </button>
  )
}