import React from 'react';
import { NavLink } from 'react-router-dom';

import styles from './Nav.css';

const Nav = () => (
  <nav className={styles.navbar}>
    <ul className={styles.list}>
      <li className={styles.item}>
        <NavLink exact activeClassName={styles.activeLink} to="/">
          Home
        </NavLink>
      </li>
      <li className={styles.item}>
        <NavLink activeClassName={styles.activeLink} to="/projects">
          Projects
        </NavLink>
      </li>
      <li className={styles.item}>Contact</li>
    </ul>
  </nav>
);

export default Nav;
