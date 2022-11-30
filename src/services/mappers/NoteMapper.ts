import { DocumentData, QueryDocumentSnapshot } from 'firebase/firestore';

export interface ToPersistenceProps {
  id?: string;
  title: string;
  description?: string | null;
  completed?: boolean;
  createdAt?: Date;
}

class NoteMapper {
  toPersistence(note: ToPersistenceProps) {
    return {
      title: note.title,
      description: note.description ?? null,
      completed: note.completed ?? false,
      created_at: note.createdAt ? note.createdAt.toISOString() : new Date().toISOString()
    };
  }

  toDomain(persistenceNote: QueryDocumentSnapshot<DocumentData>) {
    const data = persistenceNote.data();

    return {
      id: persistenceNote.id,
      title: data.title,
      description: data.description,
      completed: data.completed ?? false,
      createdAt: new Date(data.created_at),
    };
  }
}

export default new NoteMapper();
