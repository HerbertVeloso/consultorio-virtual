import { Trash } from 'phosphor-react';
import { useCallback, useState } from 'react';
import { toast } from 'react-toastify';

import { useAuth } from '../../../hooks/useAuth';
import PatientsService from '../../../services/PatientsService';
import { Patient } from '../../../types/Patient';

import { Dialog } from '../../Dialog';

interface DeletePatientProps {
  patient: Patient;
  onDeletePatient(id: string): void;
}

export function DeletePatient({ patient, onDeletePatient }: DeletePatientProps) {
  const [isDialogVisible, setIsDialogVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { user } = useAuth();

  function handleOpenDialog() {
    setIsDialogVisible(true);
  }

  const onCloseDialog = useCallback(() => {
    setIsDialogVisible(false);
  }, [isDialogVisible]);


  const handleDeletePatient = useCallback(async () => {
    try {
      setIsSubmitting(true);

      await PatientsService.delete(user.id, patient.id);
      onDeletePatient(patient.id);

      toast.success('Paciente excluído com sucesso!');
    } catch {
      toast.error('Houve um erro ao excluir o paciente. Tente novamente mais tarde.');
    } finally {
      setIsSubmitting(false);
      setIsDialogVisible(false);
    }
  }, [isDialogVisible]);

  return (
    <>
      <button type='button' onClick={handleOpenDialog}>
        <Trash weight='bold' />
      </button>

      <Dialog
        title={`Deseja realmente excluir o paciente: "${patient.name}"?`}
        visible={isDialogVisible}
        confirmLabel='Excluir'
        onCancel={onCloseDialog}
        onConfirm={handleDeletePatient}
        buttonIsLoading={isSubmitting}
        danger
      >
        <p>Esta ação não poderá ser desfeita!</p>
      </Dialog>
    </>
  );
}
