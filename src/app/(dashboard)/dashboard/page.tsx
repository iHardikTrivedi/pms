import { DashboardHeader } from "@/features/dashboard/components/DashboardHeader";
import { DashboardStats } from "@/features/dashboard/components/DashboardStats";
import { RECENT_DOCTORS } from "@/features/dashboard/data/dashboard.data";
import { DoctorTable } from "@/features/doctors/components/DoctorTable";

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <DashboardHeader />

      <DashboardStats />

      <DoctorTable
        doctors={RECENT_DOCTORS}
        title="Recent Doctors"
        showViewAll
      />
    </div>
  );
}
