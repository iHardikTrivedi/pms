"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    const isLoggedIn = sessionStorage.getItem("is_logged_in") === "true";

    router.replace(isLoggedIn ? "/dashboard" : "/login");
  }, [router]);

  return (
    <div className="flex min-h-dvh items-center justify-center bg-white">
      <p className="text-sm text-gray-500">Loading...</p>
    </div>
  );
}
