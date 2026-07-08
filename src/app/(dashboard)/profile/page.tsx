import { DoctorProfile } from "@/features/doctors/components/DoctorProfile";
import { DOCTORS } from "@/features/doctors/data/doctors.data";

export default function ProfilePage() {
  const currentDoctor = DOCTORS[0];

  return (
    <div className="mx-auto max-w-4xl">
      <div className="mb-6">
        <h1 className="text-2xl font-semibold text-gray-900">My Profile</h1>

        <p className="mt-1 text-sm text-gray-500">
          View and manage your Doctor Profile.
        </p>
      </div>

      <DoctorProfile
        doctor={currentDoctor}
        currentUserRole={currentDoctor.role}
      />
    </div>
  );
}
