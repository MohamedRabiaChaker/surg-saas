"use client";
import React from "react";

interface PerformanceData {
  category: string;
  score: number;
  trend: 'up' | 'down' | 'stable';
}

interface StudentPerformanceOverviewProps {
  performanceData?: PerformanceData[];
  overallGrade?: string;
  classRank?: string;
}

const defaultPerformanceData: PerformanceData[] = [
  { category: "Laparoscopic Techniques", score: 94, trend: 'up' },
  { category: "Suturing Skills", score: 98, trend: 'stable' },
  { category: "Patient Safety", score: 89, trend: 'up' },
  { category: "Anatomy Knowledge", score: 92, trend: 'down' },
  { category: "Instrument Handling", score: 87, trend: 'up' },
];

export default function StudentPerformanceOverview({ 
  performanceData = defaultPerformanceData,
  overallGrade = "A-",
  classRank = "3rd of 18"
}: StudentPerformanceOverviewProps) {
  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case 'up':
        return (
          <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17l9.2-9.2M17 17V7H7" />
          </svg>
        );
      case 'down':
        return (
          <svg className="w-4 h-4 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 7l-9.2 9.2M7 7v10h10" />
          </svg>
        );
      case 'stable':
        return (
          <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14" />
          </svg>
        );
    }
  };

  const getScoreColor = (score: number) => {
    if (score >= 90) return 'text-green-600 dark:text-green-400';
    if (score >= 80) return 'text-blue-600 dark:text-blue-400';
    if (score >= 70) return 'text-yellow-600 dark:text-yellow-400';
    return 'text-red-600 dark:text-red-400';
  };

  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] md:p-6">
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          Class Performance Overview
        </h3>
        
        {/* Overall Statistics */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="text-center p-4 bg-indigo-50 dark:bg-indigo-900/20 rounded-lg">
            <div className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">
              {overallGrade}
            </div>
            <div className="text-sm text-indigo-800 dark:text-indigo-300">
              Class Average
            </div>
          </div>
          <div className="text-center p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
            <div className="text-2xl font-bold text-green-600 dark:text-green-400">
              {classRank}
            </div>
            <div className="text-sm text-green-800 dark:text-green-300">
              Top Performer
            </div>
          </div>
        </div>
      </div>

      {/* Performance Categories */}
      <div className="space-y-4">
        <h4 className="text-md font-medium text-gray-800 dark:text-gray-200">
          Category Performance
        </h4>
        {performanceData.map((item, index) => (
          <div key={index} className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  {item.category}
                </span>
                <div className="flex items-center space-x-2">
                  {getTrendIcon(item.trend)}
                  <span className={`text-sm font-bold ${getScoreColor(item.score)}`}>
                    {item.score}%
                  </span>
                </div>
              </div>
              <div className="mt-2 w-full bg-gray-200 rounded-full h-2 dark:bg-gray-700">
                <div 
                  className="bg-indigo-600 h-2 rounded-full dark:bg-indigo-400"
                  style={{ width: `${item.score}%` }}
                ></div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6">
        <button className="w-full px-4 py-2 text-sm font-medium text-indigo-600 border border-indigo-600 rounded-lg hover:bg-indigo-50 dark:text-indigo-400 dark:border-indigo-400 dark:hover:bg-indigo-900/20 transition-colors">
          Generate Detailed Report
        </button>
      </div>
    </div>
  );
}
