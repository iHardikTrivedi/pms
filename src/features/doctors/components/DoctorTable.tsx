"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

import { ROUTES } from "@/constants/routes";
import type { Doctor } from "@/features/doctors/types/doctor.types";

import { DoctorStatusBadge } from "./DoctorStatusBadge";

type DoctorTableProps = {
  doctors: Doctor[];
  title?: string;
  showViewAll?: boolean;
};

const ROWS_PER_PAGE = 15;

export function DoctorTable({
  doctors,
  title,
  showViewAll = false,
}: DoctorTableProps) {
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    setCurrentPage(1);
  }, [doctors.length]);

  const totalPages = Math.max(1, Math.ceil(doctors.length / ROWS_PER_PAGE));
  const startIndex = (currentPage - 1) * ROWS_PER_PAGE;
  const paginatedDoctors = doctors.slice(
    startIndex,
    startIndex + ROWS_PER_PAGE,
  );

  const goToPreviousPage = () => {
    setCurrentPage((page) => Math.max(1, page - 1));
  };

  const goToNextPage = () => {
    setCurrentPage((page) => Math.min(totalPages, page + 1));
  };

  return (
    <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
      {(title || showViewAll) && (
        <div className="flex items-center justify-between border-b border-gray-200 px-5 py-4">
          {title && (
            <h2 className="text-base font-semibold text-gray-900">{title}</h2>
          )}

          {showViewAll && (
            <Link
              href={ROUTES.DOCTORS}
              className="text-sm font-medium text-blue-600 transition-colors hover:text-blue-700"
            >
              View All
            </Link>
          )}
        </div>
      )}

      <div className="overflow-x-auto">
        <table className="w-full min-w-175">
          <thead>
            <tr className="border-b border-gray-200 text-left">
              <th className="px-5 py-3 text-xs font-semibold text-gray-600">
                Doctor Name
              </th>

              <th className="px-5 py-3 text-xs font-semibold text-gray-600">
                Mobile Number
              </th>

              <th className="px-5 py-3 text-xs font-semibold text-gray-600">
                Status
              </th>

              <th className="px-5 py-3 text-xs font-semibold text-gray-600">
                Patients
              </th>

              <th className="px-5 py-3 text-xs font-semibold text-gray-600">
                Joined On
              </th>
            </tr>
          </thead>

          <tbody>
            {paginatedDoctors.map((doctor) => (
              <tr
                key={doctor.id}
                className="border-b border-gray-100 transition-colors last:border-b-0 hover:bg-gray-50"
              >
                <td className="px-5 py-3 text-sm font-medium text-gray-800">
                  {doctor.name}
                </td>

                <td className="px-5 py-3 text-sm text-gray-600">
                  {doctor.mobileNumber}
                </td>

                <td className="px-5 py-3">
                  <DoctorStatusBadge status={doctor.status} />
                </td>

                <td className="px-5 py-3 text-sm text-gray-600">
                  {doctor.patientCount}
                </td>

                <td className="px-5 py-3 text-sm text-gray-600">
                  {doctor.joinedOn}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {totalPages > 1 && (
        <div className="flex flex-col gap-3 border-t border-gray-200 px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-gray-600">
            Showing {startIndex + 1}-
            {Math.min(startIndex + ROWS_PER_PAGE, doctors.length)} of{" "}
            {doctors.length}
          </p>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={goToPreviousPage}
              disabled={currentPage === 1}
              className="inline-flex size-9 items-center justify-center rounded-lg border border-gray-200 text-gray-600 transition-colors disabled:cursor-not-allowed disabled:opacity-50 hover:border-blue-200 hover:text-blue-600"
              aria-label="Previous page"
            >
              <ChevronLeft size={16} />
            </button>

            <span className="min-w-20 rounded-lg border border-gray-200 px-3 py-2 text-center text-sm font-medium text-gray-700">
              Page {currentPage} of {totalPages}
            </span>

            <button
              type="button"
              onClick={goToNextPage}
              disabled={currentPage === totalPages}
              className="inline-flex size-9 items-center justify-center rounded-lg border border-gray-200 text-gray-600 transition-colors disabled:cursor-not-allowed disabled:opacity-50 hover:border-blue-200 hover:text-blue-600"
              aria-label="Next page"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
