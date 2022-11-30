/* eslint @typescript-eslint/no-non-null-assertion: 0 */
import { ReactNode } from 'react';
import ReactDOM from 'react-dom';

import { Container, Overlay, Title } from './styles';

interface ModalProps {
  title: string;
  children?: ReactNode;
  visible: boolean;
  cancelLabel?: string;
  confirmLabel?: string;
  onCancel: () => void;
  onConfirm: () => void;
}

export function Modal({
  title,
  children,
  visible,
  cancelLabel = 'Cancelar',
  confirmLabel = 'Confirmar',
  onCancel,
  onConfirm
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
        <Title>{title}</Title>
        {children}
        <div>
          <button onClick={onCancel}>{cancelLabel}</button>
          <button onClick={onConfirm}>{confirmLabel}</button>
        </div>
      </Container>
    </Overlay>,
    container
  );

}
