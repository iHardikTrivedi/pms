"use client";

import {
  ArrowLeft,
  FileText,
  LockKeyhole,
  ShieldCheck,
  UsersRound,
} from "lucide-react";
import { useRouter } from "next/navigation";
import {
  useEffect,
  useRef,
  useState,
  useSyncExternalStore,
  type FormEvent,
} from "react";

import { AppLogo } from "@/components/ui/AppLogo";
import { Button } from "@/components/ui/Button";
import { OtpInput } from "@/components/ui/OtpInput";

const DEMO_OTP = "123456";

const VERIFY_OTP_FEATURES = [
  {
    icon: UsersRound,
    title: "Patient Management",
    description: "Manage Patient information and Medical Records.",
  },
  {
    icon: FileText,
    title: "Document Management",
    description: "Upload and manage Patient Medical Documents.",
  },
  {
    icon: ShieldCheck,
    title: "Secure Doctor Access",
    description: "OTP-based access for registered Doctors.",
  },
];

const subscribe = () => {
  return () => {};
};

const getMobileNumberSnapshot = () => {
  return sessionStorage.getItem("otp_mobile_number") ?? "";
};

const getMobileNumberServerSnapshot = () => {
  return "";
};

export function OtpVerificationForm() {
  const router = useRouter();
  const isVerifiedRef = useRef(false);

  const mobileNumber = useSyncExternalStore(
    subscribe,
    getMobileNumberSnapshot,
    getMobileNumberServerSnapshot,
  );

  const [otp, setOtp] = useState("");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (!mobileNumber && !isVerifiedRef.current) {
      router.replace("/login");
    }
  }, [mobileNumber, router]);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setError("");

    if (otp.length !== 6) {
      setError("Please enter a valid 6-digit OTP.");

      return;
    }

    setIsSubmitting(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 800));

      if (otp !== DEMO_OTP) {
        setError("Invalid OTP. Please try again.");

        return;
      }

      isVerifiedRef.current = true;
      sessionStorage.removeItem("otp_mobile_number");
      sessionStorage.setItem("is_logged_in", "true");

      router.replace("/dashboard");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChangeMobileNumber = () => {
    sessionStorage.removeItem("otp_mobile_number");

    router.push("/login");
  };

  return (
    <div className="grid min-h-dvh lg:grid-cols-2">
      <section className="hidden bg-[#071b4a] p-10 lg:flex lg:flex-col">
        <AppLogo />

        <div className="my-auto max-w-lg">
          <h1 className="text-4xl leading-tight font-semibold text-white">
            Simple Patient Management for Doctors.
          </h1>

          <p className="mt-5 text-base leading-7 text-blue-100">
            Manage Patients, Medical Records and Documents from one secure
            place.
          </p>

          <div className="mt-10 space-y-6">
            {VERIFY_OTP_FEATURES.map((feature) => {
              const Icon = feature.icon;

              return (
                <div key={feature.title} className="flex items-start gap-4">
                  <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-white/10 text-white">
                    <Icon size={21} />
                  </div>

                  <div>
                    <h2 className="text-sm font-semibold text-white">
                      {feature.title}
                    </h2>

                    <p className="mt-1 text-sm leading-6 text-blue-100">
                      {feature.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <p className="text-xs text-blue-200">Patient Management System</p>
      </section>

      <section className="flex min-h-dvh items-center justify-center bg-white p-6 sm:p-10">
        <div className="w-full max-w-md">
          <div className="mb-10 lg:hidden">
            <div className="inline-flex rounded-xl bg-[#071b4a] px-4 py-3">
              <AppLogo />
            </div>
          </div>

          <form onSubmit={handleSubmit}>
            <button
              type="button"
              onClick={handleChangeMobileNumber}
              disabled={isSubmitting}
              className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-gray-500 transition-colors hover:text-blue-600 disabled:cursor-not-allowed"
            >
              <ArrowLeft size={16} />
              Change Mobile Number
            </button>

            <div className="flex size-12 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
              <LockKeyhole size={23} />
            </div>

            <h1 className="mt-5 text-2xl font-semibold text-gray-900">
              Verify OTP
            </h1>

            <p className="mt-2 text-sm leading-6 text-gray-500">
              Enter the 6-digit OTP sent to{" "}
              <span className="font-medium text-gray-900">
                +91 {mobileNumber}
              </span>
              .
            </p>

            <div className="mt-7">
              <OtpInput
                value={otp}
                onChange={(value) => {
                  setError("");
                  setOtp(value);
                }}
                disabled={isSubmitting}
              />

              {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
            </div>

            <Button
              type="submit"
              isLoading={isSubmitting}
              className="mt-6 w-full"
            >
              Verify & Login
            </Button>

            <p className="mt-5 text-center text-xs text-gray-500">
              Demo OTP:{" "}
              <span className="font-semibold text-gray-900">123456</span>
            </p>
          </form>

          <p className="mt-10 text-center text-xs leading-5 text-gray-400">
            Access is available only to registered Doctors.
          </p>
        </div>
      </section>
    </div>
  );
}
