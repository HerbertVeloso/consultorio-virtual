
import { Patient } from '../../types/Patient';
import { formatDate } from '../../utils/formatDate';

import { ErrorMessage } from '../ErrorMessage';
import { Loader } from '../Loader';
import { SearchPatients } from '../SearchPatients';
import { EditPatient } from './EditPatient';
import { ViewPatient } from './ViewPatient';

import { DeletePatient } from './DeletePatient';
import { Actions, Container, EmptyText, Header, Item, List, ListHeader, Title } from './styles';

interface PatientsListProps {
  patients: Patient[];
  isLoading?: boolean;
  isError?: boolean;
  onSearchPatients: (searchTerm: string) => void;
  onClearSearchPatients: () => void;
  onUpdatePatient(updatedPatient: Patient): void;
  onDeletePatient(id: string): void;
}

export function PatientsList({
  patients,
  isLoading,
  isError,
  onSearchPatients,
  onClearSearchPatients,
  onUpdatePatient,
  onDeletePatient
}: PatientsListProps) {

  return (
    <Container>
      <Header>
        <Title>Lista de Pacientes {patients.length > 0 && `(${patients.length})`}</Title>
        {!isLoading && !isError && (
          <SearchPatients
            onSearchPatients={onSearchPatients}
            onClearSearchPatients={onClearSearchPatients}
          />
        )}
      </Header>

      {isLoading && <Loader />}

      {!isLoading && isError && <ErrorMessage>Não foi possível buscar os pacientes no banco de dados. Tente novamente mais tarde.</ErrorMessage>}

      {!isLoading && !isError && (
        patients.length === 0
          ? <EmptyText>Nenhum paciente cadastrado.</EmptyText>
          : (
            <>
              <ListHeader>
                <strong>Nome</strong>
                <strong>Telefone</strong>
                <strong>Data de nascimento</strong>
                <strong>Plano de saúde</strong>
                <strong>Ações</strong>
              </ListHeader>
              <List>
                {
                  patients.map((patient) => (
                    <Item key={patient.id}>
                      <span>{patient.name}</span>
                      <span>{patient.phone}</span>
                      <span>{patient.birthday && formatDate(patient.birthday)}</span>
                      <span>{patient.healthInsurance}</span>
                      <Actions>
                        <ViewPatient patient={patient} />
                        <EditPatient patient={patient} onUpdatePatient={onUpdatePatient} />
                        <DeletePatient patient={patient} onDeletePatient={onDeletePatient} />
                        {/* <EditNote note={note} onUpdateNote={onUpdateNote} /> */}
                        {/* <DeleteNote note={note} onDeleteNote={onDeleteNote} /> */}
                      </Actions>
                    </Item>
                  ))
                }
              </List>
            </>
          )
      )}

    </Container>
  );
}
