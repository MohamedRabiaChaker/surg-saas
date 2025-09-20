"use client";
import React from "react";
import Badge from "../ui/badge/Badge";
import { ArrowUpIcon, UserCircleIcon } from "@/icons";
import { 
  AcademicCapIcon, 
  ClockIcon,
  TrophyIcon 
} from "@heroicons/react/24/outline";

export const SurgicalTrainingMetrics = () => {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 md:gap-6">
      {/* Active Students */}
      <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] md:p-6">
        <div className="flex items-center justify-center w-12 h-12 bg-indigo-100 rounded-xl dark:bg-indigo-900/20">
          <UserCircleIcon className="text-indigo-600 size-6 dark:text-indigo-400" />
        </div>
        <div className="flex items-end justify-between mt-5">
          <div>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              Active Students
            </span>
            <h4 className="mt-2 font-bold text-gray-800 text-title-sm dark:text-white/90">
              1,247
            </h4>
          </div>
          <Badge color="success">
            <ArrowUpIcon />
            15.2%
          </Badge>
        </div>
      </div>

      {/* Training Hours */}
      <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] md:p-6">
        <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-xl dark:bg-blue-900/20">
          <ClockIcon className="text-blue-600 size-6 dark:text-blue-400" />
        </div>
        <div className="flex items-end justify-between mt-5">
          <div>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              Training Hours
            </span>
            <h4 className="mt-2 font-bold text-gray-800 text-title-sm dark:text-white/90">
              12,580
            </h4>
          </div>
          <Badge color="success">
            <ArrowUpIcon />
            8.3%
          </Badge>
        </div>
      </div>

      {/* Procedures Completed */}
      <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] md:p-6">
        <div className="flex items-center justify-center w-12 h-12 bg-green-100 rounded-xl dark:bg-green-900/20">
          <AcademicCapIcon className="text-green-600 size-6 dark:text-green-400" />
        </div>
        <div className="flex items-end justify-between mt-5">
          <div>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              Procedures Completed
            </span>
            <h4 className="mt-2 font-bold text-gray-800 text-title-sm dark:text-white/90">
              8,459
            </h4>
          </div>
          <Badge color="success">
            <ArrowUpIcon />
            12.7%
          </Badge>
        </div>
      </div>

      {/* Success Rate */}
      <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] md:p-6">
        <div className="flex items-center justify-center w-12 h-12 bg-purple-100 rounded-xl dark:bg-purple-900/20">
          <TrophyIcon className="text-purple-600 size-6 dark:text-purple-400" />
        </div>
        <div className="flex items-end justify-between mt-5">
          <div>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              Success Rate
            </span>
            <h4 className="mt-2 font-bold text-gray-800 text-title-sm dark:text-white/90">
              98.5%
            </h4>
          </div>
          <Badge color="success">
            <ArrowUpIcon />
            2.1%
          </Badge>
        </div>
      </div>
    </div>
  );
};
