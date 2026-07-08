"use client";

import { Trash2 } from "lucide-react";

import { Button } from "@/components/ui/Button";
import { Modal } from "@/components/ui/Modal";

import type { PatientDocument } from "../types/document.types";

type DeleteDocumentModalProps = {
  document: PatientDocument | null;
  onClose: () => void;
  onConfirm: (document: PatientDocument) => void;
};

export function DeleteDocumentModal({
  document,
  onClose,
  onConfirm,
}: DeleteDocumentModalProps) {
  if (!document) {
    return null;
  }

  return (
    <Modal
      isOpen
      title="Delete Document"
      description="This action cannot be undone."
      onClose={onClose}
    >
      <div>
        <div className="flex items-start gap-3 rounded-lg bg-red-50 p-4">
          <Trash2 size={20} className="mt-0.5 shrink-0 text-red-600" />

          <p className="text-sm leading-6 text-red-700">
            Are you sure you want to delete <strong>{document.name}</strong>?
          </p>
        </div>

        <div className="mt-6 flex items-center justify-end gap-3">
          <Button type="button" variant="secondary" onClick={onClose}>
            Cancel
          </Button>

          <Button
            type="button"
            variant="danger"
            onClick={() => onConfirm(document)}
          >
            Delete Document
          </Button>
        </div>
      </div>
    </Modal>
  );
}
