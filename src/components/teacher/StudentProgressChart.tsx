"use client";
import React from "react";

interface StudentProgressData {
  studentName: string;
  progress: number;
  completedProcedures: number;
  lastActivity: string;
  status: 'excellent' | 'good' | 'needs-improvement';
}

interface StudentProgressChartProps {
  students?: StudentProgressData[];
}

const defaultStudents: StudentProgressData[] = [
  { studentName: "John Doe", progress: 95, completedProcedures: 12, lastActivity: "2 hours ago", status: 'excellent' },
  { studentName: "Jane Smith", progress: 87, completedProcedures: 10, lastActivity: "4 hours ago", status: 'good' },
  { studentName: "Alex Brown", progress: 92, completedProcedures: 11, lastActivity: "1 day ago", status: 'excellent' },
  { studentName: "Emily Davis", progress: 78, completedProcedures: 8, lastActivity: "3 hours ago", status: 'good' },
  { studentName: "Carlos Rodriguez", progress: 65, completedProcedures: 6, lastActivity: "2 days ago", status: 'needs-improvement' },
];

export default function StudentProgressChart({ students = defaultStudents }: StudentProgressChartProps) {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'excellent': return 'bg-green-500';
      case 'good': return 'bg-blue-500';
      case 'needs-improvement': return 'bg-yellow-500';
      default: return 'bg-gray-500';
    }
  };

  const getStatusBadgeColor = (status: string) => {
    switch (status) {
      case 'excellent': return 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400';
      case 'good': return 'bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400';
      case 'needs-improvement': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400';
    }
  };

  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] md:p-6">
      <div className="mb-6 flex items-center justify-between">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          Student Progress Overview
        </h3>
        <button className="text-sm text-indigo-600 hover:text-indigo-800 dark:text-indigo-400 dark:hover:text-indigo-300">
          View All Students
        </button>
      </div>

      <div className="space-y-4">
        {students.map((student, index) => (
          <div key={index} className="flex items-center space-x-4 p-4 rounded-lg bg-gray-50 dark:bg-gray-800/50">
            <div className="flex-shrink-0">
              <div className="w-10 h-10 rounded-full bg-indigo-100 dark:bg-indigo-900/20 flex items-center justify-center">
                <span className="text-sm font-medium text-indigo-600 dark:text-indigo-400">
                  {student.studentName.split(' ').map(n => n[0]).join('')}
                </span>
              </div>
            </div>
            
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between">
                <h4 className="text-sm font-medium text-gray-900 dark:text-white">
                  {student.studentName}
                </h4>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusBadgeColor(student.status)}`}>
                  {student.status.replace('-', ' ')}
                </span>
              </div>
              
              <div className="mt-2">
                <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-1">
                  <span>Progress: {student.progress}%</span>
                  <span>{student.completedProcedures} procedures</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-700">
                  <div 
                    className={`h-2 rounded-full ${getStatusColor(student.status)}`}
                    style={{ width: `${student.progress}%` }}
                  ></div>
                </div>
              </div>
              
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
                Last active: {student.lastActivity}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
