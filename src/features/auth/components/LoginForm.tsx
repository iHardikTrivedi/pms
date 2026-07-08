"use client";

import { Smartphone } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState, type FormEvent } from "react";

import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";

export function LoginForm() {
  const router = useRouter();

  const [mobileNumber, setMobileNumber] = useState("");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setError("");

    const normalizedMobileNumber = mobileNumber.replace(/\D/g, "");

    if (normalizedMobileNumber.length !== 10) {
      setError("Please enter a valid 10-digit Mobile Number.");

      return;
    }

    setIsSubmitting(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 800));

      sessionStorage.setItem("otp_mobile_number", normalizedMobileNumber);

      router.push("/verify-otp");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex size-12 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
        <Smartphone size={23} />
      </div>

      <h1 className="mt-5 text-2xl font-semibold text-gray-900">
        Welcome back
      </h1>

      <p className="mt-2 text-sm leading-6 text-gray-500">
        Enter your registered Mobile Number to access the Patient Management
        System.
      </p>

      <div className="mt-7">
        <Input
          id="mobileNumber"
          label="Mobile Number"
          type="tel"
          inputMode="numeric"
          autoComplete="tel"
          placeholder="9876543210"
          maxLength={10}
          value={mobileNumber}
          onChange={(event) => {
            setError("");

            setMobileNumber(event.target.value.replace(/\D/g, "").slice(0, 10));
          }}
          error={error}
          helperText="Enter your registered 10-digit Mobile Number."
          disabled={isSubmitting}
          required
        />
      </div>

      <Button type="submit" isLoading={isSubmitting} className="mt-6 w-full">
        Send OTP
      </Button>
    </form>
  );
}
