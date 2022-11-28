import { IconProps } from 'phosphor-react';
import { NavLink } from 'react-router-dom';

import { Wrapper } from './styles';

interface NavLinkProps {
  to: string;
  label: string;
  icon: IconProps;
}

export function NavigationLink({ to, label, icon }: NavLinkProps) {
  return (
    <Wrapper>
      <NavLink
        to={to}
        className={({ isActive }) => (isActive ? 'active' : undefined)}
        end
      >
        <>
          {icon}
          <span>{label}</span>
        </>
      </NavLink>
    </Wrapper>
  );
}
