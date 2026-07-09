"use client";

import { ChevronLeft, ChevronRight, Pencil, Trash2 } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import type { Patient } from "../types/patient.types";

type PatientTableProps = {
  patients: Patient[];
};

const ROWS_PER_PAGE = 10;

function formatGender(gender: Patient["gender"]) {
  return gender.charAt(0) + gender.slice(1).toLowerCase();
}

export function PatientTable({ patients }: PatientTableProps) {
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    setCurrentPage(1);
  }, [patients.length]);

  const totalPages = Math.max(1, Math.ceil(patients.length / ROWS_PER_PAGE));
  const startIndex = (currentPage - 1) * ROWS_PER_PAGE;
  const paginatedPatients = patients.slice(
    startIndex,
    startIndex + ROWS_PER_PAGE,
  );

  const goToPreviousPage = () => {
    setCurrentPage((page) => Math.max(1, page - 1));
  };

  const goToNextPage = () => {
    setCurrentPage((page) => Math.min(totalPages, page + 1));
  };

  return (
    <div className="overflow-hidden rounded-xl border border-gray-200 bg-white">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="border-b border-gray-200 bg-gray-50">
            <tr>
              <th className="px-5 py-3 text-left text-xs font-semibold text-gray-600">
                Patient ID
              </th>

              <th className="px-5 py-3 text-left text-xs font-semibold text-gray-600">
                Patient Name
              </th>

              <th className="px-5 py-3 text-left text-xs font-semibold text-gray-600">
                Mobile Number
              </th>

              <th className="px-5 py-3 text-left text-xs font-semibold text-gray-600">
                Date of Birth
              </th>

              <th className="px-5 py-3 text-left text-xs font-semibold text-gray-600">
                Gender
              </th>

              <th className="px-5 py-3 text-right text-xs font-semibold text-gray-600">
                Actions
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-100">
            {paginatedPatients.map((patient) => (
              <tr
                key={patient.id}
                onClick={() => router.push(`/patients/${patient.id}`)}
                className="cursor-pointer transition-colors hover:bg-gray-50"
              >
                <td className="px-5 py-4 text-sm font-medium text-blue-600">
                  {patient.id}
                </td>

                <td className="px-5 py-4 text-sm font-medium text-gray-900">
                  {patient.name}
                </td>

                <td className="px-5 py-4 text-sm text-gray-600">
                  {patient.mobileNumber}
                </td>

                <td className="px-5 py-4 text-sm text-gray-600">
                  {patient.dateOfBirth}
                </td>

                <td className="px-5 py-4 text-sm text-gray-600">
                  {formatGender(patient.gender)}
                </td>

                <td className="px-5 py-4">
                  <div className="flex items-center justify-end gap-2">
                    <Link
                      href={`/patients/${patient.id}/edit`}
                      onClick={(event) => event.stopPropagation()}
                      aria-label={`Edit ${patient.name}`}
                      className="flex size-8 items-center justify-center rounded-lg text-gray-500 hover:bg-blue-50 hover:text-blue-600"
                    >
                      <Pencil size={16} />
                    </Link>

                    <button
                      type="button"
                      onClick={(event) => event.stopPropagation()}
                      aria-label={`Delete ${patient.name}`}
                      className="flex size-8 items-center justify-center rounded-lg text-gray-500 hover:bg-red-50 hover:text-red-600"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {totalPages > 1 && (
        <div className="flex flex-col gap-3 border-t border-gray-200 px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-gray-600">
            Showing {startIndex + 1}-
            {Math.min(startIndex + ROWS_PER_PAGE, patients.length)} of{" "}
            {patients.length}
          </p>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={goToPreviousPage}
              disabled={currentPage === 1}
              className="inline-flex size-9 items-center justify-center rounded-lg border border-gray-200 text-gray-600 transition-colors disabled:cursor-not-allowed disabled:opacity-50 hover:border-blue-200 hover:text-blue-600"
              aria-label="Previous page"
            >
              <ChevronLeft size={16} />
            </button>

            <span className="min-w-20 rounded-lg border border-gray-200 px-3 py-2 text-center text-sm font-medium text-gray-700">
              Page {currentPage} of {totalPages}
            </span>

            <button
              type="button"
              onClick={goToNextPage}
              disabled={currentPage === totalPages}
              className="inline-flex size-9 items-center justify-center rounded-lg border border-gray-200 text-gray-600 transition-colors disabled:cursor-not-allowed disabled:opacity-50 hover:border-blue-200 hover:text-blue-600"
              aria-label="Next page"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
