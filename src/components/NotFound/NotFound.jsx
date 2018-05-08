import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

import styles from './NotFound.css';

const NotFound = () => (
  <div className={styles.container}>
    <FontAwesomeIcon className={styles.warningIcon} icon={['fas', 'exclamation-triangle']} />
    <h3 className={styles.header}>404 - Page Not Found</h3>
    <p>The link may be broken, or the page may have been removed</p>
  </div>
);

export default NotFound;
