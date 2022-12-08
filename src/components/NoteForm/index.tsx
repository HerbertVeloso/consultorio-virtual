import { ChangeEvent, FormEvent, useState } from 'react';

import { NewNote } from '../../types/Note';

import { Button } from '../Button';
import { ErrorMessage } from '../ErrorMessage';
import { Input } from '../Input';
import { TextArea } from '../TextArea';

import { Form } from './styles';

interface NoteFormProps {
  note?: NewNote;
  buttonLabel: string;
  onSubmit: (note: NewNote) => void;
  isSubmitting: boolean;
  isErrorSubmitting: boolean;
}

export function NoteForm({ note, buttonLabel, onSubmit, isSubmitting, isErrorSubmitting }: NoteFormProps) {
  const [noteInfos, setNoteInfos] = useState<NewNote>({
    title: note?.title ?? '',
    description: note?.description ?? ''
  });

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();

    const newNote: NewNote = {
      title: noteInfos.title,
      description: noteInfos.description === '' ? undefined : noteInfos.description
    };

    onSubmit(newNote);
  }

  function handleChangeInput({ target }: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setNoteInfos((prevState) => ({
      ...prevState,
      [target.name]: target.value
    }));
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        name='title'
        placeholder='Título da anotação'
        value={noteInfos.title}
        onChange={handleChangeInput}
        disabled={isSubmitting}
        required
      />
      <TextArea
        name='description'
        placeholder='Digite a descrição'
        value={noteInfos.description}
        onChange={handleChangeInput}
        disabled={isSubmitting}
      />

      {isErrorSubmitting ? (
        <ErrorMessage inline>Erro ao {buttonLabel.toLocaleLowerCase()}.</ErrorMessage>
      ) : (
        <Button
          type='submit'
          disabled={noteInfos.title.length === 0}
          isLoading={isSubmitting}
        >
          {buttonLabel}
        </Button>
      )}

    </Form>
  );
}
