/* eslint @typescript-eslint/no-non-null-assertion: 0 */
import { ReactNode } from 'react';
import ReactDOM from 'react-dom';
import { Button } from '../Button';

import { Actions, Container, Overlay, Title } from './styles';

interface ModalProps {
  title: string;
  children?: ReactNode;
  visible: boolean;
  confirmLabel?: string;
  onCancel: () => void;
  onConfirm: () => void;
  danger: boolean,
  buttonIsLoading?: boolean
}

export function Dialog({
  title,
  children,
  visible,
  confirmLabel = 'Confirmar',
  onCancel,
  onConfirm,
  danger = false,
  buttonIsLoading
}: ModalProps) {

  if (!visible) {
    return null;
  }

  let container = document.getElementById('dialog-root');

  if (!container) {
    container = document.createElement('div');
    container.setAttribute('id', 'dialog-root');
    document.body.appendChild(container);
  }

  return ReactDOM.createPortal(
    <Overlay>
      <Container>
        <Title danger={danger}>{title}</Title>
        {children}
        <Actions>
          <button
            className='cancel-button'
            type='button'
            onClick={onCancel}
          >
            Cancelar
          </button>
          <Button
            disabled={buttonIsLoading}
            isLoading={buttonIsLoading}
            onClick={onConfirm}
            danger={danger}
          >
            {confirmLabel}
          </Button>
        </Actions>
      </Container>
    </Overlay>,
    container
  );

}
