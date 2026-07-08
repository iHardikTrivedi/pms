import type { Doctor } from "../types/doctor.types";

export const DOCTORS: Doctor[] = [
  {
    id: "DOC-001",
    name: "Dr. Rajesh Sharma",
    mobileNumber: "+91 98765 43210",
    status: "ACTIVE",
    patientCount: 45,
    joinedOn: "01 May 2025",
    basicInformation: "MBBS, MD - General Physician | 12+ Years of Experience",
  },
  {
    id: "DOC-002",
    name: "Dr. Priya Mehta",
    mobileNumber: "+91 98765 43211",
    status: "ACTIVE",
    patientCount: 32,
    joinedOn: "03 May 2025",
    basicInformation: "MBBS, MD - Internal Medicine | 10+ Years of Experience",
  },
  {
    id: "DOC-003",
    name: "Dr. Amit Patel",
    mobileNumber: "+91 98765 43212",
    status: "ACTIVE",
    patientCount: 28,
    joinedOn: "04 May 2025",
    basicInformation: "MBBS, MD - General Medicine | 8+ Years of Experience",
  },
  {
    id: "DOC-004",
    name: "Dr. Neha Verma",
    mobileNumber: "+91 98765 43213",
    status: "DISABLED",
    patientCount: 0,
    joinedOn: "06 May 2025",
    basicInformation: "MBBS - General Physician | 6+ Years of Experience",
  },
  {
    id: "DOC-005",
    name: "Dr. Sandeep Rao",
    mobileNumber: "+91 98765 43214",
    status: "ACTIVE",
    patientCount: 23,
    joinedOn: "07 May 2025",
    basicInformation: "MBBS, MD - General Physician | 9+ Years of Experience",
  },
];
