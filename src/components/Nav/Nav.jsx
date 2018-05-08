import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import styles from './Nav.css';

const Nav = props => (
  <nav>
    <ul className={styles.list}>
      <li>
        <NavLink exact activeClassName={styles.activeLink} className={styles.link} to="/">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName={styles.activeLink} className={styles.link} to="/projects">
          Projects
        </NavLink>
      </li>
      <li className={styles.buttonItem}>
        <button onClick={props.toggleModal}>Contact</button>
      </li>
    </ul>
  </nav>
);

Nav.propTypes = {
  toggleModal: PropTypes.func.isRequired
};

export default Nav;
