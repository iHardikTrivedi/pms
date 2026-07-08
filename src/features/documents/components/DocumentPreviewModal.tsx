"use client";

import { Download, FileText } from "lucide-react";

import { Button } from "@/components/ui/Button";
import { Modal } from "@/components/ui/Modal";

import type { PatientDocument } from "../types/document.types";

type DocumentPreviewModalProps = {
  document: PatientDocument | null;
  onClose: () => void;
};

export function DocumentPreviewModal({
  document,
  onClose,
}: DocumentPreviewModalProps) {
  if (!document) {
    return null;
  }

  const canPreview = document.type === "IMAGE" || document.type === "PDF";

  return (
    <Modal
      isOpen
      title={document.name}
      description={document.originalName}
      onClose={onClose}
    >
      <div>
        {document.type === "IMAGE" && (
          <img
            src={document.url}
            alt={document.name}
            className="max-h-120 w-full rounded-lg object-contain"
          />
        )}

        {document.type === "PDF" && (
          <iframe
            src={document.url}
            title={document.name}
            className="h-120 w-full rounded-lg border border-gray-200"
          />
        )}

        {!canPreview && (
          <div className="flex min-h-64 flex-col items-center justify-center rounded-xl bg-gray-50 p-6 text-center">
            <div className="flex size-14 items-center justify-center rounded-full bg-blue-100 text-blue-600">
              <FileText size={27} />
            </div>

            <p className="mt-4 text-sm font-medium text-gray-900">
              Preview not available
            </p>

            <p className="mt-1 text-xs text-gray-500">
              Download this Document to view its contents.
            </p>
          </div>
        )}

        <div className="mt-5 flex justify-end">
          <a href={document.url} download={document.originalName}>
            <Button type="button">
              <Download size={17} />
              Download
            </Button>
          </a>
        </div>
      </div>
    </Modal>
  );
}
