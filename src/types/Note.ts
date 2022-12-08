export interface Note {
  id: string;
  title: string;
  description?: string;
  completed: boolean;
  createdAt: Date;
}

export type NewNote = Pick<Note, 'title' | 'description'>;
