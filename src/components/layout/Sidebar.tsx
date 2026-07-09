"use client";

import { ChevronLeft, ChevronRight, LogOut, X } from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

import { AppLogo } from "@/components/ui/AppLogo";
import { ConfirmationModal } from "@/components/ui/ConfirmationModal";
import { NAVIGATION_ITEMS } from "@/constants/navigation";
import { USER_ROLES, type UserRole } from "@/constants/roles";

type SidebarProps = {
  role?: UserRole;
  isCollapsed: boolean;
  isMobileOpen: boolean;
  onCollapse: () => void;
  onMobileClose: () => void;
};

export function Sidebar({
  role = USER_ROLES.MASTER_DOCTOR,
  isCollapsed,
  isMobileOpen,
  onCollapse,
  onMobileClose,
}: SidebarProps) {
  const pathname = usePathname();
  const router = useRouter();
  const [isLogoutConfirmOpen, setIsLogoutConfirmOpen] = useState(false);

  const navigationItems = NAVIGATION_ITEMS.filter((item) =>
    item.roles.includes(role),
  );

  const handleLogout = () => {
    sessionStorage.removeItem("is_logged_in");
    sessionStorage.removeItem("otp_mobile_number");

    router.replace("/login");
  };

  const handleLogoutClick = () => {
    setIsLogoutConfirmOpen(true);
  };

  const handleLogoutConfirm = () => {
    setIsLogoutConfirmOpen(false);
    handleLogout();
  };

  return (
    <>
      {isMobileOpen && (
        <button
          type="button"
          aria-label="Close sidebar"
          onClick={onMobileClose}
          className="fixed inset-0 z-40 bg-black/40 lg:hidden"
        />
      )}

      <aside
        className={[
          "fixed inset-y-0 left-0 z-50 flex h-dvh flex-col bg-[#071b4a]",
          "transition-all duration-300 ease-in-out",
          isCollapsed ? "lg:w-20" : "lg:w-55",
          "w-55",
          isMobileOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0",
        ].join(" ")}
      >
        <div
          className={[
            "flex h-16 shrink-0 items-center px-5",
            isCollapsed ? "lg:justify-center lg:px-0" : "justify-between",
          ].join(" ")}
        >
          <div className="hidden lg:block">
            <AppLogo compact={isCollapsed} />
          </div>

          <div className="lg:hidden">
            <AppLogo compact={false} />
          </div>

          <button
            type="button"
            onClick={onMobileClose}
            aria-label="Close sidebar"
            className="flex size-9 items-center justify-center rounded-lg text-white hover:bg-white/10 lg:hidden"
          >
            <X size={20} />
          </button>
        </div>

        <nav className="min-h-0 flex-1 space-y-1 overflow-y-auto px-3 py-4">
          {navigationItems.map((item) => {
            const Icon = item.icon;

            const isActive =
              pathname === item.href || pathname.startsWith(`${item.href}/`);

            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={onMobileClose}
                title={isCollapsed ? item.label : undefined}
                className={[
                  "flex h-11 items-center rounded-lg text-sm font-medium",
                  "transition-colors duration-200",
                  isCollapsed ? "lg:justify-center lg:px-0" : "gap-3 px-3",
                  isActive ? "bg-blue-600" : "hover:bg-white/10",
                ].join(" ")}
              >
                <Icon size={18} className="shrink-0 text-white" />

                <span
                  className={[
                    "whitespace-nowrap text-white",
                    isCollapsed ? "lg:hidden" : "",
                  ].join(" ")}
                >
                  {item.label}
                </span>
              </Link>
            );
          })}
        </nav>

        <div className="shrink-0 border-t border-white/10 p-3">
          <button
            type="button"
            onClick={handleLogoutClick}
            title={isCollapsed ? "Logout" : undefined}
            className={[
              "flex h-11 w-full items-center rounded-lg text-sm font-medium text-blue-100",
              "transition-colors hover:bg-white/10 hover:text-white",
              isCollapsed ? "lg:justify-center lg:px-0" : "gap-3 px-3",
            ].join(" ")}
          >
            <LogOut size={18} className="shrink-0" />

            <span
              className={[
                "whitespace-nowrap",
                isCollapsed ? "lg:hidden" : "",
              ].join(" ")}
            >
              Logout
            </span>
          </button>
        </div>

        <button
          type="button"
          onClick={onCollapse}
          aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
          className="absolute -right-3 top-20 hidden size-7 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-600 shadow-sm transition-colors hover:bg-gray-50 lg:flex"
        >
          {isCollapsed ? <ChevronRight size={15} /> : <ChevronLeft size={15} />}
        </button>
      </aside>

      <ConfirmationModal
        isOpen={isLogoutConfirmOpen}
        title="Logout"
        description="You will be signed out of your account."
        message="Are you sure you want to logout?"
        confirmLabel="Yes"
        cancelLabel="No"
        onClose={() => setIsLogoutConfirmOpen(false)}
        onConfirm={handleLogoutConfirm}
      />
    </>
  );
}
