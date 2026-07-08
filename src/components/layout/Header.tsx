type HeaderProps = {
  userName?: string;
  roleLabel?: string;
};

export function Header({
  userName = "Master Admin",
  roleLabel = "Admin",
}: HeaderProps) {
  return (
    <header className="fixed left-55 right-0 top-0 z-30 flex h-16 items-center justify-end border-b border-gray-200 bg-white px-6">
      <div className="flex items-center gap-5">
        <div className="flex items-center gap-3">
          <div className="flex size-9 items-center justify-center rounded-full bg-blue-100 text-sm font-semibold text-blue-700">
            MA
          </div>

          <div>
            <p className="text-sm font-semibold text-gray-900">{userName}</p>

            <p className="text-xs text-gray-500">{roleLabel}</p>
          </div>
        </div>
      </div>
    </header>
  );
}
