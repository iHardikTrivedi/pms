"use client";

import { Eye, Pencil, Trash2 } from "lucide-react";
import Link from "next/link";

import type { Patient } from "../types/patient.types";

type PatientTableProps = {
  patients: Patient[];
};

function formatGender(gender: Patient["gender"]) {
  return gender.charAt(0) + gender.slice(1).toLowerCase();
}

export function PatientTable({ patients }: PatientTableProps) {
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
            {patients.map((patient) => (
              <tr
                key={patient.id}
                className="transition-colors hover:bg-gray-50"
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
                      href={`/patients/${patient.id}`}
                      aria-label={`View ${patient.name}`}
                      className="flex size-8 items-center justify-center rounded-lg text-gray-500 hover:bg-blue-50 hover:text-blue-600"
                    >
                      <Eye size={16} />
                    </Link>

                    <Link
                      href={`/patients/${patient.id}/edit`}
                      aria-label={`Edit ${patient.name}`}
                      className="flex size-8 items-center justify-center rounded-lg text-gray-500 hover:bg-blue-50 hover:text-blue-600"
                    >
                      <Pencil size={16} />
                    </Link>

                    <button
                      type="button"
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
    </div>
  );
}
