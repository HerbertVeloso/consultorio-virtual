import { Checks, Clock, ListBullets } from 'phosphor-react';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

import { useAuth } from '../../hooks/useAuth';
import NotesService from '../../services/NotesService';
import { Note } from '../../types/Note';

import { AddNoteButton } from '../../components/AddNoteButton';
import { NotesList } from '../../components/NotesList';
import { PageHeader } from '../../components/PageHeader';

import { Box, Container, Overview } from './styles';

export function Notes() {
  const { user } = useAuth();

  const [notes, setNotes] = useState<Note[]>([]);
  const [isLoading, setisLoading] = useState(true);

  const overview = notes.reduce((acc, note) => {
    note.completed ? acc.completed += 1 : acc.pending += 1;

    return acc;
  }, {
    pending: 0,
    completed: 0,
  });

  useEffect(() => {
    (async () => {
      setisLoading(true);
      try {
        const notesList = await NotesService.listNotes(user.id);
        setNotes(notesList);
        orderNotes();
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
    orderNotes();

    const response = await NotesService.updateCompleted(user.id, note.id, newStatus);

    if (response instanceof Error) {
      toast.error('Erro ao atualizar o status da anotação');
      const updatedNotes = notes.map((item) =>
        item.id === note.id ? { ...item, completed: !newStatus } : item
      );
      setNotes(updatedNotes);
      orderNotes();
    }
  }

  function orderNotes() {
    setNotes(prevState => prevState.sort((a, b) => {
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
    }));
  }

  return (
    <>
      <PageHeader title='Anotações'>
        <AddNoteButton onSaveNote={onSaveNote} />
      </PageHeader>
      <Overview>
        <Box>
          <Clock weight='bold' />
          <div>
            <strong>{overview.pending}</strong>
            <span>Pendentes</span>
          </div>
        </Box>
        <Box>
          <Checks weight='bold' />
          <div>
            <strong>{overview.completed}</strong>
            <span>Concluídas</span>
          </div>
        </Box>
        <Box>
          <ListBullets weight='bold' />
          <strong>{notes.length}</strong>
          <span>Total</span>
          <div>
          </div>
        </Box>
      </Overview>
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
