import { ArrowLeft } from "lucide-react";
import Link from "next/link";

import { ROUTES } from "@/constants/routes";
import { PatientForm } from "@/features/patients/components/PatientForm";

export default function AddPatientPage() {
  return (
    <div className="mx-auto max-w-4xl">
      <div className="mb-6">
        <Link
          href={ROUTES.PATIENTS}
          className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 transition-colors hover:text-blue-600"
        >
          <ArrowLeft size={17} />
          Back to Patients
        </Link>

        <h1 className="mt-4 text-2xl font-semibold text-gray-900">
          Add Patient
        </h1>

        <p className="mt-1 text-sm text-gray-500">
          Create a new Patient Record.
        </p>
      </div>

      <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
        <PatientForm />
      </div>
    </div>
  );
}
