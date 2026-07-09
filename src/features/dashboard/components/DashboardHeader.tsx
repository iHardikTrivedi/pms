export function DashboardHeader() {
  const today = new Date().toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
      <div>
        <h1 className="text-2xl font-semibold text-gray-900">
          Welcome back, Master Admin 👋
        </h1>

        <p className="mt-1 text-sm text-gray-500">
          Here&apos;s what&apos;s happening in your system.
        </p>
      </div>

      <div className="inline-flex h-10 items-center rounded-lg border border-gray-300 bg-white px-4 text-sm font-medium text-gray-700">
        {today}
      </div>
    </div>
  );
}
