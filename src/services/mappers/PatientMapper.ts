import { DocumentData, QueryDocumentSnapshot } from 'firebase/firestore';

export interface ToPersistenceProps {
  id?: string;
  name: string;
  healthInsurance: string;
  phone: string;
  birthday?: Date;
  comments?: string;
  createdAt?: Date;
}

class PatientMapper {
  toPersistence(patient: ToPersistenceProps) {
    return {
      name: patient.name,
      health_insurance: patient.healthInsurance,
      phone: patient.phone,
      birthday: patient.birthday ? patient.birthday.toISOString() : null,
      comments: patient.comments ?? null,
      created_at: patient.createdAt ? patient.createdAt.toISOString() : new Date().toISOString()
    };
  }

  toDomain(persistenceData: QueryDocumentSnapshot<DocumentData>) {
    const patient = persistenceData.data();

    return {
      id: persistenceData.id,
      name: patient.name,
      healthInsurance: patient.health_insurance,
      phone: patient.phone,
      birthday: patient.birthday ? new Date(patient.birthday) : undefined,
      comments: patient.comments ?? undefined,
      createdAt: new Date(patient.created_at),
    };
  }
}

export default new PatientMapper();
