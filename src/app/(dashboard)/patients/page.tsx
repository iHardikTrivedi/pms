import { Plus, Search } from "lucide-react";
import Link from "next/link";

import { PatientTable } from "@/features/patients/components/PatientTable";
import { PATIENTS } from "@/features/patients/data/patients.data";

export default function PatientsPage() {
  return (
    <div>
      <div className="flex items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">Patients</h1>

          <p className="mt-1 text-sm text-gray-500">
            Manage your Patients and Patient Records.
          </p>
        </div>

        <Link
          href="/patients/add"
          className="inline-flex h-10 shrink-0 items-center gap-2 rounded-lg bg-blue-600 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-700"
        >
          <Plus size={17} className="text-white" />

          <span className="text-white">Add Patient</span>
        </Link>
      </div>

      <div className="mt-6">
        <div className="mb-4 flex max-w-sm items-center gap-2 rounded-lg border border-gray-200 bg-white px-3">
          <Search size={17} className="text-gray-400" />

          <input
            type="search"
            placeholder="Search by name, ID or mobile..."
            className="h-10 w-full bg-transparent text-sm text-gray-900 outline-none placeholder:text-gray-400"
          />
        </div>

        <PatientTable patients={PATIENTS} />
      </div>
    </div>
  );
}
