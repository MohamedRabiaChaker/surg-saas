"use client";
import React from "react";

interface StudentActivity {
  studentName: string;
  activity: string;
  time: string;
  type: 'completion' | 'assessment' | 'practice' | 'review';
}

interface RecentStudentActivityProps {
  activities?: StudentActivity[];
}

const defaultActivities: StudentActivity[] = [
  { studentName: "John Doe", activity: "Completed Laparoscopic Surgery Module", time: "2 hours ago", type: 'completion' },
  { studentName: "Jane Smith", activity: "Submitted Cardiovascular Assessment", time: "4 hours ago", type: 'assessment' },
  { studentName: "Alex Brown", activity: "Started Advanced Suturing Practice", time: "6 hours ago", type: 'practice' },
  { studentName: "Emily Davis", activity: "Reviewed Orthopedic Procedures", time: "1 day ago", type: 'review' },
  { studentName: "Carlos Rodriguez", activity: "Completed Basic Anatomy Quiz", time: "1 day ago", type: 'completion' },
  { studentName: "Sarah Wilson", activity: "Submitted Trauma Surgery Report", time: "2 days ago", type: 'assessment' },
];

export default function RecentStudentActivity({ activities = defaultActivities }: RecentStudentActivityProps) {
  const getActivityIcon = (type: string) => {
    switch (type) {
      case 'completion':
        return (
          <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center dark:bg-green-900/20">
            <svg className="w-4 h-4 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
        );
      case 'assessment':
        return (
          <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center dark:bg-blue-900/20">
            <svg className="w-4 h-4 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
        );
      case 'practice':
        return (
          <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center dark:bg-yellow-900/20">
            <svg className="w-4 h-4 text-yellow-600 dark:text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
        );
      case 'review':
        return (
          <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center dark:bg-purple-900/20">
            <svg className="w-4 h-4 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
          </div>
        );
      default:
        return (
          <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center dark:bg-gray-900/20">
            <svg className="w-4 h-4 text-gray-600 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
        );
    }
  };

  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] md:p-6">
      <div className="mb-6 flex items-center justify-between">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          Recent Student Activity
        </h3>
        <button className="text-sm text-indigo-600 hover:text-indigo-800 dark:text-indigo-400 dark:hover:text-indigo-300">
          View All Activity
        </button>
      </div>

      <div className="space-y-4">
        {activities.map((activity, index) => (
          <div key={index} className="flex items-start space-x-4">
            {getActivityIcon(activity.type)}
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-900 dark:text-white">
                {activity.studentName}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {activity.activity}
              </p>
              <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">
                {activity.time}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
