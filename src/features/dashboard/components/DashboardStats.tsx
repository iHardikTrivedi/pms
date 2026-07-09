import { DASHBOARD_STATS } from "../data/dashboard.data";

import { StatCard } from "./StatCard";

export function DashboardStats() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {DASHBOARD_STATS.map((stat) => (
        <StatCard key={stat.title} {...stat} />
      ))}
    </div>
  );
}
