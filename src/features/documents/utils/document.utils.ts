import {
  ACCEPTED_DOCUMENT_MIME_TYPES,
  MAX_DOCUMENT_FILE_SIZE,
} from "@/constants/document.constants";
import type {
  DocumentFileValidationResult,
  PatientDocumentType,
} from "../types/document.types";

export function validateDocumentFile(file: File): DocumentFileValidationResult {
  const isAcceptedFileType = ACCEPTED_DOCUMENT_MIME_TYPES.some(
    (mimeType) => mimeType === file.type,
  );

  if (!isAcceptedFileType) {
    return {
      isValid: false,
      error: "Only PDF, JPG, PNG, DOC and DOCX files are allowed.",
    };
  }

  if (file.size > MAX_DOCUMENT_FILE_SIZE) {
    return {
      isValid: false,
      error: "File size must be 10 MB or less.",
    };
  }

  return {
    isValid: true,
  };
}

export function getDocumentType(file: File): PatientDocumentType {
  if (file.type === "application/pdf") {
    return "PDF";
  }

  if (file.type.startsWith("image/")) {
    return "IMAGE";
  }

  return "WORD";
}
