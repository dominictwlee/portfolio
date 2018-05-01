import React from 'react';
import PropTypes from 'prop-types';
import Obfuscate from 'react-obfuscate';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faCopy from '@fortawesome/fontawesome-free-regular/faCopy';
import TransitionGroup from 'react-transition-group/TransitionGroup';

import styles from './ContactModal.css';

class ContactModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      copied: false
    };

    this.onClose = this.onClose.bind(this);
  }

  onClose() {
    this.props.onClose();
    this.setState({ copied: false });
  }

  render() {
    if (!this.props.show) {
      return null;
    }

    return (
      <div className={styles.backdrop}>
        <div className={styles.modal}>
          <h3>Projects, job opportunities, or even just a chat over coffee!</h3>
          <div>
            <Obfuscate email="dominictwlee@gmail.com" />
            <CopyToClipboard text="dominictwlee@gmail.com" onCopy={() => this.setState({ copied: true })}>
              <FontAwesomeIcon className={styles.copyIcon} icon={faCopy} />
            </CopyToClipboard>
            {this.state.copied ? <span style={{ color: 'red' }}>Copied.</span> : null}
          </div>
          <div className="footer">
            <button onClick={this.onClose}>Close</button>
          </div>
        </div>
      </div>
    );
  }
}

ContactModal.propTypes = {
  onClose: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired
};

export default ContactModal;
