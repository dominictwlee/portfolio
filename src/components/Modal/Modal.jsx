import React from 'react';
import PropTypes from 'prop-types';
import posed from 'react-pose';
// import { tween } from 'popmotion';

import styles from './Modal.css';

const backdropProps = {
  open: {
    x: '0%',
    delayChildren: 300,
    staggerChildren: 500
  },
  closed: {
    delay: 500,
    staggerChildren: 20,
    x: '-100%'
  }
};

const dialogProps = {
  open: { opacity: 1, y: 0 },
  closed: { opacity: 0, y: 50 }
};

const Backdrop = posed.div(backdropProps);
const Dialog = posed.div(dialogProps);

const Modal = props => (
  <Backdrop className={styles.backdrop} pose={props.show ? 'open' : 'closed'}>
    <Dialog className={styles.modal}>
      {props.children}
      <div className={styles.footer}>
        <button className={styles.closeButton} onClick={props.onClose}>
          Close
        </button>
      </div>
    </Dialog>
  </Backdrop>
);

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired
};

export default Modal;
