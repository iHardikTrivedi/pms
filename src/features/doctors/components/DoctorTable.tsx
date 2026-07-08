"use client";

import { Eye, Pencil, Trash2 } from "lucide-react";
import Link from "next/link";

import type { Doctor } from "../types/doctor.types";

import { DoctorStatusBadge } from "./DoctorStatusBadge";

type DoctorTableProps = {
  doctors: Doctor[];
};

export function DoctorTable({ doctors }: DoctorTableProps) {
  return (
    <div className="overflow-hidden rounded-xl border border-gray-200 bg-white">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="border-b border-gray-200 bg-gray-50">
            <tr>
              <th className="px-5 py-3 text-left text-xs font-semibold text-gray-600">
                Doctor Name
              </th>

              <th className="px-5 py-3 text-left text-xs font-semibold text-gray-600">
                Mobile Number
              </th>

              <th className="px-5 py-3 text-left text-xs font-semibold text-gray-600">
                Status
              </th>

              <th className="px-5 py-3 text-left text-xs font-semibold text-gray-600">
                Patients
              </th>

              <th className="px-5 py-3 text-left text-xs font-semibold text-gray-600">
                Joined On
              </th>

              <th className="px-5 py-3 text-right text-xs font-semibold text-gray-600">
                Actions
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-100">
            {doctors.map((doctor) => (
              <tr
                key={doctor.id}
                className="transition-colors hover:bg-gray-50"
              >
                <td className="px-5 py-4 text-sm font-medium text-gray-900">
                  {doctor.name}
                </td>

                <td className="px-5 py-4 text-sm text-gray-600">
                  {doctor.mobileNumber}
                </td>

                <td className="px-5 py-4">
                  <DoctorStatusBadge status={doctor.status} />
                </td>

                <td className="px-5 py-4 text-sm text-gray-600">
                  {doctor.patientCount}
                </td>

                <td className="px-5 py-4 text-sm text-gray-600">
                  {doctor.joinedOn}
                </td>

                <td className="px-5 py-4">
                  <div className="flex items-center justify-end gap-2">
                    <Link
                      href={`/doctors/${doctor.id}`}
                      className="flex size-8 items-center justify-center rounded-lg text-gray-500 hover:bg-blue-50 hover:text-blue-600"
                      aria-label={`View ${doctor.name}`}
                    >
                      <Eye size={16} />
                    </Link>

                    <button
                      type="button"
                      className="flex size-8 items-center justify-center rounded-lg text-gray-500 hover:bg-blue-50 hover:text-blue-600"
                      aria-label={`Edit ${doctor.name}`}
                    >
                      <Pencil size={16} />
                    </button>

                    <button
                      type="button"
                      className="flex size-8 items-center justify-center rounded-lg text-gray-500 hover:bg-red-50 hover:text-red-600"
                      aria-label={`Delete ${doctor.name}`}
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
