import React from 'react';
import PropTypes from 'prop-types';
// import posed from 'react-pose';
// import { tween } from 'popmotion';

import styles from './Modal.css';

export default class Modal extends React.Component {
  constructor(props) {
    super(props);

    this.onClose = this.onClose.bind(this);
  }

  onClose() {
    this.props.onClose();
  }

  render() {
    if (!this.props.show) {
      return null;
    }

    return (
      <div className={styles.backdrop}>
        <div className={styles.modal}>
          {this.props.children}
          <div className={styles.footer}>
            <button className={styles.closeButton} onClick={this.onClose}>
              Close
            </button>
          </div>
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired
};
