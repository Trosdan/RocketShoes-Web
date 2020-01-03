import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  position: fixed;
  top: o;
  left: 0;
  width: 100%;
  height: 100vh;

  background: rgba(0, 0, 0, 0.2);

  display: ${props => (props.show ? 'block' : 'none')};
`;

export const ModalBody = styled.div`
  position: fixed;
  top: 30%;
  left: 50%;
  z-index: 5;
  background: #fff;
  padding: 2rem 2rem 1rem;
  min-width: 20%;
  border-radius: 4px;
  text-align: center;
  font-size: 2rem;
  transform: translate(-50%, 0);

  h4 {
    font-size: 20px;
  }

  button {
    background: #7159c1;
    color: #fff;
    border: 0;
    border-radius: 4px;
    padding: 12px 20px;
    font-weight: bold;
    text-transform: uppercase;
    transition: background 0.2s;

    &:hover {
      background: ${darken(0.03, '#7159c1')};
    }
  }
`;
