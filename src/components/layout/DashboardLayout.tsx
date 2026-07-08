"use client";

import type { ReactNode } from "react";
import { useState } from "react";

import { Header } from "./Header";
import { Sidebar } from "./Sidebar";

type DashboardLayoutProps = {
  children: ReactNode;
};

export function DashboardLayout({ children }: DashboardLayoutProps) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  return (
    <div className="min-h-dvh bg-[#f7f9fc]">
      <Sidebar
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
          isSidebarCollapsed={isCollapsed}
          onMenuClick={() => setIsMobileOpen(true)}
        />

        <main className="pt-16">
          <div className="p-4 sm:p-6">{children}</div>
        </main>
      </div>
    </div>
  );
}
