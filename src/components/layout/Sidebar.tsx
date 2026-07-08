"use client";

import { LogOut } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { AppLogo } from "@/components/ui/AppLogo";
import { NAVIGATION_ITEMS } from "@/constants/navigation";
import { USER_ROLES, type UserRole } from "@/constants/roles";

type SidebarProps = {
  role?: UserRole;
};

export function Sidebar({ role = USER_ROLES.MASTER_ADMIN }: SidebarProps) {
  const pathname = usePathname();

  const navigationItems = NAVIGATION_ITEMS.filter((item) =>
    item.roles.includes(role),
  );

  return (
    <aside className="fixed inset-y-0 left-0 z-40 flex w-55 flex-col bg-[#071b4a]">
      <div className="flex h-16 items-center px-5">
        <AppLogo />
      </div>

      <nav className="flex-1 space-y-1 px-3 py-4">
        {navigationItems.map((item) => {
          const Icon = item.icon;

          const isActive =
            pathname === item.href || pathname.startsWith(`${item.href}/`);

          return (
            <Link
              key={item.href}
              href={item.href}
              className={[
                "flex h-11 items-center gap-3 rounded-lg px-3 text-sm font-medium",
                isActive ? "bg-blue-600" : "hover:bg-white/10",
              ].join(" ")}
            >
              <Icon size={18} className="text-white" />

              <span className="text-white">{item.label}</span>
            </Link>
          );
        })}
      </nav>

      <div className="border-t border-white/10 p-3">
        <button
          type="button"
          className="flex h-11 w-full items-center gap-3 rounded-lg px-3 text-sm font-medium text-blue-100 transition-colors hover:bg-white/10 hover:text-white"
        >
          <LogOut size={18} />

          <span>Logout</span>
        </button>
      </div>
    </aside>
  );
}
