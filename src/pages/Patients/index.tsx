import { PageHeader } from '../../components/PageHeader';
import { PatientsList } from '../../components/PatientsList';

import { Container } from './styles';

export function Patients() {
  return (
    <>
      <PageHeader
        title='Pacientes'

      />
      <Container>
        <PatientsList />
      </Container>
    </>
  );
}
