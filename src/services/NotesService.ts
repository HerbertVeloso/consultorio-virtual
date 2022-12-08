import { addDoc, collection, deleteDoc, doc, getDocs, updateDoc } from 'firebase/firestore';
import { database } from '../database/firebase';
import { NewNote, Note } from '../types/Note';
import NoteMapper from './mappers/NoteMapper';

class NotesService {
  async list(userId: string) {
    const notesRef = collection(database, 'users', userId, 'notes');
    const querySnapshot = await getDocs(notesRef);

    if (querySnapshot.metadata.fromCache) {
      throw new Error();
    }

    const notes: Note[] = [];

    querySnapshot.forEach((document) => {
      const note = NoteMapper.toDomain(document);
      notes.push(note);
    });

    return notes;
  }

  async create(userId: string, note: NewNote) {
    const noteFormatted = NoteMapper.toPersistence(note);

    const notesRef = collection(database, 'users', userId, 'notes');
    const response = await addDoc(notesRef, noteFormatted);

    const newNote: Note = {
      id: response.id,
      title: note.title,
      description: note.description,
      completed: false,
      createdAt: new Date()
    };

    return newNote;
  }

  async update(userId: string, note: Note) {
    const noteFormatted = NoteMapper.toPersistence(note);

    const noteRef = doc(database, 'users', userId, 'notes', note.id);
    await updateDoc(noteRef, noteFormatted);

    return note;
  }

  async delete(userId: string, noteId: string) {
    const noteRef = doc(database, 'users', userId, 'notes', noteId);
    await deleteDoc(noteRef);
  }

  async toggleCompleted(userId: string, noteId: string, completed: boolean) {
    const noteRef = doc(database, 'users', userId, 'notes', noteId);
    await updateDoc(noteRef, { completed });
  }
}

export default new NotesService();
