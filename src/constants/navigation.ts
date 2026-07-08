import { LayoutDashboard, Stethoscope, UserRound, Users } from "lucide-react";

import { USER_ROLES, type UserRole } from "./roles";
import { ROUTES } from "./routes";

export type NavigationItem = {
  label: string;
  href: string;
  icon: React.ElementType;
  roles: UserRole[];
};

export const NAVIGATION_ITEMS: NavigationItem[] = [
  {
    label: "Dashboard",
    href: ROUTES.DASHBOARD,
    icon: LayoutDashboard,
    roles: [USER_ROLES.MASTER_ADMIN, USER_ROLES.DOCTOR],
  },
  {
    label: "Doctors",
    href: ROUTES.DOCTORS,
    icon: Stethoscope,
    roles: [USER_ROLES.MASTER_ADMIN],
  },
  {
    label: "Patients",
    href: ROUTES.PATIENTS,
    icon: Users,
    roles: [USER_ROLES.DOCTOR],
  },
  {
    label: "Profile",
    href: ROUTES.PROFILE,
    icon: UserRound,
    roles: [USER_ROLES.MASTER_ADMIN, USER_ROLES.DOCTOR],
  },
];
