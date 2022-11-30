import { PlusCircle } from 'phosphor-react';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { useAuth } from '../../hooks/useAuth';
import NotesService from '../../services/NotesService';
import { Note } from '../../types/Note';
import { Button } from '../Button';
import { Input } from '../Input';
import { Modal } from '../Modal';

interface AddNoteButtonProps {
  onCreate: (note: Note) => void;
}

export function AddNoteButton({ onCreate }: AddNoteButtonProps) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const { user } = useAuth();

  function handleOpenModal() {
    setIsModalVisible(true);
  }

  function handleCloseModal() {
    setIsModalVisible(false);
  }

  async function handleConfirmModal() {
    const note = {
      title,
      description
    };

    const response = await NotesService.createNote(user.id, note);

    if (response instanceof Error) {
      toast.error('Houve um erro ao criar sua anotação. Tente novamente mais tarde.');
      setIsModalVisible(false);
      return;
    }

    onCreate(response);
    setIsModalVisible(false);
  }

  return (
    <>
      <Button onClick={handleOpenModal}>
        <PlusCircle />
        Criar nova anotação
      </Button>
      <Modal
        title='Criar nova anotação'
        visible={isModalVisible}
        onCancel={handleCloseModal}
        onConfirm={handleConfirmModal}
      >
        <form>
          <Input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </form>
      </Modal>
    </>
  );
}
