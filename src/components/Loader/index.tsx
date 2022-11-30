import { Spinner } from '../Spinner';
import { Container } from './styles';

export function Loader() {
  return (
    <Container>
      <Spinner size={64} />
    </Container>
  );
}
