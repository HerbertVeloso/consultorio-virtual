import { PlusCircle } from 'phosphor-react';
import { useCallback, useState } from 'react';
import { toast } from 'react-toastify';

import { useAuth } from '../../hooks/useAuth';
import NotesService from '../../services/NotesService';
import { NewNote, Note } from '../../types/Note';

import { Button } from '../Button';
import { Modal } from '../Modal';
import { NoteForm } from '../NoteForm';


interface AddNoteModalProps {
  onSaveNote: (note: Note) => void;
}

export function AddNoteModal({ onSaveNote }: AddNoteModalProps) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isErrorSubmitting, setIsErrorSubmitting] = useState(false);

  const { user } = useAuth();

  function handleOpenModal() {
    setIsModalVisible(true);
  }

  const onCloseModal = useCallback(() => setIsModalVisible(false), [isModalVisible]);

  const onSubmit = useCallback(async (note: NewNote) => {
    try {
      setIsSubmitting(true);

      const responseData = await NotesService.create(user.id, note);
      onSaveNote(responseData);

      toast.success('Anotação criada com sucesso!');
      onCloseModal();
    } catch {
      toast.error('Houve um erro ao criar sua anotação. Tente novamente mais tarde.');
      setIsErrorSubmitting(true);
    } finally {
      setIsSubmitting(false);
    }
  }, [isModalVisible, isSubmitting]);

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
        <NoteForm
          buttonLabel='Criar anotação'
          onSubmit={onSubmit}
          isSubmitting={isSubmitting}
          isErrorSubmitting={isErrorSubmitting}
        />
      </Modal>
    </>
  );
}
