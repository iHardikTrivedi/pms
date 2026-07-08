import { ShieldCheck, Stethoscope, UserRound } from "lucide-react";

import { USER_ROLES, type UserRole } from "@/constants/roles";

import type { Doctor } from "../types/doctor.types";
import { DoctorProfileForm } from "./DoctorProfileForm";
import { DoctorStatusBadge } from "./DoctorStatusBadge";

type DoctorProfileProps = {
  doctor: Doctor;
  currentUserRole: UserRole;
};

export function DoctorProfile({ doctor, currentUserRole }: DoctorProfileProps) {
  const isMasterDoctor = doctor.role === USER_ROLES.MASTER_DOCTOR;

  return (
    <div className="space-y-6">
      <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
          <div className="flex size-20 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-600">
            <UserRound size={36} />
          </div>

          <div className="flex-1">
            <div className="flex flex-wrap items-center gap-3">
              <h2 className="text-xl font-semibold text-gray-900">
                {doctor.name}
              </h2>

              <DoctorStatusBadge status={doctor.status} />
            </div>

            <div className="mt-3 flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-2 text-sm text-gray-500">
                {isMasterDoctor ? (
                  <ShieldCheck size={17} className="text-blue-600" />
                ) : (
                  <Stethoscope size={17} className="text-gray-400" />
                )}

                <span>{isMasterDoctor ? "Master Doctor" : "Doctor"}</span>
              </div>

              <span className="text-sm text-gray-300">•</span>

              <span className="text-sm text-gray-500">{doctor.id}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
        <div className="mb-6">
          <h3 className="text-base font-semibold text-gray-900">
            Profile Information
          </h3>

          <p className="mt-1 text-sm text-gray-500">
            Manage your Doctor Profile information.
          </p>
        </div>

        <DoctorProfileForm doctor={doctor} currentUserRole={currentUserRole} />
      </div>
    </div>
  );
}
