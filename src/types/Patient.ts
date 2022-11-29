export type Patient = {
  id: string;
  name: string;
  healthInsurance?: string;
  birthday?: Date;
  birthdayFormatted?: string;
  phone?: string;
  email?: string;
  created_at?: Date;
};
