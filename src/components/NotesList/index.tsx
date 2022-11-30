
import { Note } from '../../types/Note';

import { Loader } from '../Loader';
import { DeleteNote } from './DeleteNote';
import { ViewNote } from './ViewNote';

import { EditNote } from './EditNote';
import { Actions, EmptyText, List, Title } from './styles';

interface NoteListProps {
  notes: Note[];
  isLoading: boolean;
  toggleNoteCompleted(note: Note): void;
  onUpdateNote(note: Note): void;
  onDeleteNote(id: string): void;
}

export function NotesList({ notes, isLoading, toggleNoteCompleted, onUpdateNote, onDeleteNote }: NoteListProps) {
  return (
    <>
      <Title>Lista de anotações</Title>
      <List>
        {
          isLoading
            ? <Loader />
            : notes.length === 0
              ? <EmptyText>Nenhuma anotação cadastrada</EmptyText>
              : (
                notes.map(note => (
                  <li key={note.id} className={note.completed ? 'completed' : ''}>
                    <label>
                      <input
                        type="checkbox"
                        checked={note.completed}
                        onChange={() => toggleNoteCompleted(note)}
                      />
                      <span></span>
                    </label>

                    <p>{note.title}</p>

                    <Actions>
                      <ViewNote note={note} />
                      <EditNote note={note} onUpdateNote={onUpdateNote} />
                      <DeleteNote note={note} onDeleteNote={onDeleteNote} />
                    </Actions>
                  </li>
                ))
              )
        }

      </List>
    </>
  );
}
