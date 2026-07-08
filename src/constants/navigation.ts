import { LayoutDashboard, Stethoscope, UserRound, Users } from "lucide-react";

import { USER_ROLES } from "./roles";

export const NAVIGATION_ITEMS = [
  {
    label: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
    roles: [USER_ROLES.MASTER_DOCTOR, USER_ROLES.DOCTOR],
  },
  {
    label: "Doctors",
    href: "/doctors",
    icon: Stethoscope,
    roles: [USER_ROLES.MASTER_DOCTOR],
  },
  {
    label: "Patients",
    href: "/patients",
    icon: Users,
    roles: [USER_ROLES.MASTER_DOCTOR, USER_ROLES.DOCTOR],
  },
  {
    label: "My Profile",
    href: "/profile",
    icon: UserRound,
    roles: [USER_ROLES.MASTER_DOCTOR, USER_ROLES.DOCTOR],
  },
];
