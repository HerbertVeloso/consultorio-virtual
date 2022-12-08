import { Eye } from 'phosphor-react';
import { useState } from 'react';

import { Patient } from '../../../types/Patient';
import { Modal } from '../../Modal';

import { Info } from './styles';

interface ViewPatientProps {
  patient: Patient;
}

export function ViewPatient({ patient }: ViewPatientProps) {
  const [isModalVisible, setIsModalVisible] = useState(false);

  function handleOpenModal() {
    setIsModalVisible(true);
  }

  function onCloseModal() {
    setIsModalVisible(false);
  }

  return (
    <>
      <button type='button' onClick={handleOpenModal}>
        <Eye weight='bold' />
      </button>
      <Modal
        title='Paciente'
        visible={isModalVisible}
        onClose={onCloseModal}
      >
        <div>
          <span>Nome:</span>
          <Info>{patient.name}</Info>

          <span>Plano de Saúde:</span>
          <Info>{patient.healthInsurance}</Info>

          <span>Telefone:</span>
          <Info>{patient.phone}</Info>

          {patient.birthday && (
            <>
              <span>Data de Nascimento:</span>
              <Info>{patient.birthday?.toLocaleDateString()}</Info>
            </>

          )}

          {patient.comments && (
            <>
              <span>Observações:</span>
              <Info>{patient.comments}</Info>
            </>

          )}
        </div>
      </Modal>
    </>
  );
}
