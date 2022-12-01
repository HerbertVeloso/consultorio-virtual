import { Pencil } from 'phosphor-react';
import { useState } from 'react';
import { toast } from 'react-toastify';

import { useAuth } from '../../../hooks/useAuth';
import NotesService from '../../../services/NotesService';
import { Note } from '../../../types/Note';

import { Button } from '../../Button';
import { Input } from '../../Input';
import { Modal } from '../../Modal';
import { TextArea } from '../../TextArea';

import { Form } from './styles';

interface EditNoteProps {
  note: Note;
  onUpdateNote(note: Note): void;
}

export function EditNote({ note, onUpdateNote }: EditNoteProps) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [title, setTitle] = useState(note.title);
  const [description, setDescription] = useState(note.description ?? '');

  const { user } = useAuth();

  function handleOpenModal() {
    setIsModalVisible(true);
  }

  async function handleSendForm() {
    setIsSubmitting(true);

    const updatedNote: Note = {
      ...note,
      title,
      description
    };

    const response = await NotesService.updateNote(user.id, updatedNote);

    if (response instanceof Error) {
      toast.error('Houve um erro ao atualizar sua anotação. Tente novamente mais tarde.');
      setIsModalVisible(false);
      return;
    }

    onUpdateNote(response);
    toast.success('Anotação atualizada com sucesso!');
    setIsModalVisible(false);
    setIsSubmitting(false);
  }

  function onCloseModal() {
    setIsModalVisible(false);
  }

  return (
    <>
      <button type='button' onClick={handleOpenModal}>
        <Pencil weight='bold' />
      </button>
      <Modal
        title='Editar anotação'
        visible={isModalVisible}
        onClose={onCloseModal}
      >
        <Form>
          <Input
            placeholder='Título da anotação'
            disabled={isSubmitting}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <TextArea
            placeholder='Digite a descrição'
            disabled={isSubmitting}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <Button
            type='button'
            disabled={title.length === 0}
            onClick={handleSendForm}
            isLoading={isSubmitting}
          >
            Editar anotação
          </Button>
        </Form>
      </Modal>
    </>
  );
}
