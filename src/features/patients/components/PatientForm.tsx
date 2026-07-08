"use client";

import { useRouter } from "next/navigation";
import { useState, type FormEvent } from "react";

import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Select } from "@/components/ui/Select";
import { Textarea } from "@/components/ui/Textarea";
import { ROUTES } from "@/constants/routes";

import type { Patient, PatientGender } from "../types/patient.types";

type PatientFormData = {
  name: string;
  dateOfBirth: string;
  gender: PatientGender | "";
  mobileNumber: string;
  address: string;
  medicalNotes: string;
};

type PatientFormProps = {
  patient?: Patient;
};

const GENDER_OPTIONS = [
  {
    label: "Select Gender",
    value: "",
  },
  {
    label: "Male",
    value: "MALE",
  },
  {
    label: "Female",
    value: "FEMALE",
  },
  {
    label: "Other",
    value: "OTHER",
  },
];

const INITIAL_FORM_DATA: PatientFormData = {
  name: "",
  dateOfBirth: "",
  gender: "",
  mobileNumber: "",
  address: "",
  medicalNotes: "",
};

export function PatientForm({ patient }: PatientFormProps) {
  const router = useRouter();

  const isEditMode = Boolean(patient);

  const [formData, setFormData] = useState<PatientFormData>(() => {
    if (!patient) {
      return INITIAL_FORM_DATA;
    }

    return {
      name: patient.name,
      dateOfBirth: patient.dateOfBirth,
      gender: patient.gender,
      mobileNumber: patient.mobileNumber,
      address: patient.address,
      medicalNotes: patient.medicalNotes,
    };
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (field: keyof PatientFormData, value: string) => {
    setFormData((previous) => ({
      ...previous,
      [field]: value,
    }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setIsSubmitting(true);

    try {
      console.log(isEditMode ? "Update Patient:" : "Create Patient:", formData);

      await new Promise((resolve) => setTimeout(resolve, 1000));

      if (patient) {
        router.push(`/patients/${patient.id}`);
        return;
      }

      router.push(ROUTES.PATIENTS);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="grid gap-5 md:grid-cols-2">
        <Input
          id="patientName"
          label="Patient Name"
          placeholder="Enter Patient Name"
          value={formData.name}
          onChange={(event) => handleChange("name", event.target.value)}
          required
        />

        <Input
          id="dateOfBirth"
          label="Date of Birth"
          type="date"
          value={formData.dateOfBirth}
          onChange={(event) => handleChange("dateOfBirth", event.target.value)}
          required
        />

        <Select
          id="gender"
          label="Gender"
          options={GENDER_OPTIONS}
          value={formData.gender}
          onChange={(event) => handleChange("gender", event.target.value)}
          required
        />

        <Input
          id="mobileNumber"
          label="Mobile Number"
          type="tel"
          placeholder="Enter Mobile Number"
          value={formData.mobileNumber}
          onChange={(event) => handleChange("mobileNumber", event.target.value)}
          required
        />

        <div className="md:col-span-2">
          <Input
            id="address"
            label="Address"
            placeholder="Enter Patient Address"
            value={formData.address}
            onChange={(event) => handleChange("address", event.target.value)}
          />
        </div>

        <div className="md:col-span-2">
          <Textarea
            id="medicalNotes"
            label="Medical Notes"
            placeholder="Enter Medical Notes"
            value={formData.medicalNotes}
            onChange={(event) =>
              handleChange("medicalNotes", event.target.value)
            }
          />
        </div>
      </div>

      <div className="mt-8 flex items-center justify-end gap-3 border-t border-gray-200 pt-5">
        <Button type="button" variant="secondary" onClick={() => router.back()}>
          Cancel
        </Button>

        <Button type="submit" isLoading={isSubmitting}>
          {isEditMode ? "Update Patient" : "Add Patient"}
        </Button>
      </div>
    </form>
  );
}
