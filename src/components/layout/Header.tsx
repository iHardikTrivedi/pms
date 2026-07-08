import { Menu } from "lucide-react";

import { USER_ROLES, type UserRole } from "@/constants/roles";

type HeaderProps = {
  userName: string;
  mobileNumber: string;
  role: UserRole;
  onMenuClick: () => void;
};

function getInitials(name: string) {
  return name
    .replace(/^Dr\.?\s*/i, "")
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word.charAt(0))
    .join("")
    .toUpperCase();
}

export function Header({
  userName,
  mobileNumber,
  role,
  onMenuClick,
}: HeaderProps) {
  const isMasterDoctor = role === USER_ROLES.MASTER_DOCTOR;

  const secondaryLabel = isMasterDoctor ? "Admin" : mobileNumber;

  const initials = getInitials(userName);

  return (
    <header className="fixed right-0 top-0 z-30 flex h-16 left-0 items-center justify-between border-b border-gray-200 bg-white px-4 transition-[left] duration-300 lg:static lg:h-16 sm:px-6">
      <button
        type="button"
        onClick={onMenuClick}
        aria-label="Open sidebar"
        className="flex size-9 items-center justify-center rounded-lg text-gray-600 hover:bg-gray-100 lg:hidden"
      >
        <Menu size={21} />
      </button>

      <div className="ml-auto flex items-center gap-4 sm:gap-5">
        <div className="flex items-center gap-3">
          <div className="flex size-9 shrink-0 items-center justify-center rounded-full bg-blue-100 text-sm font-semibold text-blue-700">
            {initials}
          </div>

          <div className="hidden sm:block">
            <p className="text-sm font-semibold text-gray-900">{userName}</p>

            <p className="text-xs text-gray-500">{secondaryLabel}</p>
          </div>
        </div>
      </div>
    </header>
  );
}
