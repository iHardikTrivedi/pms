import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

import { ROUTES } from "@/constants/routes";
import { DoctorDetails } from "@/features/doctors/components/DoctorDetails";
import { DOCTORS } from "@/features/doctors/data/doctors.data";

type DoctorDetailsPageProps = {
  params: Promise<{
    doctorId: string;
  }>;
};

export default async function DoctorDetailsPage({
  params,
}: DoctorDetailsPageProps) {
  const { doctorId } = await params;

  const doctor = DOCTORS.find((item) => item.id === doctorId);

  if (!doctor) {
    notFound();
  }

  return (
    <div>
      <div className="mb-6">
        <Link
          href={ROUTES.DOCTORS}
          className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 transition-colors hover:text-blue-600"
        >
          <ArrowLeft size={17} />
          Back to Doctors
        </Link>

        <h1 className="mt-4 text-2xl font-semibold text-gray-900">
          Doctor Details
        </h1>

        <p className="mt-1 text-sm text-gray-500">
          View and manage Doctor Account information.
        </p>
      </div>

      <DoctorDetails doctor={doctor} />
    </div>
  );
}
