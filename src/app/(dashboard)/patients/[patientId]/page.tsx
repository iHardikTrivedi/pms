import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

import { ROUTES } from "@/constants/routes";
import { PatientDetails } from "@/features/patients/components/PatientDetails";
import { PATIENTS } from "@/features/patients/data/patients.data";

type PatientDetailsPageProps = {
  params: Promise<{
    patientId: string;
  }>;
};

export default async function PatientDetailsPage({
  params,
}: PatientDetailsPageProps) {
  const { patientId } = await params;

  const patient = PATIENTS.find((item) => item.id === patientId);

  if (!patient) {
    notFound();
  }

  return (
    <div>
      <div className="mb-6">
        <Link
          href={ROUTES.PATIENTS}
          className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 transition-colors hover:text-blue-600"
        >
          <ArrowLeft size={17} />
          Back to Patients
        </Link>

        <h1 className="mt-4 text-2xl font-semibold text-gray-900">
          Patient Details
        </h1>

        <p className="mt-1 text-sm text-gray-500">
          View Patient information and Documents.
        </p>
      </div>

      <PatientDetails patient={patient} />
    </div>
  );
}
