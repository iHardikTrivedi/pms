"use client";

import { useState, type FormEvent } from "react";

import { Button } from "@/components/ui/Button";
import { FileUpload } from "@/components/ui/FileUpload";
import { Input } from "@/components/ui/Input";
import { Modal } from "@/components/ui/Modal";

import { DOCUMENT_FILE_ACCEPT } from "@/constants/document.constants";
import { DocumentUploadData } from "../types/document.types";
import { validateDocumentFile } from "../utils/document.utils";

type DocumentUploadModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onUpload: (data: DocumentUploadData) => Promise<void> | void;
};

export function DocumentUploadModal({
  isOpen,
  onClose,
  onUpload,
}: DocumentUploadModalProps) {
  const [documentName, setDocumentName] = useState("");

  const [file, setFile] = useState<File | null>(null);

  const [fileError, setFileError] = useState("");

  const [isUploading, setIsUploading] = useState(false);

  const resetForm = () => {
    setDocumentName("");
    setFile(null);
    setFileError("");
  };

  const handleClose = () => {
    if (isUploading) {
      return;
    }

    resetForm();
    onClose();
  };

  const handleFileChange = (selectedFile: File | null) => {
    setFileError("");

    if (!selectedFile) {
      setFile(null);
      return;
    }

    const validation = validateDocumentFile(selectedFile);

    if (!validation.isValid) {
      setFile(null);

      setFileError(validation.error ?? "Invalid Document.");

      return;
    }

    setFile(selectedFile);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!file) {
      setFileError("Please select a Document.");

      return;
    }

    setIsUploading(true);

    try {
      await onUpload({
        name: documentName.trim(),
        file,
      });

      resetForm();
      onClose();
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      title="Upload Document"
      description="Upload a Patient Medical Document."
      onClose={handleClose}
    >
      <form onSubmit={handleSubmit}>
        <div className="space-y-5">
          <Input
            id="documentName"
            label="Document Name"
            placeholder="Example: Blood Test Report"
            value={documentName}
            onChange={(event) => setDocumentName(event.target.value)}
            disabled={isUploading}
            required
          />

          <div>
            <label className="mb-1.5 block text-sm font-medium text-gray-700">
              Document
              <span className="ml-1 text-red-500">*</span>
            </label>

            <FileUpload
              file={file}
              accept={DOCUMENT_FILE_ACCEPT}
              error={fileError}
              helperText="PDF, JPG, PNG, DOC or DOCX up to 10 MB"
              onChange={handleFileChange}
            />
          </div>
        </div>

        <div className="mt-6 flex items-center justify-end gap-3 border-t border-gray-200 pt-5">
          <Button
            type="button"
            variant="secondary"
            onClick={handleClose}
            disabled={isUploading}
          >
            Cancel
          </Button>

          <Button type="submit" isLoading={isUploading}>
            Upload Document
          </Button>
        </div>
      </form>
    </Modal>
  );
}
