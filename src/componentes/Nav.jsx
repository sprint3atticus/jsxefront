import {} from 'react';
import {Link} from 'react-router-dom'
import styles from '../css/Nav.module.css';

function Nav() {

  return (
    <section className={styles.nav}>
      <Link to="home" className={styles.tlink}>Home</Link>
      <Link to="contato" className={styles.tlink}>Contato</Link>
      <Link to="calculadora" className={styles.tlink}>Calculadora</Link>
      <Link to="sobre" className={styles.tlink}>Sobre</Link>
      <Link to="error" className={styles.tlink}>Error</Link>
    </section>
  );
}

export default Nav;