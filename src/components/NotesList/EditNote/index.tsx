import { Pencil } from 'phosphor-react';
import { useCallback, useState } from 'react';
import { toast } from 'react-toastify';

import { useAuth } from '../../../hooks/useAuth';
import NotesService from '../../../services/NotesService';
import { NewNote, Note } from '../../../types/Note';

import { Modal } from '../../Modal';
import { NoteForm } from '../../NoteForm';

interface EditNoteProps {
  note: Note;
  onUpdateNote(note: Note): void;
}

export function EditNote({ note, onUpdateNote }: EditNoteProps) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isErrorSubmitting, setIsErrorSubmitting] = useState(false);

  const { user } = useAuth();

  function handleOpenModal() {
    setIsModalVisible(true);
  }

  const onCloseModal = useCallback(() => {
    setIsModalVisible(false);
    setIsErrorSubmitting(false);
  }, [isModalVisible]);

  const onSubmit = useCallback(async (updatedNote: NewNote) => {
    try {
      setIsSubmitting(true);

      const formattedNote: Note = {
        ...note,
        ...updatedNote
      };

      const responseData = await NotesService.update(user.id, formattedNote);
      onUpdateNote(responseData);

      toast.success('Anotação editada com sucesso!');
      onCloseModal();
    } catch {
      toast.error('Houve um erro ao editar sua anotação. Tente novamente mais tarde.');
      setIsErrorSubmitting(true);
    } finally {
      setIsSubmitting(false);
    }
  }, [isModalVisible, isSubmitting]);

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
        <NoteForm
          note={note}
          buttonLabel='Editar anotação'
          onSubmit={onSubmit}
          isSubmitting={isSubmitting}
          isErrorSubmitting={isErrorSubmitting}
        />
      </Modal>
    </>
  );
}
