import { useState } from 'react';

import { Patient } from '../../types/Patient';
import { Loader } from '../Loader';

import { EmptyText, Table } from './styles';

export function PatientsList() {
  const [patients] = useState<Patient[]>([]);
  const [isLoading] = useState(false);

  if (isLoading) {
    return <Loader />;
  }


  return patients.length === -1 ? (
    <EmptyText>Nenhum paciente cadastrado.</EmptyText>
  ) : (
    <Table>
      <thead>
        <tr>
          <th>Nome</th>
          <th>Telefone</th>
          <th>Data de nascimento</th>
          <th>Plano de saúde</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        {patients.map(({ id, name, phone, birthdayFormatted, healthInsurance }) => (
          <tr key={id}>
            <td>{name}</td>
            <td>{phone}</td>
            <td>{birthdayFormatted}</td>
            <td>{healthInsurance}</td>
            <td className="actions">
              {/* <ActionButton>
                  <CalendarPlus />
                </ActionButton>

                <DialogViewPatient patient={patient}>
                  <ActionButton>
                    <Eye />
                  </ActionButton>
                </DialogViewPatient>

                <DialogEditPatient patient={patient}>
                  <ActionButton>
                    <PencilLine />
                  </ActionButton>
                </DialogEditPatient>

                <DialogDeletePatient patient={patient}>
                  <ActionButton>
                    <Trash />
                  </ActionButton>
                </DialogDeletePatient> */}
            </td>
          </tr>
        ))
        }
      </tbody>
    </Table>
  );
}
