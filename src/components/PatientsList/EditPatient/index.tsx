import { Pencil } from 'phosphor-react';
import { useCallback, useState } from 'react';
import { toast } from 'react-toastify';

import { useAuth } from '../../../hooks/useAuth';
import PatientsService from '../../../services/PatientsService';
import { NewPatient, Patient } from '../../../types/Patient';

import { Modal } from '../../Modal';
import { PatientForm } from '../../PatientForm';

interface EditPatientProps {
  patient: Patient;
  onUpdatePatient(updatedPatient: Patient): void;
}

export function EditPatient({ patient, onUpdatePatient }: EditPatientProps) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isErrorSubmitting, setIsErrorSubmitting] = useState(false);

  const { user } = useAuth();

  function handleOpenModal() {
    setIsModalVisible(true);
  }

  const onCloseModal = useCallback(() => {
    setIsModalVisible(false);
    setIsErrorSubmitting(false);
  }, [isModalVisible]);

  const onSubmit = useCallback(async (updatedPatient: NewPatient) => {
    try {
      setIsSubmitting(true);

      const formattedPatient: Patient = {
        ...patient,
        ...updatedPatient
      };

      const responseData = await PatientsService.update(user.id, formattedPatient);
      onUpdatePatient(responseData);

      toast.success('Paciente editado com sucesso!');
      onCloseModal();
    } catch {
      toast.error('Houve um erro ao editar o paciente. Tente novamente mais tarde.');
      setIsErrorSubmitting(true);
    } finally {
      setIsSubmitting(false);
    }
  }, [isModalVisible]);

  return (
    <>
      <button type='button' onClick={handleOpenModal}>
        <Pencil weight='bold' />
      </button>

      <Modal
        title='Editar paciente'
        visible={isModalVisible}
        onClose={onCloseModal}
      >
        <PatientForm
          patient={patient}
          buttonLabel='Editar paciente'
          isSubmitting={isSubmitting}
          onSubmit={onSubmit}
          isErrorSubmitting={isErrorSubmitting}
        />
      </Modal>
    </>
  );
}
