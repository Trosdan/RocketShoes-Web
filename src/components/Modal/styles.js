import styled from 'styled-components';

export const Container = styled.div`
  position: fixed:
  top: o;
  left: 0;
  width: 100%;
  height: 100vh;

  background: rgba(0, 0, 0, 0.7);

  display: ${props => (props.show ? 'block': 'none')};
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
`;
