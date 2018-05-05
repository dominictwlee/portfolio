import React from 'react';
import { render } from 'react-dom';
import fontawesome from '@fortawesome/fontawesome';
import instagram from '@fortawesome/fontawesome-free-brands/faInstagram';
import github from '@fortawesome/fontawesome-free-brands/faGithub';
import linkedin from '@fortawesome/fontawesome-free-brands/faLinkedin';
import spotify from '@fortawesome/fontawesome-free-brands/faSpotify';
import faCopy from '@fortawesome/fontawesome-free-regular/faCopy';
import fbMessenger from '@fortawesome/fontawesome-free-brands/faFacebookMessenger';

import './index.css';
import App from './components/App/App';

fontawesome.library.add(instagram, github, linkedin, spotify, faCopy, fbMessenger);

const renderApp = () => {
  render(<App />, document.getElementById('app'));
};

renderApp();

if (module.hot) {
  module.hot.accept('./components/App/App', () => {
    renderApp();
  });
}
