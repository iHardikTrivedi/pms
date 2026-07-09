"use client";

import { AlertTriangle } from "lucide-react";
import type { ReactNode } from "react";

import { Button } from "@/components/ui/Button";
import { Modal } from "@/components/ui/Modal";

type ConfirmationModalProps = {
  isOpen: boolean;
  title: string;
  description?: string;
  message: string;
  confirmLabel?: string;
  cancelLabel?: string;
  onClose: () => void;
  onConfirm: () => void;
  confirmButtonVariant?: "primary" | "danger";
  children?: ReactNode;
};

export function ConfirmationModal({
  isOpen,
  title,
  description,
  message,
  confirmLabel = "Yes",
  cancelLabel = "No",
  onClose,
  onConfirm,
  confirmButtonVariant = "primary",
  children,
}: ConfirmationModalProps) {
  if (!isOpen) {
    return null;
  }

  return (
    <Modal
      isOpen={isOpen}
      title={title}
      description={description}
      onClose={onClose}
    >
      <div>
        <div className="flex items-start gap-3 rounded-lg bg-amber-50 p-4">
          <AlertTriangle size={20} className="mt-0.5 shrink-0 text-amber-600" />

          <p className="text-sm leading-6 text-amber-700">{message}</p>
        </div>

        {children}

        <div className="mt-6 flex items-center justify-end gap-3">
          <Button type="button" variant="secondary" onClick={onClose}>
            {cancelLabel}
          </Button>

          <Button
            type="button"
            variant={confirmButtonVariant}
            onClick={onConfirm}
          >
            {confirmLabel}
          </Button>
        </div>
      </div>
    </Modal>
  );
}
