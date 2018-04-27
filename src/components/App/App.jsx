import React from 'react';

import styles from './App.css';
import Nav from '../Nav/Nav';
import HomeMain from '../HomeMain/HomeMain';

const App = () => (
  <div className={styles.pageContainer}>
    <Nav />
    <HomeMain />
  </div>
);

export default App;
