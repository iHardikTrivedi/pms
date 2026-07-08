"use client";

import { Save } from "lucide-react";
import { useState, type FormEvent } from "react";

import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { USER_ROLES, type UserRole } from "@/constants/roles";

import type { Doctor } from "../types/doctor.types";

type DoctorProfileFormProps = {
  doctor: Doctor;
  currentUserRole: UserRole;
};

type DoctorProfileFormData = {
  name: string;
  mobileNumber: string;
  basicInformation: string;
};

export function DoctorProfileForm({
  doctor,
  currentUserRole,
}: DoctorProfileFormProps) {
  const isMasterDoctor = currentUserRole === USER_ROLES.MASTER_DOCTOR;

  const [formData, setFormData] = useState<DoctorProfileFormData>({
    name: doctor.name,
    mobileNumber: doctor.mobileNumber,
    basicInformation: doctor.basicInformation,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const [mobileError, setMobileError] = useState("");

  const handleChange = (field: keyof DoctorProfileFormData, value: string) => {
    if (field === "mobileNumber" && !isMasterDoctor) {
      return;
    }

    if (field === "mobileNumber") {
      setMobileError("");
    }

    setFormData((previous) => ({
      ...previous,
      [field]: value,
    }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setMobileError("");
    setIsSubmitting(true);

    try {
      console.log("Update Doctor Profile:", {
        doctorId: doctor.id,
        ...formData,
      });

      await new Promise((resolve) => setTimeout(resolve, 800));

      // Later:
      // PATCH /api/doctors/:doctorId/profile
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="space-y-5">
        <Input
          id="doctorName"
          label="Doctor Name"
          placeholder="Enter Doctor Name"
          value={formData.name}
          onChange={(event) => handleChange("name", event.target.value)}
          disabled={isSubmitting}
          required
        />

        <Input
          id="mobileNumber"
          label="Mobile Number"
          type="tel"
          placeholder="Enter Mobile Number"
          value={formData.mobileNumber}
          onChange={(event) => handleChange("mobileNumber", event.target.value)}
          error={mobileError}
          helperText={
            isMasterDoctor
              ? "Mobile Number must be unique."
              : "Only the Master Doctor can change the Mobile Number."
          }
          disabled={!isMasterDoctor || isSubmitting}
          required
        />

        <Textarea
          id="basicInformation"
          label="Basic Information"
          placeholder="Enter Qualification, Specialization and Experience"
          value={formData.basicInformation}
          onChange={(event) =>
            handleChange("basicInformation", event.target.value)
          }
          disabled={isSubmitting}
        />
      </div>

      <div className="mt-8 flex justify-end border-t border-gray-200 pt-5">
        <Button type="submit" isLoading={isSubmitting}>
          <Save size={17} />
          Save Changes
        </Button>
      </div>
    </form>
  );
}
