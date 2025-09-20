"use client";
import React from "react";
import Badge from "../ui/badge/Badge";
import { ArrowUpIcon, ArrowDownIcon } from "@/icons";
import { 
  AcademicCapIcon, 
  ClockIcon,
  TrophyIcon,
  UserGroupIcon
} from "@heroicons/react/24/outline";

interface TeacherMetricsProps {
  totalStudents?: number;
  studentsGrowth?: number;
  avgCompletionRate?: number;
  completionGrowth?: number;
  totalTrainingHours?: number;
  hoursGrowth?: number;
  avgPerformanceScore?: number;
  performanceGrowth?: number;
}

export default function TeacherMetrics({
  totalStudents = 18,
  studentsGrowth = 12.5,
  avgCompletionRate = 94.2,
  completionGrowth = 8.3,
  totalTrainingHours = 342,
  hoursGrowth = 15.7,
  avgPerformanceScore = 96.8,
  performanceGrowth = 5.2
}: TeacherMetricsProps) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 md:gap-6">
      {/* Total Students */}
      <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] md:p-6">
        <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-xl dark:bg-blue-900/20">
          <UserGroupIcon className="text-blue-600 size-6 dark:text-blue-400" />
        </div>
        <div className="flex items-end justify-between mt-5">
          <div>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              Total Students
            </span>
            <h4 className="mt-2 font-bold text-gray-800 text-title-sm dark:text-white/90">
              {totalStudents}
            </h4>
          </div>
          <Badge color={studentsGrowth >= 0 ? "success" : "error"}>
            {studentsGrowth >= 0 ? <ArrowUpIcon /> : <ArrowDownIcon />}
            {Math.abs(studentsGrowth)}%
          </Badge>
        </div>
      </div>

      {/* Average Completion Rate */}
      <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] md:p-6">
        <div className="flex items-center justify-center w-12 h-12 bg-green-100 rounded-xl dark:bg-green-900/20">
          <AcademicCapIcon className="text-green-600 size-6 dark:text-green-400" />
        </div>
        <div className="flex items-end justify-between mt-5">
          <div>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              Avg Completion Rate
            </span>
            <h4 className="mt-2 font-bold text-gray-800 text-title-sm dark:text-white/90">
              {avgCompletionRate}%
            </h4>
          </div>
          <Badge color={completionGrowth >= 0 ? "success" : "error"}>
            {completionGrowth >= 0 ? <ArrowUpIcon /> : <ArrowDownIcon />}
            {Math.abs(completionGrowth)}%
          </Badge>
        </div>
      </div>

      {/* Total Training Hours */}
      <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] md:p-6">
        <div className="flex items-center justify-center w-12 h-12 bg-indigo-100 rounded-xl dark:bg-indigo-900/20">
          <ClockIcon className="text-indigo-600 size-6 dark:text-indigo-400" />
        </div>
        <div className="flex items-end justify-between mt-5">
          <div>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              Training Hours
            </span>
            <h4 className="mt-2 font-bold text-gray-800 text-title-sm dark:text-white/90">
              {totalTrainingHours}
            </h4>
          </div>
          <Badge color={hoursGrowth >= 0 ? "success" : "error"}>
            {hoursGrowth >= 0 ? <ArrowUpIcon /> : <ArrowDownIcon />}
            {Math.abs(hoursGrowth)}%
          </Badge>
        </div>
      </div>

      {/* Average Performance Score */}
      <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] md:p-6">
        <div className="flex items-center justify-center w-12 h-12 bg-purple-100 rounded-xl dark:bg-purple-900/20">
          <TrophyIcon className="text-purple-600 size-6 dark:text-purple-400" />
        </div>
        <div className="flex items-end justify-between mt-5">
          <div>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              Avg Performance
            </span>
            <h4 className="mt-2 font-bold text-gray-800 text-title-sm dark:text-white/90">
              {avgPerformanceScore}%
            </h4>
          </div>
          <Badge color={performanceGrowth >= 0 ? "success" : "error"}>
            {performanceGrowth >= 0 ? <ArrowUpIcon /> : <ArrowDownIcon />}
            {Math.abs(performanceGrowth)}%
          </Badge>
        </div>
      </div>
    </div>
  );
}
