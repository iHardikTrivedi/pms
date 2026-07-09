import { Plus, Search } from "lucide-react";
import Link from "next/link";

import { USER_ROLES } from "@/constants/roles";
import { DoctorTable } from "@/features/doctors/components/DoctorTable";
import { DOCTORS } from "@/features/doctors/data/doctors.data";

export default function DoctorsPage() {
  return (
    <div>
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">Doctors</h1>

          <p className="mt-1 text-sm text-gray-500">
            Manage doctor accounts and access.
          </p>
        </div>

        <Link
          href="/doctors/add"
          className="inline-flex h-10 shrink-0 items-center gap-2 rounded-lg bg-blue-600 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-700"
        >
          <Plus size={17} className="text-white" />

          <span className="text-white">Add Doctor</span>
        </Link>
      </div>

      <div className="mt-6">
        <div className="mb-4 flex max-w-sm items-center gap-2 rounded-lg border border-gray-200 bg-white px-3">
          <Search size={17} className="text-gray-400" />

          <input
            type="search"
            placeholder="Search by name or mobile..."
            className="h-10 w-full bg-transparent text-sm text-gray-900 outline-none placeholder:text-gray-400"
          />
        </div>

        <DoctorTable
          doctors={DOCTORS}
          currentUserRole={USER_ROLES.MASTER_DOCTOR}
        />
      </div>
    </div>
  );
}
