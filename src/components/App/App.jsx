import React from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import styles from './App.css';
import Nav from '../Nav/Nav';
import HomeMain from '../HomeMain/HomeMain';
import Projects from '../Projects/Projects';

const App = () => (
  <Router>
    <div className={styles.pageContainer}>
      <Nav />
      <Switch>
        <Route exact path="/" component={HomeMain} />
        <Route path="/projects" component={Projects} />
      </Switch>
    </div>
  </Router>
);

export default App;
