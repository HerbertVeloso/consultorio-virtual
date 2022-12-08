import { MagnifyingGlass, X } from 'phosphor-react';
import { FormEvent, useState } from 'react';

import { Button } from '../Button';

import { ClearButton, Form } from './styles';

interface SearchPatientsProps {
  onSearchPatients: (searchTerm: string) => void;
  onClearSearchPatients: () => void;
}

export function SearchPatients({ onSearchPatients, onClearSearchPatients }: SearchPatientsProps) {
  const [searchTerm, setSearchTerm] = useState('');

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    onSearchPatients(searchTerm);
  }

  function handleClearSearch() {
    setSearchTerm('');
    onClearSearchPatients();
  }

  return (
    <Form onSubmit={handleSubmit}>
      <input
        placeholder='Pesquisar paciente'
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
      />
      {searchTerm.length > 0 && (
        <ClearButton
          type='button'
          onClick={handleClearSearch}
        >
          <X />
        </ClearButton>
      )}
      <Button type='submit'>
        <MagnifyingGlass />
      </Button>
    </Form>
  );
}
