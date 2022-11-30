import { PlusCircle } from 'phosphor-react';
import { useState } from 'react';
import { toast } from 'react-toastify';

import { useAuth } from '../../hooks/useAuth';
import NotesService from '../../services/NotesService';
import { Note } from '../../types/Note';

import { Button } from '../Button';
import { Input } from '../Input';
import { Modal } from '../Modal';
import { TextArea } from '../TextArea';

import { Form } from './styles';

interface AddNoteButtonProps {
  onSaveNote: (note: Note) => void;
}

export function AddNoteButton({ onSaveNote }: AddNoteButtonProps) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const { user } = useAuth();

  function handleOpenModal() {
    setIsModalVisible(true);
  }

  async function handleSendForm() {
    setIsSubmitting(true);
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

    onSaveNote(response);
    toast.success('Anotação criada com sucesso!');
    setIsModalVisible(false);
    setIsSubmitting(false);
    setTitle('');
    setDescription('');
  }

  function onCloseModal() {
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
        onClose={onCloseModal}
      >
        <Form>
          <Input
            placeholder='Título da anotação'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            disabled={isSubmitting}
          />
          <TextArea
            placeholder='Digite a descrição'
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            disabled={isSubmitting}
          />
          <Button
            type='button'
            disabled={title.length === 0}
            onClick={handleSendForm}
            isLoading={isSubmitting}
          >
            Criar nova anotação
          </Button>
        </Form>
      </Modal>
    </>
  );
}
