import { PatientsList } from '../../components/PatientsList';
import { Container } from './styles';

export function Patients() {
  return (
    <Container>
      <header>
        <h1>Pacientes</h1>
        <div>
          {/* <SearchPatients />
            <DialogAddNewPatient /> */}
        </div>
      </header>
      <PatientsList />
    </Container>
  );
}
