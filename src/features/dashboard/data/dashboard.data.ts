import { DOCTORS } from "@/features/doctors/data/doctors.data";

import type { DashboardStat } from "../types/dashboard.types";

export const DASHBOARD_STATS: DashboardStat[] = [
  {
    title: "Total Doctors",
    value: DOCTORS.length,
    variant: "BLUE",
  },
  {
    title: "Active Doctors",
    value: DOCTORS.filter((doctor) => doctor.status === "ACTIVE").length,
    variant: "GREEN",
  },
  {
    title: "Disabled Doctors",
    value: DOCTORS.filter((doctor) => doctor.status === "DISABLED").length,
    variant: "RED",
  },
  {
    title: "Total Patients",
    value: DOCTORS.reduce((total, doctor) => total + doctor.patientCount, 0),
    variant: "PURPLE",
  },
];

const parseJoinedOn = (joinedOn: string) => {
  const [day, month, year] = joinedOn.split(" ");

  return new Date(`${month} ${day}, ${year}`).getTime();
};

export const RECENT_DOCTORS = [...DOCTORS]
  .sort((firstDoctor, secondDoctor) => {
    return (
      parseJoinedOn(secondDoctor.joinedOn) - parseJoinedOn(firstDoctor.joinedOn)
    );
  })
  .slice(0, 5);
