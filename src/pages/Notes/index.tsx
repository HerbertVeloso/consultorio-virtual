import { collection, doc, getDocs, updateDoc } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { NotesList } from '../../components/NotesList';
import { useAuth } from '../../hooks/useAuth';
import { database } from '../../services/firebase';
import { Note } from '../../types/Note';
import { Container, Title } from './styles';

export function Notes() {
  const { user } = useAuth();
  const notesRef = collection(database, 'users', user.id, 'notes');

  const [notes, setNotes] = useState<Note[]>([]);
  const [isLoading, setisLoading] = useState(true);

  useEffect(() => {
    console.log('Buscou no banco');

    (async () => {
      try {
        setisLoading(true);
        const querySnapshot = await getDocs(notesRef);
        const notesFormatted: Note[] = [];

        querySnapshot.forEach((doc) => {
          const data = doc.data();

          notesFormatted.push({
            id: doc.id,
            title: data.title,
            description: data.description,
            completed: data.completed ?? false,
            createdAt: data.created_at.toDate(),
          });
        });

        notesFormatted.sort((a, b) =>
          a.createdAt < b.createdAt ? 1 : a.createdAt > b.createdAt ? -1 : 0
        );

        setNotes(notesFormatted);
      } catch {
        toast.error('Houve um erro ao buscar as anotações. Tente novamente mais tarde.');
      } finally {
        setisLoading(false);
      }

    })();
  }, []);

  async function toggleNoteCompleted(note: Note) {
    try {
      const noteRef = doc(database, 'users', user.id, 'notes', note.id);
      await updateDoc(noteRef, { completed: !note.completed });

      const updatedNotes = notes.map((item) =>
        item.id === note.id ? { ...item, completed: !note.completed } : item
      );

      setNotes(updatedNotes);
    } catch {
      toast.error('Erro ao atualizar o status da anotação');
    }
  }

  return (
    <>
      <Title>Anotações</Title>
      <Container>
        <NotesList notes={notes} isLoading={isLoading} toggleNoteCompleted={toggleNoteCompleted} />
      </Container>
    </>
  );
}
