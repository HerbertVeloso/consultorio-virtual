import { useCallback, useEffect, useState } from 'react';
import { toast } from 'react-toastify';

import { useAuth } from '../../hooks/useAuth';
import NotesService from '../../services/NotesService';
import { Note } from '../../types/Note';

import { AddNoteModal } from '../../components/AddNoteModal';
import { NotesList } from '../../components/NotesList';
import { PageHeader } from '../../components/PageHeader';

import { NotesOverview } from '../../components/NotesOverview';
import { Container } from './styles';

export function Notes() {
  const [notes, setNotes] = useState<Note[]>([]);
  const [isLoading, setisLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const { user } = useAuth();

  useEffect(() => {
    (async () => {
      try {
        setisLoading(true);
        const notesList = await NotesService.list(user.id);
        setNotes(orderNotes(notesList));
      } catch {
        setIsError(true);
        toast.error('Houve um erro ao buscar as anotações. Tente novamente mais tarde.');
      } finally {
        setisLoading(false);
      }
    })();
  }, []);

  const onSaveNote = useCallback((note: Note) => {
    setNotes(prevState => [note, ...prevState]);
  }, [notes]);

  const onUpdateNote = useCallback((note: Note) => {
    setNotes(prevState => prevState.map((item) => item.id === note.id ? note : item));
  }, [notes]);

  function onDeleteNote(id: string) {
    setNotes(prevState => prevState.filter((note) => note.id !== id));
  }

  const onToggleNoteCompleted = useCallback(async (note: Note) => {
    try {
      const newStatus = !note.completed;

      const updatedNotes = notes.map((item) =>
        item.id === note.id ? { ...item, completed: newStatus } : item
      );
      setNotes(orderNotes(updatedNotes));

      await NotesService.toggleCompleted(user.id, note.id, newStatus);
    } catch {
      toast.error('Erro ao atualizar o status da anotação');

      const updatedNotes = notes.map((item) =>
        item.id === note.id ? note : item
      );
      setNotes(orderNotes(updatedNotes));
    }
  }, [notes]);

  function orderNotes(notes: Note[]) {
    return notes.sort((a, b) => {
      if (a.completed && b.completed || !a.completed && !b.completed) {
        return a.createdAt > b.createdAt ? -1 : 1;
      }

      if (a.completed && !b.completed) {
        return 1;
      }

      if (!a.completed && b.completed) {
        return -1;
      }

      return 0;
    });
  }

  return (
    <>
      <PageHeader title='Anotações'>
        <AddNoteModal onSaveNote={onSaveNote} />
      </PageHeader>
      <NotesOverview notes={notes} />
      <Container>
        <NotesList
          notes={notes}
          isLoading={isLoading}
          isError={isError}
          onToggleNoteCompleted={onToggleNoteCompleted}
          onUpdateNote={onUpdateNote}
          onDeleteNote={onDeleteNote}
        />
      </Container>
    </>
  );
}
