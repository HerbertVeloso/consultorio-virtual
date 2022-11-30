/* eslint @typescript-eslint/no-non-null-assertion: 0 */
import { XCircle } from 'phosphor-react';
import { ReactNode } from 'react';
import ReactDOM from 'react-dom';

import { Container, Header, Overlay, Title } from './styles';

interface ModalProps {
  title: string;
  children?: ReactNode;
  visible: boolean;
  onClose: () => void;
}

export function Modal({
  title,
  children,
  visible,
  onClose,
}: ModalProps) {

  if (!visible) {
    return null;
  }

  let container = document.getElementById('modal-root');

  if (!container) {
    container = document.createElement('div');
    container.setAttribute('id', 'modal-root');
    document.body.appendChild(container);
  }

  return ReactDOM.createPortal(
    <Overlay>
      <Container>
        <Header>
          <Title>{title}</Title>
          <button
            className='close-button'
            type='button'
            onClick={onClose}
          >
            <XCircle />
          </button>
        </Header>
        {children}
      </Container>
    </Overlay>,
    container
  );

}
