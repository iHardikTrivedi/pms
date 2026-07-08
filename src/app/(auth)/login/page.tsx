import { FileText, ShieldCheck, UsersRound } from "lucide-react";

import { AppLogo } from "@/components/ui/AppLogo";
import { LoginForm } from "@/features/auth/components/LoginForm";

const LOGIN_FEATURES = [
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

export default function LoginPage() {
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
            {LOGIN_FEATURES.map((feature) => {
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

          <LoginForm />

          <p className="mt-10 text-center text-xs leading-5 text-gray-400">
            Access is available only to registered Doctors.
          </p>
        </div>
      </section>
    </div>
  );
}
