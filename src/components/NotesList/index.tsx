import { Eye, Trash } from 'phosphor-react';
import { Note } from '../../types/Note';
import { Loader } from '../Loader';
import { EmptyText, List, Title } from './styles';

interface NoteListProps {
  notes: Note[];
  isLoading: boolean;
  toggleNoteCompleted(note: Note): void;
}

export function NotesList({ notes, isLoading, toggleNoteCompleted }: NoteListProps) {
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

                    <div>
                      <Eye weight='bold' />
                      <Trash weight='bold' />
                    </div>
                  </li>
                ))
              )
        }

      </List>
    </>
  );
}
