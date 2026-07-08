export default function DashboardPage() {
  const loggedInDoctorName = "Dr. Rajesh Sharma";

  return (
    <div>
      <h1 className="text-2xl font-semibold text-gray-900">
        Welcome back, {loggedInDoctorName} 👋
      </h1>

      <p className="mt-1 text-sm text-gray-500">
        Here&apos;s what&apos;s happening in your system.
      </p>
    </div>
  );
}
