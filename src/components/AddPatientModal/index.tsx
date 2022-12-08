import { PlusCircle } from 'phosphor-react';
import { useCallback, useState } from 'react';
import { toast } from 'react-toastify';
import { useAuth } from '../../hooks/useAuth';
import PatientsService from '../../services/PatientsService';

import { NewPatient, Patient } from '../../types/Patient';

import { Button } from '../Button';
import { Modal } from '../Modal';
import { PatientForm } from '../PatientForm';

interface AddPatientModalProps {
  onSavePatient: (patient: Patient) => void;
}

export function AddPatientModal({ onSavePatient }: AddPatientModalProps) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isErrorSubmitting, setIsErrorSubmitting] = useState(false);

  const { user } = useAuth();

  function handleOpenModal() {
    setIsModalVisible(true);
  }

  const onCloseModal = useCallback(() => setIsModalVisible(false), [isModalVisible]);

  const onSubmit = useCallback(async (patient: NewPatient) => {
    try {
      setIsSubmitting(true);

      const responseData = await PatientsService.create(user.id, patient);
      onSavePatient(responseData);

      toast.success('Paciente cadastrado com sucesso!');
      onCloseModal();
    } catch {
      toast.error('Houve um erro ao cadastrar o paciente. Tente novamente mais tarde.');
      setIsErrorSubmitting(true);
    } finally {
      setIsSubmitting(false);
    }
  }, [isModalVisible, isSubmitting]);


  return (
    <>
      <Button onClick={handleOpenModal}>
        <PlusCircle />
        Cadastrar novo paciente
      </Button>

      <Modal
        title='Cadastrar novo paciente'
        visible={isModalVisible}
        onClose={onCloseModal}
      >
        <PatientForm
          buttonLabel='Cadastrar paciente'
          isSubmitting={isSubmitting}
          onSubmit={onSubmit}
          isErrorSubmitting={isErrorSubmitting}
        />
      </Modal>
    </>
  );
}
