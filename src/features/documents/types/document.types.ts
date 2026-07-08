export type PatientDocumentType = "PDF" | "IMAGE" | "WORD";

export type PatientDocument = {
  id: string;
  patientId: string;
  name: string;
  originalName: string;
  type: PatientDocumentType;
  mimeType: string;
  size: number;
  url: string;
  uploadedAt: string;
};

export type DocumentUploadData = {
  name: string;
  file: File;
};

export type DocumentFileValidationResult = {
  isValid: boolean;
  error?: string;
};
