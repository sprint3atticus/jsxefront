import {} from 'react';
import {Link} from 'react-router-dom'
import styles from '../css/Nav.module.css';

function Nav() {

  return (
    <section className={styles.nav}>
      <Link to="home" className={tlink}>Home</Link>
      <Link to="contato" className={tlink}>Contato</Link>
      <Link to="calculadora" className={tlink}>Calculadora</Link>
      <Link to="sobrenos" className={tlink}>sobreNos</Link>
      <Link to="error" className={tlink}>Error</Link>
    </section>
  );
}

export default Nav;