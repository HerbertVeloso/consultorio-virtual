import { useCallback, useEffect, useState } from 'react';
import { toast } from 'react-toastify';

import { useAuth } from '../../hooks/useAuth';
import PatientsService from '../../services/PatientsService';
import { Patient } from '../../types/Patient';

import { AddPatientModal } from '../../components/AddPatientModal';
import { PageHeader } from '../../components/PageHeader';
import { PatientsList } from '../../components/PatientsList';

import { Container } from './styles';

export function Patients() {
  const [patients, setPatients] = useState<Patient[]>([]);
  const [filteredPatients, setFilteredPatients] = useState<Patient[]>([]);
  const [isLoading, setisLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const { user } = useAuth();

  useEffect(() => {
    (async () => {
      try {
        setisLoading(true);
        const patientsList = await PatientsService.list(user.id);
        setPatients(patientsList);
      } catch {
        setIsError(true);
        toast.error('Houve um erro ao buscar os pacientes. Tente novamente mais tarde.');
      } finally {
        setisLoading(false);
      }
    })();
  }, []);

  useEffect(() => {
    orderPatients();
    setFilteredPatients(patients);
  }, [patients]);

  const onSavePatient = useCallback((patient: Patient) => {
    setPatients(prevState => [patient, ...prevState]);
  }, [patients]);

  const onSearchPatients = useCallback((searchTerm: string) => {
    setFilteredPatients(patients.filter(patient => (
      patient.name.toLowerCase().includes(searchTerm) || patient.comments?.toLowerCase().includes(searchTerm)
    )));
  }, [patients, filteredPatients]);

  const onClearSearchPatients = useCallback(() => {
    setFilteredPatients(patients);
  }, [filteredPatients, patients]);

  const onUpdatePatient = useCallback((updatedPatient: Patient) => {
    setPatients(prevState => prevState.map((patient) => patient.id === updatedPatient.id ? updatedPatient : patient));
  }, []);

  const onDeletePatient = useCallback((id: string) => {
    setPatients(prevState => prevState.filter((patient) => patient.id !== id));
  }, []);

  function orderPatients() {
    setPatients((prevState) => prevState.sort((a, b) => a.createdAt > b.createdAt ? -1 : 1));
  }

  return (
    <>
      <PageHeader title='Pacientes'>
        <AddPatientModal onSavePatient={onSavePatient} />
      </PageHeader>
      <Container>
        <PatientsList
          patients={filteredPatients}
          isLoading={isLoading}
          isError={isError}
          onSearchPatients={onSearchPatients}
          onClearSearchPatients={onClearSearchPatients}
          onUpdatePatient={onUpdatePatient}
          onDeletePatient={onDeletePatient}
        />
      </Container>
    </>
  );
}
