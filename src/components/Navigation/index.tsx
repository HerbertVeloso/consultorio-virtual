import { Container, UserContainer } from './styles';

import { NavigationLink } from './NavigationLink';

import { ChartIcon } from '../../assets/icons/ChartIcon';
import { ConsultationIcon } from '../../assets/icons/ConsultationIcon';
import { NoteIcon } from '../../assets/icons/NoteIcons';
import { PatientIcon } from '../../assets/icons/PatientIcon';
import { SurgeryIcon } from '../../assets/icons/SurgeryIcon';
import { useAuth } from '../../hooks/useAuth';

export function Navigation() {
  const { user } = useAuth();

  const navLinks = [
    { to: '/dashboard', label: 'Resumo', icon: <ChartIcon /> },
    { to: 'patients', label: 'Pacientes', icon: <PatientIcon /> },
    { to: 'consultations', label: 'Consultas', icon: <ConsultationIcon /> },
    { to: 'surgeries', label: 'Cirurgias', icon: <SurgeryIcon /> },
    { to: 'notes', label: 'Anotações', icon: <NoteIcon /> },
  ];

  return (
    <Container>

      <nav>
        <ul>
          {navLinks.map((item, index) => (
            <NavigationLink
              key={index}
              to={item.to}
              label={item.label}
              icon={item.icon}
            />
          ))}
        </ul>
      </nav>

      <UserContainer>
        <img
          src={user.avatar}
          alt="Foto de perfil"
          referrerPolicy="no-referrer"
        />
        <span>{user.name}</span>
      </UserContainer>

    </Container>
  );
}
