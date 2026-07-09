import type {
  DashboardStat,
  DashboardStatVariant,
} from "../types/dashboard.types";

type StatCardProps = DashboardStat;

const VARIANT_STYLES: Record<DashboardStatVariant, string> = {
  BLUE: "text-blue-600",
  GREEN: "text-green-600",
  RED: "text-red-500",
  PURPLE: "text-purple-600",
};

export function StatCard({ title, value, variant }: StatCardProps) {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
      <p className={["text-sm font-medium", VARIANT_STYLES[variant]].join(" ")}>
        {title}
      </p>

      <p className="mt-4 text-3xl font-semibold text-gray-900">{value}</p>
    </div>
  );
}
