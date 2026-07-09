import type { Patient } from "../types/patient.types";

const BASE_PATIENTS: Patient[] = [
  {
    id: "PT-00045",
    name: "Amit Kumar",
    dateOfBirth: "1990-01-12",
    gender: "MALE",
    mobileNumber: "+91 98765 40001",
    address: "Satellite, Ahmedabad, Gujarat",
    medicalNotes: "Patient has a history of seasonal allergies.",
    createdAt: "18 May 2025",
    updatedAt: "18 May 2025",
  },
  {
    id: "PT-00044",
    name: "Neha Agarwal",
    dateOfBirth: "1992-02-22",
    gender: "FEMALE",
    mobileNumber: "+91 98765 40002",
    address: "Navrangpura, Ahmedabad, Gujarat",
    medicalNotes: "Patient reported mild back pain for the last two weeks.",
    createdAt: "17 May 2025",
    updatedAt: "17 May 2025",
  },
  {
    id: "PT-00043",
    name: "Ramesh Patel",
    dateOfBirth: "1965-08-05",
    gender: "MALE",
    mobileNumber: "+91 98765 40003",
    address: "Kalawad Road, Rajkot, Gujarat",
    medicalNotes: "Regular blood pressure monitoring recommended.",
    createdAt: "16 May 2025",
    updatedAt: "16 May 2025",
  },
  {
    id: "PT-00042",
    name: "Sunita Verma",
    dateOfBirth: "1991-03-14",
    gender: "FEMALE",
    mobileNumber: "+91 98765 40004",
    address: "Prahlad Nagar, Ahmedabad, Gujarat",
    medicalNotes: "Patient has occasional migraine symptoms.",
    createdAt: "15 May 2025",
    updatedAt: "15 May 2025",
  },
  {
    id: "PT-00041",
    name: "Vikram Singh",
    dateOfBirth: "1988-11-30",
    gender: "MALE",
    mobileNumber: "+91 98765 40005",
    address: "Bopal, Ahmedabad, Gujarat",
    medicalNotes: "Patient reports knee discomfort after exercise.",
    createdAt: "14 May 2025",
    updatedAt: "14 May 2025",
  },
  {
    id: "PT-00046",
    name: "Anjali Desai",
    dateOfBirth: "1993-06-25",
    gender: "FEMALE",
    mobileNumber: "+91 98765 40006",
    address: "123, Green Park, Ahmedabad, Gujarat",
    medicalNotes: "Patient complains of headache and fatigue since 3 days.",
    createdAt: "18 May 2025",
    updatedAt: "18 May 2025",
  },
];

const FIRST_NAMES = [
  "Rahul",
  "Priya",
  "Amit",
  "Neha",
  "Ramesh",
  "Sunita",
  "Vikram",
  "Anjali",
  "Rajesh",
  "Pooja",
  "Suresh",
  "Kavita",
  "Manish",
  "Sneha",
  "Deepak",
  "Nisha",
  "Kunal",
  "Meera",
  "Rohit",
  "Aarti",
];

const LAST_NAMES = [
  "Patel",
  "Sharma",
  "Mehta",
  "Verma",
  "Singh",
  "Desai",
  "Kumar",
  "Agarwal",
  "Joshi",
  "Shah",
];

const LOCATIONS = [
  "Satellite, Ahmedabad, Gujarat",
  "Navrangpura, Ahmedabad, Gujarat",
  "Bopal, Ahmedabad, Gujarat",
  "Prahlad Nagar, Ahmedabad, Gujarat",
  "Kalawad Road, Rajkot, Gujarat",
  "University Road, Rajkot, Gujarat",
  "Vastrapur, Ahmedabad, Gujarat",
  "Maninagar, Ahmedabad, Gujarat",
  "Adajan, Surat, Gujarat",
  "Alkapuri, Vadodara, Gujarat",
];

const MEDICAL_NOTES = [
  "Regular health checkup recommended.",
  "Patient has a history of seasonal allergies.",
  "Regular blood pressure monitoring recommended.",
  "Patient reports occasional headache symptoms.",
  "Patient reports mild back pain.",
  "Follow-up consultation recommended.",
  "Patient reports fatigue for the last few days.",
  "Routine medical examination completed.",
  "No significant medical history reported.",
  "Patient advised to maintain a healthy lifestyle.",
];

const GENERATED_PATIENT_COUNT = 1000 - BASE_PATIENTS.length;

const GENERATED_PATIENTS: Patient[] = Array.from(
  { length: GENERATED_PATIENT_COUNT },
  (_, index) => {
    const patientNumber = index + 47;

    const firstName = FIRST_NAMES[index % FIRST_NAMES.length];

    const lastName = LAST_NAMES[index % LAST_NAMES.length];

    const year = 1960 + (index % 40);
    const month = String((index % 12) + 1).padStart(2, "0");
    const day = String((index % 28) + 1).padStart(2, "0");

    const createdDay = String((index % 28) + 1).padStart(2, "0");

    return {
      id: `PT-${String(patientNumber).padStart(5, "0")}`,
      name: `${firstName} ${lastName}`,
      dateOfBirth: `${year}-${month}-${day}`,
      gender: index % 2 === 0 ? "MALE" : "FEMALE",
      mobileNumber: `+91 9${String(100000000 + index).padStart(9, "0")}`,
      address: LOCATIONS[index % LOCATIONS.length],
      medicalNotes: MEDICAL_NOTES[index % MEDICAL_NOTES.length],
      createdAt: `${createdDay} May 2025`,
      updatedAt: `${createdDay} May 2025`,
    };
  },
);

export const PATIENTS: Patient[] = [...BASE_PATIENTS, ...GENERATED_PATIENTS];
