import { Trash } from 'phosphor-react';
import { useState } from 'react';
import { toast } from 'react-toastify';

import { useAuth } from '../../../hooks/useAuth';
import NotesService from '../../../services/NotesService';
import { Note } from '../../../types/Note';

import { Dialog } from '../../Dialog';

interface DeleteNoteProps {
  note: Note;
  onDeleteNote(id: string): void;
}

export function DeleteNote({ note, onDeleteNote }: DeleteNoteProps) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { user } = useAuth();

  function handleOpenModal() {
    setIsModalVisible(true);
  }

  function onCloseModal() {
    setIsModalVisible(false);
  }

  async function handleDeleteNote() {
    setIsSubmitting(true);

    const response = await NotesService.deleteNote(user.id, note.id);

    if (response instanceof Error) {
      toast.error('Houve um erro ao excluir sua anotação. Tente novamente mais tarde.');
      setIsModalVisible(false);
      return;
    }

    onDeleteNote(note.id);
    toast.success('Anotação excluída com sucesso!');
    setIsSubmitting(false);
    setIsModalVisible(false);
  }

  return (
    <>
      <button type='button' onClick={handleOpenModal}>
        <Trash weight='bold' />
      </button>

      <Dialog
        title={`Deseja realmente excluir a anotação: "${note.title}"?`}
        visible={isModalVisible}
        confirmLabel='Deletar'
        onCancel={onCloseModal}
        onConfirm={handleDeleteNote}
        buttonIsLoading={isSubmitting}
        danger
      >
        <p>{'Esta ação não poderá ser desfeita!'}</p>
      </Dialog>
    </>
  );
}
