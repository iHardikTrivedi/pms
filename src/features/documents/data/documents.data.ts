import type { PatientDocument } from "../types/document.types";

export const DOCUMENTS: PatientDocument[] = [
  {
    id: "DOC-FILE-001",
    patientId: "PT-00046",
    name: "Blood Test Report",
    originalName: "blood-test-report.pdf",
    type: "PDF",
    mimeType: "application/pdf",
    size: 245760,
    url: "/sample-documents/blood-test-report.pdf",
    uploadedAt: "18 May 2025",
  },
  {
    id: "DOC-FILE-002",
    patientId: "PT-00046",
    name: "Prescription",
    originalName: "prescription.jpg",
    type: "IMAGE",
    mimeType: "image/jpeg",
    size: 524288,
    url: "/sample-documents/prescription.jpg",
    uploadedAt: "18 May 2025",
  },
  {
    id: "DOC-FILE-003",
    patientId: "PT-00046",
    name: "Medical History",
    originalName: "medical-history.docx",
    type: "WORD",
    mimeType:
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    size: 102400,
    url: "/sample-documents/medical-history.docx",
    uploadedAt: "17 May 2025",
  },
];
