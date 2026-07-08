import type { DoctorStatus } from "../types/doctor.types";

type DoctorStatusBadgeProps = {
  status: DoctorStatus;
};

export function DoctorStatusBadge({ status }: DoctorStatusBadgeProps) {
  const isActive = status === "ACTIVE";

  return (
    <span
      className={[
        "inline-flex rounded-full px-2.5 py-1 text-xs font-medium",
        isActive ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700",
      ].join(" ")}
    >
      {isActive ? "Active" : "Disabled"}
    </span>
  );
}
