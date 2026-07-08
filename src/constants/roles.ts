export const USER_ROLES = {
  MASTER_DOCTOR: "MASTER_DOCTOR",
  DOCTOR: "DOCTOR",
} as const;

export type UserRole = (typeof USER_ROLES)[keyof typeof USER_ROLES];
