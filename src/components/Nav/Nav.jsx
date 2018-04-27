import React from 'react';

import styles from './Nav.css';

const Nav = () => (
  <nav className={styles.navbar}>
    <ul className={styles.list}>
      <li className={styles.item}>Home</li>
      <li className={styles.item}>Projects</li>
      <li className={styles.item}>About</li>
      <li className={styles.item}>Contact</li>
    </ul>
  </nav>
);

export default Nav;
