export interface Note {
  id: string;
  title: string;
  description: string | null;
  completed: boolean;
  createdAt: Date;
}

export interface NewNote {
  title: string;
  description?: string;
}
