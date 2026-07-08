export type DoctorStatus = "ACTIVE" | "DISABLED";

export type Doctor = {
  id: string;
  name: string;
  mobileNumber: string;
  status: DoctorStatus;
  patientCount: number;
  joinedOn: string;
  basicInformation: string;
};
