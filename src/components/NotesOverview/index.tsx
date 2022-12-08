import { Checks, Clock, ListBullets } from 'phosphor-react';

import { Note } from '../../types/Note';

import { Box, Overview } from './styles';

interface NotesOverviewProps {
  notes: Note[];
}

export function NotesOverview({ notes }: NotesOverviewProps) {
  const overview = notes.reduce((acc, note) => {
    note.completed ? acc.completed += 1 : acc.pending += 1;

    return acc;
  }, {
    pending: 0,
    completed: 0,
  });

  return (
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
  );
}
