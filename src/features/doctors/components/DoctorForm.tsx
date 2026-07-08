"use client";

import { useRouter } from "next/navigation";
import { useState, type FormEvent } from "react";

import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { ROUTES } from "@/constants/routes";

type DoctorFormData = {
  name: string;
  mobileNumber: string;
  basicInformation: string;
};

const INITIAL_FORM_DATA: DoctorFormData = {
  name: "",
  mobileNumber: "",
  basicInformation: "",
};

export function DoctorForm() {
  const router = useRouter();

  const [formData, setFormData] = useState<DoctorFormData>(INITIAL_FORM_DATA);

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (field: keyof DoctorFormData, value: string) => {
    setFormData((previous) => ({
      ...previous,
      [field]: value,
    }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setIsSubmitting(true);

    try {
      console.log("Doctor Form Data:", formData);

      await new Promise((resolve) => setTimeout(resolve, 1000));

      router.push(ROUTES.DOCTORS);
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
          placeholder="Enter doctor's full name"
          value={formData.name}
          onChange={(event) => handleChange("name", event.target.value)}
          required
        />

        <Input
          id="mobileNumber"
          label="Mobile Number"
          type="tel"
          placeholder="Enter mobile number"
          value={formData.mobileNumber}
          onChange={(event) => handleChange("mobileNumber", event.target.value)}
          helperText="This mobile number will be used for OTP login."
          required
        />

        <Textarea
          id="basicInformation"
          label="Basic Doctor Information"
          placeholder="Enter qualification, specialization, or other basic information"
          value={formData.basicInformation}
          onChange={(event) =>
            handleChange("basicInformation", event.target.value)
          }
        />
      </div>

      <div className="mt-8 flex items-center justify-end gap-3 border-t border-gray-200 pt-5">
        <Button type="button" variant="secondary" onClick={() => router.back()}>
          Cancel
        </Button>

        <Button type="submit" isLoading={isSubmitting}>
          Add Doctor
        </Button>
      </div>
    </form>
  );
}
