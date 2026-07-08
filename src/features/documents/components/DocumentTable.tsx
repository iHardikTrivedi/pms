"use client";

import { Download, Eye, File, FileImage, FileText, Trash2 } from "lucide-react";

import { EmptyState } from "@/components/ui/EmptyState";
import { formatFileSize } from "@/utils/format-file-size";

import type { PatientDocument } from "../types/document.types";

type DocumentTableProps = {
  documents: PatientDocument[];
  onPreview: (document: PatientDocument) => void;
  onDelete: (document: PatientDocument) => void;
};

function getDocumentIcon(type: PatientDocument["type"]) {
  switch (type) {
    case "IMAGE":
      return FileImage;

    case "PDF":
    case "WORD":
      return FileText;

    default:
      return File;
  }
}

export function DocumentTable({
  documents,
  onPreview,
  onDelete,
}: DocumentTableProps) {
  if (documents.length === 0) {
    return (
      <EmptyState
        title="No Documents"
        description="No Documents have been uploaded for this Patient."
      />
    );
  }

  return (
    <div className="overflow-hidden rounded-xl border border-gray-200 bg-white">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="border-b border-gray-200 bg-gray-50">
            <tr>
              <th className="px-5 py-3 text-left text-xs font-semibold text-gray-600">
                Document
              </th>

              <th className="px-5 py-3 text-left text-xs font-semibold text-gray-600">
                Type
              </th>

              <th className="px-5 py-3 text-left text-xs font-semibold text-gray-600">
                Size
              </th>

              <th className="px-5 py-3 text-left text-xs font-semibold text-gray-600">
                Uploaded On
              </th>

              <th className="px-5 py-3 text-right text-xs font-semibold text-gray-600">
                Actions
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-100">
            {documents.map((document) => {
              const DocumentIcon = getDocumentIcon(document.type);

              return (
                <tr
                  key={document.id}
                  className="transition-colors hover:bg-gray-50"
                >
                  <td className="px-5 py-4">
                    <div className="flex items-center gap-3">
                      <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                        <DocumentIcon size={19} />
                      </div>

                      <div className="min-w-0">
                        <p className="text-sm font-medium text-gray-900">
                          {document.name}
                        </p>

                        <p className="mt-0.5 max-w-64 truncate text-xs text-gray-500">
                          {document.originalName}
                        </p>
                      </div>
                    </div>
                  </td>

                  <td className="px-5 py-4 text-sm text-gray-600">
                    {document.type}
                  </td>

                  <td className="px-5 py-4 text-sm text-gray-600">
                    {formatFileSize(document.size)}
                  </td>

                  <td className="px-5 py-4 text-sm text-gray-600">
                    {document.uploadedAt}
                  </td>

                  <td className="px-5 py-4">
                    <div className="flex items-center justify-end gap-1">
                      <button
                        type="button"
                        onClick={() => onPreview(document)}
                        aria-label={`Preview ${document.name}`}
                        className="flex size-8 items-center justify-center rounded-lg text-gray-500 hover:bg-blue-50 hover:text-blue-600"
                      >
                        <Eye size={16} />
                      </button>

                      <a
                        href={document.url}
                        download={document.originalName}
                        aria-label={`Download ${document.name}`}
                        className="flex size-8 items-center justify-center rounded-lg text-gray-500 hover:bg-blue-50 hover:text-blue-600"
                      >
                        <Download size={16} />
                      </a>

                      <button
                        type="button"
                        onClick={() => onDelete(document)}
                        aria-label={`Delete ${document.name}`}
                        className="flex size-8 items-center justify-center rounded-lg text-gray-500 hover:bg-red-50 hover:text-red-600"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
