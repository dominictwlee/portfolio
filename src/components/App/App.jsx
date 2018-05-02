import React from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import styles from './App.css';
import Nav from '../Nav/Nav';
import HomeMain from '../HomeMain/HomeMain';
import Projects from '../Projects/Projects';
import ContactModal from '../ContactModal/ContactModal';
import NotFound from '../NotFound/NotFound';

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
        <Route
          render={({ location }) => (
            <div className={styles.pageContainer}>
              <Nav toggleModal={this.toggleModal} />
              <TransitionGroup className={styles.pageMain}>
                <CSSTransition
                  key={location.key}
                  classNames={{
                    enter: styles.enter,
                    enterActive: styles.enterActive,
                    exit: styles.exit,
                    exitActive: styles.exitActive
                  }}
                  timeout={300}
                >
                  <section className={styles.pageMainInner}>
                    <Switch location={location}>
                      <Route exact path="/" component={HomeMain} />
                      <Route exact path="/projects" component={Projects} />
                      <Route component={NotFound} />
                    </Switch>
                  </section>
                </CSSTransition>
              </TransitionGroup>
              <ContactModal show={this.state.isOpen} onClose={this.toggleModal} />
            </div>
          )}
        />
      </Router>
    );
  }
}

export default App;
