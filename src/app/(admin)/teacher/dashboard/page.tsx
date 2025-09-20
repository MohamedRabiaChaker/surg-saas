import type { Metadata } from "next";
import TeacherWelcomeSection from "@/components/teacher/TeacherWelcomeSection";
import TeacherMetrics from "@/components/teacher/TeacherMetrics";
import StudentProgressChart from "@/components/teacher/StudentProgressChart";
import RecentStudentActivity from "@/components/teacher/RecentStudentActivity";
import StudentPerformanceOverview from "@/components/teacher/StudentPerformanceOverview";

export const metadata: Metadata = {
  title: "Teacher Dashboard | Surg SAAS",
  description: "Monitor your students' progress and manage training programs",
};

export default function TeacherDashboard() {
  return (
    <div className="grid grid-cols-12 gap-4 md:gap-6">
      {/* Welcome Section */}
      <TeacherWelcomeSection />

      {/* Teacher Metrics */}
      <div className="col-span-12">
        <TeacherMetrics />
      </div>

      {/* Student Progress and Activity */}
      <div className="col-span-12 space-y-6 xl:col-span-8">
        <StudentProgressChart />
      </div>

      <div className="col-span-12 xl:col-span-4">
        <StudentPerformanceOverview />
      </div>

      {/* Recent Student Activity */}
      <div className="col-span-12">
        <RecentStudentActivity />
      </div>
    </div>
  );
}
