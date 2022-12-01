import { addDoc, collection, deleteDoc, doc, getDocs, updateDoc } from 'firebase/firestore';
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

    return notes;
  }

  async createNote(userId: string, note: NewNote) {
    try {
      const noteFormatted = NoteMapper.toPersistence(note);

      const notesRef = collection(database, 'users', userId, 'notes');
      const response = await addDoc(notesRef, noteFormatted);

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

  async updateNote(userId: string, note: Note) {
    try {
      const notesRef = doc(database, 'users', userId, 'notes', note.id);

      const noteFormatted = NoteMapper.toPersistence(note);
      await updateDoc(notesRef, noteFormatted);

      return note;
    } catch {
      return new Error();
    }
  }

  async deleteNote(userId: string, noteId: string) {
    try {
      const noteRef = doc(database, 'users', userId, 'notes', noteId);
      await deleteDoc(noteRef);
    } catch {
      return new Error();
    }
  }

  async updateCompleted(userId: string, noteId: string, completed: boolean) {
    try {
      const noteRef = doc(database, 'users', userId, 'notes', noteId);
      await updateDoc(noteRef, { completed });
    } catch {
      return new Error();
    }
  }
}

export default new NotesService();
