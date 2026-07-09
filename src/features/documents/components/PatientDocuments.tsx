"use client";

import { Plus } from "lucide-react";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/Button";

import type {
  DocumentUploadData,
  PatientDocument,
} from "../types/document.types";
import { getDocumentType } from "../utils/document.utils";
import { DeleteDocumentModal } from "./DeleteDocumentModal";
import { DocumentTable } from "./DocumentTable";
import { DocumentUploadModal } from "./DocumentUploadModal";

type PatientDocumentsProps = {
  patientId: string;
  initialDocuments: PatientDocument[];
};

export function PatientDocuments({
  patientId,
  initialDocuments,
}: PatientDocumentsProps) {
  const [documents, setDocuments] =
    useState<PatientDocument[]>(initialDocuments);

  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);

  const [documentToDelete, setDocumentToDelete] =
    useState<PatientDocument | null>(null);

  useEffect(() => {
    return () => {
      documents.forEach((document) => {
        if (document.url.startsWith("blob:")) {
          URL.revokeObjectURL(document.url);
        }
      });
    };
  }, [documents]);

  const handleUpload = async ({ name, file }: DocumentUploadData) => {
    await new Promise((resolve) => setTimeout(resolve, 800));

    const document: PatientDocument = {
      id: crypto.randomUUID(),
      patientId,
      name,
      originalName: file.name,
      type: getDocumentType(file),
      mimeType: file.type,
      size: file.size,
      url: URL.createObjectURL(file),
      uploadedAt: new Intl.DateTimeFormat("en-GB", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      }).format(new Date()),
    };

    setDocuments((previous) => [document, ...previous]);
  };

  const handleDelete = (document: PatientDocument) => {
    if (document.url.startsWith("blob:")) {
      URL.revokeObjectURL(document.url);
    }

    setDocuments((previous) =>
      previous.filter((item) => item.id !== document.id),
    );

    setDocumentToDelete(null);
  };

  return (
    <>
      <div>
        <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-2xl font-semibold text-gray-900">
              Patient Documents
            </h1>

            <p className="mt-1 text-sm text-gray-500">
              Upload and manage Patient Medical Documents.
            </p>
          </div>

          <Button type="button" onClick={() => setIsUploadModalOpen(true)}>
            <Plus size={17} />
            Upload Document
          </Button>
        </div>

        <DocumentTable documents={documents} onDelete={setDocumentToDelete} />
      </div>

      <DocumentUploadModal
        isOpen={isUploadModalOpen}
        onClose={() => setIsUploadModalOpen(false)}
        onUpload={handleUpload}
      />

      <DeleteDocumentModal
        document={documentToDelete}
        onClose={() => setDocumentToDelete(null)}
        onConfirm={handleDelete}
      />
    </>
  );
}
