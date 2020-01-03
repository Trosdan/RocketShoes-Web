import React from 'react';

import { Container, ModalBody } from './styles'

export default function Modal({show, children, handlerClose}) {

  function handlerClick(e) {
    const modal = document.getElementById('modal');
    if(e === modal) {
      handlerClose();
    }
  }

  return (
  <Container show={show} id="modal" onClick={e => handlerClick(e.target)}>
    <ModalBody>{children}</ModalBody>
  </Container>
  )
}
