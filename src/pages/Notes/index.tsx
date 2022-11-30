import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

import { useAuth } from '../../hooks/useAuth';
import NotesService from '../../services/NotesService';
import { Note } from '../../types/Note';

import { AddNoteButton } from '../../components/AddNoteButton';
import { NotesList } from '../../components/NotesList';
import { PageHeader } from '../../components/PageHeader';

import { Container } from './styles';

export function Notes() {
  const { user } = useAuth();

  const [notes, setNotes] = useState<Note[]>([]);
  const [isLoading, setisLoading] = useState(true);

  useEffect(() => {
    (async () => {
      setisLoading(true);
      try {
        const notesList = await NotesService.listNotes(user.id);
        setNotes(notesList);
      } catch {
        toast.error('Houve um erro ao buscar as anotações. Tente novamente mais tarde.');
      } finally {
        setisLoading(false);
      }
    })();
  }, []);

  function onSaveNote(note: Note) {
    setNotes(prevState => [note, ...prevState]);
  }

  function onUpdateNote(note: Note) {
    setNotes(prevState => prevState.map((item) => item.id === note.id ? note : item));
  }

  function onDeleteNote(id: string) {
    setNotes(prevState => prevState.filter((note) => note.id !== id));
  }

  async function toggleNoteCompleted(note: Note) {
    const newStatus = !note.completed;

    const updatedNotes = notes.map((item) =>
      item.id === note.id ? { ...item, completed: newStatus } : item
    );
    setNotes(updatedNotes);

    const response = await NotesService.updateCompleted(user.id, note.id, newStatus);

    if (response instanceof Error) {
      toast.error('Erro ao atualizar o status da anotação');
      const updatedNotes = notes.map((item) =>
        item.id === note.id ? { ...item, completed: !newStatus } : item
      );
      setNotes(updatedNotes);
    }
  }

  return (
    <>
      <PageHeader title='Anotações'>
        <AddNoteButton onSaveNote={onSaveNote} />
      </PageHeader>
      <Container>
        <NotesList
          notes={notes}
          isLoading={isLoading}
          toggleNoteCompleted={toggleNoteCompleted}
          onUpdateNote={onUpdateNote}
          onDeleteNote={onDeleteNote}
        />
      </Container>
    </>
  );
}
