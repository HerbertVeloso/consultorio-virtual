import { addDoc, collection, deleteDoc, doc, getDocs, updateDoc } from 'firebase/firestore';

import { database } from '../database/firebase';
import { NewPatient, Patient } from '../types/Patient';
import PatientMapper from './mappers/PatientMapper';

class PatientsService {
  async list(userId: string) {
    const patientsRef = collection(database, 'users', userId, 'patients');
    const querySnapshot = await getDocs(patientsRef);

    if (querySnapshot.metadata.fromCache) {
      throw new Error();
    }

    const patients: Patient[] = [];

    querySnapshot.forEach((document) => {
      const patient = PatientMapper.toDomain(document);
      patients.push(patient);
    });

    return patients;
  }

  async create(userId: string, patient: NewPatient) {
    const patientFormatted = PatientMapper.toPersistence(patient);

    const patientsRef = collection(database, 'users', userId, 'patients');
    const response = await addDoc(patientsRef, patientFormatted);

    const newPatient: Patient = {
      id: response.id,
      name: patient.name,
      healthInsurance: patient.healthInsurance,
      phone: patient.phone,
      birthday: patient.birthday,
      comments: patient.comments,
      createdAt: new Date()
    };

    return newPatient;
  }

  async update(userId: string, patient: Patient) {
    const patientRef = doc(database, 'users', userId, 'patients', patient.id);

    const patientFormatted = PatientMapper.toPersistence(patient);
    await updateDoc(patientRef, patientFormatted);

    return patient;
  }

  async delete(userId: string, patientId: string) {
    const patientRef = doc(database, 'users', userId, 'patients', patientId);
    await deleteDoc(patientRef);
  }
}

export default new PatientsService();
