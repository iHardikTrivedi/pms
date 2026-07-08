import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

import { PatientDocuments } from "@/features/documents/components/PatientDocuments";
import { DOCUMENTS } from "@/features/documents/data/documents.data";
import { PATIENTS } from "@/features/patients/data/patients.data";

type PatientDocumentsPageProps = {
  params: Promise<{
    patientId: string;
  }>;
};

export default async function PatientDocumentsPage({
  params,
}: PatientDocumentsPageProps) {
  const { patientId } = await params;

  const patient = PATIENTS.find((item) => item.id === patientId);

  if (!patient) {
    notFound();
  }

  const documents = DOCUMENTS.filter(
    (document) => document.patientId === patientId,
  );

  return (
    <div>
      <div className="mb-6">
        <Link
          href={`/patients/${patient.id}`}
          className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 transition-colors hover:text-blue-600"
        >
          <ArrowLeft size={17} />
          Back to Patient Details
        </Link>
      </div>

      <PatientDocuments patientId={patient.id} initialDocuments={documents} />
    </div>
  );
}
