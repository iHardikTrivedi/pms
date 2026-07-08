import type { ReactNode } from "react";

type AuthLayoutProps = {
  children: ReactNode;
};

export function AuthLayout({ children }: AuthLayoutProps) {
  return <main className="min-h-dvh bg-[#f7f9fc]">{children}</main>;
}
