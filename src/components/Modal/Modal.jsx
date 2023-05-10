import PropTypes from 'prop-types';
import React from 'react';
import { createPortal } from 'react-dom';
import { ModalBackdrop, ModalContent } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');
export default class Modal extends React.PureComponent {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }
  componentDidUpdate() {
    console.log('Modal window  update');
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };
  handleBackdropClick = event => {
    if (event.target === event.currentTarget) {
      this.props.onClose();
    }
  };
  render() {
    const { url, text } = this.props;

    return createPortal(
      <ModalBackdrop onClick={this.handleBackdropClick}>
        <ModalContent>
          <img src={url} alt={text} />
        </ModalContent>
      </ModalBackdrop>,
      modalRoot
    );
  }
}
Modal.propTypes = {
  url: PropTypes.string,
  text: PropTypes.string,
};
