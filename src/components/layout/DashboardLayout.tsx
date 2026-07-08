import type { ReactNode } from "react";

import { Header } from "./Header";
import { Sidebar } from "./Sidebar";

type DashboardLayoutProps = {
  children: ReactNode;
};

export function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="min-h-screen bg-[#f7f9fc]">
      <Sidebar />

      <Header />

      <main className="ml-55 pt-16">
        <div className="p-6">{children}</div>
      </main>
    </div>
  );
}
