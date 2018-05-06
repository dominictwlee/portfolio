import React from 'react';
// import PropTypes from 'prop-types';
import Obfuscate from 'react-obfuscate';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import posed from 'react-pose';
import { tween } from 'popmotion';

import styles from './Contact.css';

const poseProps = {
  visible: { opacity: 1, scaleY: 1, transition: () => tween({ duration: 100 }) },
  hidden: {
    opacity: 0,
    scaleY: 0
  }
};

const CopiedMsg = posed.div(poseProps);

export default class Contact extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      copied: false
    };

    this.onClose = this.onClose.bind(this);
  }

  onClose() {
    this.setState({ copied: false });
  }

  render() {
    return (
      <React.Fragment>
        <h3>You can get in touch with me at:</h3>
        <div>
          <Obfuscate className={styles.email} email="dominictwlee@gmail.com" />
          <CopyToClipboard text="dominictwlee@gmail.com" onCopy={() => this.setState({ copied: true })}>
            <FontAwesomeIcon className={styles.copyIcon} icon={['far', 'copy']} />
          </CopyToClipboard>

          <div className={styles.notifyContainer}>
            {this.state.copied ? (
              <CopiedMsg className={styles.notify} pose={this.state.copied ? 'visible' : 'hidden'}>
                Copied.
              </CopiedMsg>
            ) : null}
          </div>

          <div className={styles.iconContainer}>
            <a href="https://m.me/Dominictzlee">
              <FontAwesomeIcon className={styles.fbMsgIcon} icon={['fab', 'facebook-messenger']} />
            </a>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
