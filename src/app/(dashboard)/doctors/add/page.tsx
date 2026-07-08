import { ArrowLeft } from "lucide-react";
import Link from "next/link";

import { ROUTES } from "@/constants/routes";
import { DoctorForm } from "@/features/doctors/components/DoctorForm";

export default function AddDoctorPage() {
  return (
    <div className="mx-auto max-w-3xl">
      <div className="mb-6">
        <Link
          href={ROUTES.DOCTORS}
          className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 transition-colors hover:text-blue-600"
        >
          <ArrowLeft size={17} />
          Back to Doctors
        </Link>

        <h1 className="mt-4 text-2xl font-semibold text-gray-900">
          Add Doctor
        </h1>

        <p className="mt-1 text-sm text-gray-500">
          Register a new doctor in the Patient Management System.
        </p>
      </div>

      <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
        <DoctorForm />
      </div>
    </div>
  );
}
