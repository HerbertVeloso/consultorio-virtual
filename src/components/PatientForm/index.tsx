import { ChangeEvent, FormEvent, useState } from 'react';

import { useErrors } from '../../hooks/useErrors';
import { NewPatient } from '../../types/Patient';
import { formatPhone } from '../../utils/formatPhone';

import { Button } from '../Button';
import { ErrorMessage } from '../ErrorMessage';
import { FormGroup } from '../FormGroup';
import { Input } from '../Input';
import { InputDate } from '../InputDate';
import { TextArea } from '../TextArea';

import { Form } from './styles';

interface FormPatientProps {
  patient?: NewPatient;
  buttonLabel: string;
  onSubmit: (patient: NewPatient) => void;
  isSubmitting: boolean;
  isErrorSubmitting: boolean;
}

export function PatientForm({ patient, buttonLabel, isSubmitting, isErrorSubmitting, onSubmit }: FormPatientProps) {
  const [patientInfos, setPatientInfos] = useState<NewPatient>({
    name: patient?.name ?? '',
    healthInsurance: patient?.healthInsurance ?? '',
    phone: patient?.phone ?? '',
    comments: patient?.comments ?? ''
  });
  const [birthday, setBirthday] = useState<Date | null>(patient?.birthday ?? null);

  const fieldNameFormated: Record<string, string> = {
    name: 'Nome',
    healthInsurance: 'Plano de saúde',
    phone: 'Telefone',
    birthday: 'Data de nascimento',
    comments: 'Observações'
  };

  const { errors, setError, removeError, getErrorMessageByFieldName } = useErrors();

  const isFormValid = patientInfos.name && patientInfos.healthInsurance && patientInfos.phone && errors.length === 0;

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();

    const newPatient: NewPatient = {
      name: patientInfos.name,
      healthInsurance: patientInfos.healthInsurance,
      phone: patientInfos.phone,
      birthday: birthday ?? undefined,
      comments: patientInfos.comments === '' ? undefined : patientInfos.comments
    };

    onSubmit(newPatient);
  }

  function handleChangeInput({ target }: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setPatientInfos((prevState) => ({
      ...prevState,
      [target.name]: target.name === 'phone' ? formatPhone(target.value) : target.value
    }));

    removeError(target.name);

    if (target.required && target.value === '') {
      setError({ fieldName: target.name, message: `${fieldNameFormated[target.name]} é obrigatório.` });
    }

    if (target.name === 'phone' && formatPhone(target.value).length < 14) {
      setError({ fieldName: target.name, message: 'Digite um número válido.' });
    }
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup error={getErrorMessageByFieldName('name')}>
        <Input
          placeholder='Nome do paciente *'
          name='name'
          value={patientInfos.name}
          onChange={handleChangeInput}
          disabled={isSubmitting}
          error={getErrorMessageByFieldName('name')}
          required
        />
      </FormGroup>

      <FormGroup error={getErrorMessageByFieldName('healthInsurance')}>
        <Input
          placeholder='Plano de Saúde *'
          name='healthInsurance'
          value={patientInfos.healthInsurance}
          onChange={handleChangeInput}
          disabled={isSubmitting}
          error={getErrorMessageByFieldName('healthInsurance')}
          required
        />
      </FormGroup>

      <FormGroup error={getErrorMessageByFieldName('phone')}>
        <Input
          placeholder='Telefone *'
          name='phone'
          value={patientInfos.phone}
          onChange={handleChangeInput}
          disabled={isSubmitting}
          maxLength={15}
          error={getErrorMessageByFieldName('phone')}
          required
        />
      </FormGroup>

      <InputDate
        placeholder='Data de nascimento'
        selected={birthday}
        onChange={setBirthday}
        disabled={isSubmitting}
      />

      <TextArea
        placeholder='Observações'
        name='comments'
        value={patientInfos.comments}
        onChange={handleChangeInput}
        disabled={isSubmitting}
      />

      {isErrorSubmitting ? (
        <ErrorMessage inline>Erro ao {buttonLabel.toLocaleLowerCase()}.</ErrorMessage>
      ) : (
        <Button
          type='submit'
          disabled={!isFormValid}
          isLoading={isSubmitting}
        >
          {buttonLabel}
        </Button>
      )}
    </Form>
  );
}
