export const USER_ROLES = {
  MASTER_ADMIN: "MASTER_ADMIN",
  DOCTOR: "DOCTOR",
} as const;

export type UserRole = (typeof USER_ROLES)[keyof typeof USER_ROLES];
