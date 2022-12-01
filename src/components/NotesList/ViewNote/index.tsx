import { Eye } from 'phosphor-react';
import { useState } from 'react';
import { Note } from '../../../types/Note';
import { Modal } from '../../Modal';
import { Title, Warning } from './styles';

interface ViewNoteProps {
  note: Note;
}

export function ViewNote({ note }: ViewNoteProps) {
  const [isModalVisible, setIsModalVisible] = useState(false);

  function handleOpenModal() {
    setIsModalVisible(true);
  }

  function onCloseModal() {
    setIsModalVisible(false);
  }

  return (
    <>
      <button type='button' onClick={handleOpenModal}>
        <Eye weight='bold' />
      </button>
      <Modal
        title='Anotação'
        visible={isModalVisible}
        onClose={onCloseModal}
      >
        <div>
          <Title>{note.title}</Title>
          {note.description ? <p>{note.description}</p> : <Warning>Essa anotação não tem descrição.</Warning>}
        </div>

      </Modal>
    </>
  );
}
