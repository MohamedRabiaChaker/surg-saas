"use client";
import React from "react";
import Badge from "../ui/badge/Badge";
import { ArrowUpIcon, ArrowDownIcon } from "@/icons";
import { 
  UserGroupIcon, 
  ServerIcon,
  ShieldCheckIcon,
  CpuChipIcon
} from "@heroicons/react/24/outline";

interface AdminMetricsProps {
  totalUsers?: number;
  userGrowth?: number;
  systemUptime?: number;
  uptimeChange?: number;
  activeUsers?: number;
  activeGrowth?: number;
  systemLoad?: number;
  loadChange?: number;
}

export default function AdminMetrics({
  totalUsers = 247,
  userGrowth = 18.5,
  systemUptime = 99.8,
  uptimeChange = 0.2,
  activeUsers = 156,
  activeGrowth = 12.3,
  systemLoad = 67.4,
  loadChange = -5.8
}: AdminMetricsProps) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 md:gap-6">
      {/* Total Users */}
      <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] md:p-6">
        <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-xl dark:bg-blue-900/20">
          <UserGroupIcon className="text-blue-600 size-6 dark:text-blue-400" />
        </div>
        <div className="flex items-end justify-between mt-5">
          <div>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              Total Users
            </span>
            <h4 className="mt-2 font-bold text-gray-800 text-title-sm dark:text-white/90">
              {totalUsers.toLocaleString()}
            </h4>
          </div>
          <Badge color={userGrowth >= 0 ? "success" : "error"}>
            {userGrowth >= 0 ? <ArrowUpIcon /> : <ArrowDownIcon />}
            {Math.abs(userGrowth)}%
          </Badge>
        </div>
      </div>

      {/* System Uptime */}
      <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] md:p-6">
        <div className="flex items-center justify-center w-12 h-12 bg-green-100 rounded-xl dark:bg-green-900/20">
          <ServerIcon className="text-green-600 size-6 dark:text-green-400" />
        </div>
        <div className="flex items-end justify-between mt-5">
          <div>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              System Uptime
            </span>
            <h4 className="mt-2 font-bold text-gray-800 text-title-sm dark:text-white/90">
              {systemUptime}%
            </h4>
          </div>
          <Badge color={uptimeChange >= 0 ? "success" : "error"}>
            {uptimeChange >= 0 ? <ArrowUpIcon /> : <ArrowDownIcon />}
            {Math.abs(uptimeChange)}%
          </Badge>
        </div>
      </div>

      {/* Active Users */}
      <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] md:p-6">
        <div className="flex items-center justify-center w-12 h-12 bg-indigo-100 rounded-xl dark:bg-indigo-900/20">
          <ShieldCheckIcon className="text-indigo-600 size-6 dark:text-indigo-400" />
        </div>
        <div className="flex items-end justify-between mt-5">
          <div>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              Active Users
            </span>
            <h4 className="mt-2 font-bold text-gray-800 text-title-sm dark:text-white/90">
              {activeUsers}
            </h4>
          </div>
          <Badge color={activeGrowth >= 0 ? "success" : "error"}>
            {activeGrowth >= 0 ? <ArrowUpIcon /> : <ArrowDownIcon />}
            {Math.abs(activeGrowth)}%
          </Badge>
        </div>
      </div>

      {/* System Load */}
      <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] md:p-6">
        <div className="flex items-center justify-center w-12 h-12 bg-purple-100 rounded-xl dark:bg-purple-900/20">
          <CpuChipIcon className="text-purple-600 size-6 dark:text-purple-400" />
        </div>
        <div className="flex items-end justify-between mt-5">
          <div>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              System Load
            </span>
            <h4 className="mt-2 font-bold text-gray-800 text-title-sm dark:text-white/90">
              {systemLoad}%
            </h4>
          </div>
          <Badge color={loadChange <= 0 ? "success" : "error"}>
            {loadChange <= 0 ? <ArrowDownIcon /> : <ArrowUpIcon />}
            {Math.abs(loadChange)}%
          </Badge>
        </div>
      </div>
    </div>
  );
}
