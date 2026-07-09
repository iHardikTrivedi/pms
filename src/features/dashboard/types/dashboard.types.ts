export type DashboardStatVariant = "BLUE" | "GREEN" | "RED" | "PURPLE";

export type DashboardStat = {
  title: string;
  value: number;
  variant: DashboardStatVariant;
};
