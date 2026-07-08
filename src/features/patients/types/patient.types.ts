export type PatientGender = "MALE" | "FEMALE" | "OTHER";

export type Patient = {
  id: string;
  name: string;
  dateOfBirth: string;
  gender: PatientGender;
  mobileNumber: string;
  address: string;
  medicalNotes: string;
  createdAt: string;
  updatedAt: string;
};
