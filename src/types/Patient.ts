export type Patient = {
  id: string;
  name: string;
  healthInsurance: string;
  phone: string;
  birthday?: Date;
  comments?: string;
  createdAt: Date;
};

export type NewPatient = Pick<Patient, 'name' | 'healthInsurance' | 'phone' | 'birthday' | 'comments'>;
