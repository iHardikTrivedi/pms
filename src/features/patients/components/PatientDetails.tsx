import { CalendarDays, MapPin, Phone, UserRound } from "lucide-react";
import Link from "next/link";

import type { Patient } from "../types/patient.types";

type PatientDetailsProps = {
  patient: Patient;
};

function formatGender(gender: Patient["gender"]) {
  return gender.charAt(0) + gender.slice(1).toLowerCase();
}

export function PatientDetails({ patient }: PatientDetailsProps) {
  return (
    <div className="space-y-6">
      <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
        <div className="flex flex-col gap-5 sm:flex-row">
          <div className="flex size-24 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-600">
            <UserRound size={42} />
          </div>

          <div className="flex-1">
            <div className="flex flex-col justify-between gap-4 sm:flex-row">
              <div>
                <h2 className="text-xl font-semibold text-gray-900">
                  {patient.name}
                </h2>

                <p className="mt-1 text-sm font-medium text-blue-600">
                  {patient.id}
                </p>
              </div>

              <Link
                href={`/patients/${patient.id}/edit`}
                className="inline-flex h-10 items-center justify-center rounded-lg border border-blue-600 px-4 text-sm font-medium text-blue-600 transition-colors hover:bg-blue-50"
              >
                Edit Patient
              </Link>
            </div>

            <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              <div className="flex gap-3">
                <CalendarDays
                  size={18}
                  className="mt-0.5 shrink-0 text-gray-400"
                />

                <div>
                  <p className="text-xs text-gray-500">Date of Birth</p>

                  <p className="mt-1 text-sm font-medium text-gray-900">
                    {patient.dateOfBirth}
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <UserRound
                  size={18}
                  className="mt-0.5 shrink-0 text-gray-400"
                />

                <div>
                  <p className="text-xs text-gray-500">Gender</p>

                  <p className="mt-1 text-sm font-medium text-gray-900">
                    {formatGender(patient.gender)}
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <Phone size={18} className="mt-0.5 shrink-0 text-gray-400" />

                <div>
                  <p className="text-xs text-gray-500">Mobile Number</p>

                  <p className="mt-1 text-sm font-medium text-gray-900">
                    {patient.mobileNumber}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
          <div className="flex items-center gap-2">
            <MapPin size={18} className="text-gray-400" />

            <h3 className="text-base font-semibold text-gray-900">Address</h3>
          </div>

          <p className="mt-4 text-sm leading-6 text-gray-600">
            {patient.address || "No Address provided."}
          </p>
        </div>

        <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
          <h3 className="text-base font-semibold text-gray-900">
            Medical Notes
          </h3>

          <p className="mt-4 text-sm leading-6 text-gray-600">
            {patient.medicalNotes || "No Medical Notes available."}
          </p>
        </div>
      </div>

      <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
        <div className="flex items-center justify-between gap-4">
          <div>
            <h3 className="text-base font-semibold text-gray-900">
              Patient Documents
            </h3>

            <p className="mt-1 text-sm text-gray-500">
              View and manage Patient Documents.
            </p>
          </div>

          <Link
            href={`/patients/${patient.id}/documents`}
            className="text-sm font-medium text-blue-600 hover:text-blue-700"
          >
            View Documents
          </Link>
        </div>
      </div>
    </div>
  );
}
