import { addDoc, collection, doc, getDocs, updateDoc } from 'firebase/firestore';
import { NewNote, Note } from '../types/Note';
import { database } from './firebase';
import NoteMapper from './mappers/NoteMapper';


class NotesService {
  async listNotes(userId: string) {
    const notesRef = collection(database, 'users', userId, 'notes');
    const querySnapshot = await getDocs(notesRef);
    const notes: Note[] = [];

    querySnapshot.forEach((document) => {
      const note = NoteMapper.toDomain(document);
      notes.push(note);
    });

    notes.sort((a, b) =>
      a.createdAt < b.createdAt ? 1 : a.createdAt > b.createdAt ? -1 : 0
    );

    return notes;
  }

  async createNote(userId: string, note: NewNote) {
    try {
      const noteFormatted = NoteMapper.toPersistence(note);

      const notesRef = collection(database, 'users', userId, 'notes');
      const response = await addDoc(notesRef, noteFormatted);

      console.log('Resposta do create', response);

      const newNote: Note = {
        id: response.id,
        title: note.title,
        description: note.description ?? null,
        completed: false,
        createdAt: new Date()
      };

      return newNote;
    } catch {
      return new Error();
    }
  }

  async updateCompleted(userId: string, noteId: string, isCompleted: boolean) {
    try {
      const noteRef = doc(database, 'users', userId, 'notes', noteId);
      await updateDoc(noteRef, { completed: isCompleted });
    } catch {
      return new Error();
    }
  }
}

export default new NotesService();



// async function toggleNoteCompleted(note: Note) {
//   const newStatus = !note.completed;

//   const updatedNotes = notes.map((item) =>
//     item.id === note.id ? { ...item, completed: newStatus } : item
//   );
//   setNotes(updatedNotes);

//   try {
//     const noteRef = doc(database, 'users', user.id, 'notes', note.id);
//     await updateDoc(noteRef, { completed: newStatus });

//   } catch {
//     toast.error('Erro ao atualizar o status da anotação');

//     const updatedNotes = notes.map((item) =>
//       item.id === note.id ? { ...item, completed: !newStatus } : item
//     );
//     setNotes(updatedNotes);
//   }
// }
