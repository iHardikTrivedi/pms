"use client";

import { Ban, CheckCircle2, Trash2, UserRound } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/Button";

import type { Doctor } from "../types/doctor.types";
import { DoctorStatusBadge } from "./DoctorStatusBadge";

type DoctorDetailsProps = {
  doctor: Doctor;
};

export function DoctorDetails({ doctor }: DoctorDetailsProps) {
  const [isActive, setIsActive] = useState(doctor.status === "ACTIVE");

  const canRemoveDoctor = doctor.patientCount === 0;

  const handleStatusChange = () => {
    setIsActive((previous) => !previous);
  };

  const handleRemoveDoctor = () => {
    if (!canRemoveDoctor) {
      return;
    }

    console.log("Remove doctor:", doctor.id);
  };

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

              <DoctorStatusBadge status={isActive ? "ACTIVE" : "DISABLED"} />
            </div>

            <p className="mt-2 text-sm text-gray-500">
              {doctor.basicInformation}
            </p>
          </div>

          <Button
            type="button"
            variant={isActive ? "secondary" : "primary"}
            onClick={handleStatusChange}
          >
            {isActive ? (
              <>
                <Ban size={17} />
                Disable Doctor
              </>
            ) : (
              <>
                <CheckCircle2 size={17} />
                Enable Doctor
              </>
            )}
          </Button>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
          <h3 className="text-base font-semibold text-gray-900">
            Doctor Information
          </h3>

          <dl className="mt-5 space-y-5">
            <div>
              <dt className="text-xs font-medium uppercase tracking-wide text-gray-500">
                Mobile Number
              </dt>

              <dd className="mt-1 text-sm font-medium text-gray-900">
                {doctor.mobileNumber}
              </dd>
            </div>

            <div>
              <dt className="text-xs font-medium uppercase tracking-wide text-gray-500">
                Joined On
              </dt>

              <dd className="mt-1 text-sm font-medium text-gray-900">
                {doctor.joinedOn}
              </dd>
            </div>

            <div>
              <dt className="text-xs font-medium uppercase tracking-wide text-gray-500">
                Doctor ID
              </dt>

              <dd className="mt-1 text-sm font-medium text-gray-900">
                {doctor.id}
              </dd>
            </div>
          </dl>
        </div>

        <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
          <h3 className="text-base font-semibold text-gray-900">
            Patient Overview
          </h3>

          <div className="mt-5">
            <p className="text-4xl font-semibold text-gray-900">
              {doctor.patientCount}
            </p>

            <p className="mt-1 text-sm text-gray-500">
              Patients linked to this Doctor Account
            </p>
          </div>
        </div>
      </div>

      <div className="rounded-xl border border-red-200 bg-white p-6">
        <h3 className="text-base font-semibold text-red-700">Remove Doctor</h3>

        <p className="mt-2 text-sm text-gray-500">
          A Doctor can only be removed when no Patients are linked to the Doctor
          Account.
        </p>

        {!canRemoveDoctor && (
          <div className="mt-4 rounded-lg bg-red-50 px-4 py-3 text-sm text-red-700">
            Doctor cannot be removed because {doctor.patientCount} Patients are
            linked to this Doctor Account.
          </div>
        )}

        <Button
          type="button"
          variant="danger"
          disabled={!canRemoveDoctor}
          onClick={handleRemoveDoctor}
          className="mt-5"
        >
          <Trash2 size={17} />
          Remove Doctor
        </Button>
      </div>
    </div>
  );
}
