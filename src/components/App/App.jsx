import React from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import styles from './App.css';
import Nav from '../Nav/Nav';
import HomeMain from '../HomeMain/HomeMain';
import Projects from '../Projects/Projects';
import ContactModal from '../ContactModal/ContactModal';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false
    };

    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleModal() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <Router>
        <div className={styles.pageContainer}>
          <Nav toggleModal={this.toggleModal} />
          <Switch>
            <Route exact path="/" component={HomeMain} />
            <Route path="/projects" component={Projects} />
          </Switch>

          <ContactModal show={this.state.isOpen} onClose={this.toggleModal} />
        </div>
      </Router>
    );
  }
}

export default App;
