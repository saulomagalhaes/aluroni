import { ReactComponent as Logo } from 'assets/images/logo.svg';
import { useState } from 'react';
import styles from './Menu.module.scss';
import Search from './Search';

export default function Menu() {
  const [search, setSearch] = useState('');
  return (
    <main>
      <nav className={styles.menu}>
        <Logo />
      </nav>
      <header className={styles.header}>
        <div className={styles.header__text}>
          A casa do código e da massa
        </div>
      </header>
      <section className={styles.cardapio}>
        <h3 className={styles.cardapio__titulo}>Cardápio</h3>
        <Search search={search} setSearch={setSearch} />
      </section>
    </main>
  )
}