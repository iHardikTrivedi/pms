"use client";

import { FileUp, X } from "lucide-react";
import { useRef, useState, type ChangeEvent, type DragEvent } from "react";

type FileUploadProps = {
  file: File | null;
  accept?: string;
  error?: string;
  helperText?: string;
  onChange: (file: File | null) => void;
};

export function FileUpload({
  file,
  accept,
  error,
  helperText,
  onChange,
}: FileUploadProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  const [isDragging, setIsDragging] = useState(false);

  const handleFile = (selectedFile?: File) => {
    if (!selectedFile) {
      return;
    }

    onChange(selectedFile);
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    handleFile(event.target.files?.[0]);

    event.target.value = "";
  };

  const handleDrop = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();

    setIsDragging(false);

    handleFile(event.dataTransfer.files?.[0]);
  };

  return (
    <div>
      {!file ? (
        <div
          onDragOver={(event) => {
            event.preventDefault();

            setIsDragging(true);
          }}
          onDragLeave={() => setIsDragging(false)}
          onDrop={handleDrop}
          className={[
            "flex min-h-48 flex-col items-center justify-center rounded-xl",
            "border-2 border-dashed p-6 text-center transition-colors",
            isDragging
              ? "border-blue-500 bg-blue-50"
              : "border-gray-300 bg-gray-50",
            error ? "border-red-400" : "",
          ].join(" ")}
        >
          <div className="flex size-12 items-center justify-center rounded-full bg-blue-100 text-blue-600">
            <FileUp size={23} />
          </div>

          <p className="mt-4 text-sm font-medium text-gray-900">
            Drag and drop your file here
          </p>

          <p className="mt-1 text-xs text-gray-500">{helperText}</p>

          <button
            type="button"
            onClick={() => inputRef.current?.click()}
            className="mt-4 text-sm font-medium text-blue-600 hover:text-blue-700"
          >
            Browse File
          </button>

          <input
            ref={inputRef}
            type="file"
            accept={accept}
            onChange={handleInputChange}
            className="hidden"
          />
        </div>
      ) : (
        <div className="flex items-center justify-between rounded-xl border border-gray-200 bg-gray-50 p-4">
          <div className="min-w-0">
            <p className="truncate text-sm font-medium text-gray-900">
              {file.name}
            </p>

            <p className="mt-1 text-xs text-gray-500">
              {(file.size / 1024 / 1024).toFixed(2)} MB
            </p>
          </div>

          <button
            type="button"
            onClick={() => onChange(null)}
            aria-label="Remove File"
            className="flex size-8 shrink-0 items-center justify-center rounded-lg text-gray-500 hover:bg-red-50 hover:text-red-600"
          >
            <X size={17} />
          </button>
        </div>
      )}

      {error && <p className="mt-2 text-xs text-red-600">{error}</p>}
    </div>
  );
}
