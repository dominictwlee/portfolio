import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import styles from './Nav.css';

const Nav = props => (
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
      <li className={styles.item}>
        <button onClick={props.toggleModal}>Contact</button>
      </li>
    </ul>
  </nav>
);

Nav.propTypes = {
  toggleModal: PropTypes.func.isRequired
};

export default Nav;
