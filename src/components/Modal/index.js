import React from 'react';
import PropTypes from 'prop-types';

import { Container, ModalBody } from './styles';

export default function Modal({ show, title, children, handlerClose }) {
  function handlerClick(e) {
    const modal = document.getElementById('modal');
    if (e === modal) {
      handlerClose();
    }
  }

  return (
    <Container show={show} id="modal" onClick={e => handlerClick(e.target)}>
      <ModalBody>
        <h4>{title}</h4>
        {children}
        <button type="button" onClick={() => handlerClose()}>
          CONCLUIR
        </button>
      </ModalBody>
    </Container>
  );
}

Modal.propTypes = {
  show: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
  handlerClose: PropTypes.func.isRequired,
};
