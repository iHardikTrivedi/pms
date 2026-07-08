import type { UserRole } from "@/constants/roles";

export type DoctorStatus = "ACTIVE" | "DISABLED";

export type Doctor = {
  id: string;
  name: string;
  mobileNumber: string;
  role: UserRole;
  status: DoctorStatus;
  patientCount: number;
  joinedOn: string;
  basicInformation: string;
};
