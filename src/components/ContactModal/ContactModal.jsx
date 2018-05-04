import React from 'react';
import PropTypes from 'prop-types';
import Obfuscate from 'react-obfuscate';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import posed from 'react-pose';
// import { tween } from 'popmotion';

import styles from './ContactModal.css';

const poseProps = {
  visible: { opacity: 1, scaleY: 1 },
  hidden: {
    opacity: 0,
    scaleY: 0
  }
};

const CopiedMsg = posed.div(poseProps);

class ContactModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      copied: false,
      isVisible: false
    };

    this.onClose = this.onClose.bind(this);
  }

  onClose() {
    this.props.onClose();
    this.setState({ copied: false });
    this.setState({ isVisible: false });
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

            <CopyToClipboard
              text="dominictwlee@gmail.com"
              onCopy={() => {
                this.setState({ copied: true }, () => {
                  this.setState({ isVisible: true });
                });
              }}
            >
              <FontAwesomeIcon className={styles.copyIcon} icon={['far', 'copy']} />
            </CopyToClipboard>

            <div className={styles.notifyContainer}>
              {this.state.copied ? (
                <CopiedMsg className={styles.notify} pose={this.state.isVisible ? 'visible' : 'hidden'}>
                  Copied.
                </CopiedMsg>
              ) : null}
            </div>
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
