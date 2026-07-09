export function DashboardHeader() {
  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
      <div>
        <h1 className="text-2xl font-semibold text-gray-900">
          Welcome back, Dr. Nand Sharma 👋
        </h1>

        <p className="mt-1 text-sm text-gray-500">
          Here&apos;s what&apos;s happening in your system.
        </p>
      </div>
    </div>
  );
}
