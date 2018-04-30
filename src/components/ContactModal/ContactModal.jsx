import React from 'react';
import PropTypes from 'prop-types';
import Obfuscate from 'react-obfuscate';
import { CopyToClipboard } from 'react-copy-to-clipboard';

import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faCopy from '@fortawesome/fontawesome-free-regular/faCopy';

import styles from './ContactModal.css';

class ContactModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      copied: false
    };
  }

  render() {
    if (!this.props.show) {
      return null;
    }

    // The gray background
    const backdropStyle = {
      position: 'fixed',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: 'rgba(0,0,0,0.3)',
      padding: 50
    };

    // The modal "window"
    const modalStyle = {
      backgroundColor: '#fff',
      borderRadius: 5,
      maxWidth: 500,
      minHeight: 300,
      margin: '0 auto',
      padding: 30
    };

    return (
      <div className="backdrop" style={backdropStyle}>
        <div className="modal" style={modalStyle}>
          <h3>Projects, job opportunities, or even just a chat over coffee!</h3>
          <div>
            <Obfuscate email="dominictwlee@gmail.com" />
            <CopyToClipboard text="dominictwlee@gmail.com" onCopy={() => this.setState({ copied: true })}>
              <FontAwesomeIcon icon={faCopy} />
            </CopyToClipboard>
            {this.state.copied ? <span style={{ color: 'red' }}>Copied.</span> : null}
          </div>
          <div className="footer">
            <button onClick={this.props.onClose}>Close</button>
          </div>
        </div>
      </div>
    );
  }
}

ContactModal.propTypes = {
  onClose: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired
};

export default ContactModal;
