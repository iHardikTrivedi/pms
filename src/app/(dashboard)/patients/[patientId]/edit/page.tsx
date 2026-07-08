import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

import { PatientForm } from "@/features/patients/components/PatientForm";
import { PATIENTS } from "@/features/patients/data/patients.data";

type EditPatientPageProps = {
  params: Promise<{
    patientId: string;
  }>;
};

export default async function EditPatientPage({
  params,
}: EditPatientPageProps) {
  const { patientId } = await params;

  const patient = PATIENTS.find((item) => item.id === patientId);

  if (!patient) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-4xl">
      <div className="mb-6">
        <Link
          href={`/patients/${patient.id}`}
          className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 transition-colors hover:text-blue-600"
        >
          <ArrowLeft size={17} />
          Back to Patient Details
        </Link>

        <h1 className="mt-4 text-2xl font-semibold text-gray-900">
          Edit Patient
        </h1>

        <p className="mt-1 text-sm text-gray-500">
          Update Patient information.
        </p>
      </div>

      <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
        <PatientForm patient={patient} />
      </div>
    </div>
  );
}
