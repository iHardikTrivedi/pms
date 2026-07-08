export const MAX_DOCUMENT_FILE_SIZE = 10 * 1024 * 1024;

export const ACCEPTED_DOCUMENT_MIME_TYPES = [
  "application/pdf",
  "image/jpeg",
  "image/png",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
] as const;

export const DOCUMENT_FILE_ACCEPT = ".pdf,.jpg,.jpeg,.png,.doc,.docx";
