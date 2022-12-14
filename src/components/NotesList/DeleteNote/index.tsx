import { Trash } from 'phosphor-react';
import { useCallback, useState } from 'react';
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
  const [isDialogVisible, setIsDialogVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { user } = useAuth();

  function handleOpenDialog() {
    setIsDialogVisible(true);
  }

  const onCloseDialog = useCallback(() => {
    setIsDialogVisible(false);
  }, [isDialogVisible]);

  const handleDeleteNote = useCallback(async () => {
    try {
      setIsSubmitting(true);

      await NotesService.delete(user.id, note.id);
      onDeleteNote(note.id);

      toast.success('Anotação excluída com sucesso!');
    } catch {
      toast.error('Houve um erro ao excluir sua anotação. Tente novamente mais tarde.');
    } finally {
      setIsSubmitting(false);
      setIsDialogVisible(false);
    }
  }, [isDialogVisible]);

  return (
    <>
      <button type='button' onClick={handleOpenDialog}>
        <Trash weight='bold' />
      </button>

      <Dialog
        title={`Deseja realmente excluir a anotação: "${note.title}"?`}
        visible={isDialogVisible}
        confirmLabel='Deletar'
        onCancel={onCloseDialog}
        onConfirm={handleDeleteNote}
        buttonIsLoading={isSubmitting}
        danger
      >
        <p>Esta ação não poderá ser desfeita!</p>
      </Dialog>
    </>
  );
}
