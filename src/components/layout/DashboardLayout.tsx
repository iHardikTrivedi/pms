"use client";

import type { ReactNode } from "react";
import { useState } from "react";

import { USER_ROLES } from "@/constants/roles";

import { Header } from "./Header";
import { Sidebar } from "./Sidebar";

type DashboardLayoutProps = {
  children: ReactNode;
};

export function DashboardLayout({ children }: DashboardLayoutProps) {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const loggedInDoctor = {
    name: "Dr. Nand Sharma",
    mobileNumber: "+91 98765 43210",
    role: USER_ROLES.MASTER_DOCTOR,
  };

  return (
    <div className="min-h-dvh bg-[#f7f9fc]">
      <Sidebar
        role={loggedInDoctor.role}
        isCollapsed={isCollapsed}
        isMobileOpen={isMobileOpen}
        onCollapse={() => setIsCollapsed((previous) => !previous)}
        onMobileClose={() => setIsMobileOpen(false)}
      />

      <div
        className={[
          "min-h-dvh transition-[margin] duration-300 ease-in-out",
          isCollapsed ? "lg:ml-20" : "lg:ml-55",
        ].join(" ")}
      >
        <Header
          userName={loggedInDoctor.name}
          mobileNumber={loggedInDoctor.mobileNumber}
          role={loggedInDoctor.role}
          onMenuClick={() => setIsMobileOpen(true)}
        />

        <main className="pt-16 lg:pt-0">
          <div className="p-4 sm:p-6">{children}</div>
        </main>
      </div>
    </div>
  );
}
