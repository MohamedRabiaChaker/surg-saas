import type { Metadata } from "next";
import AdminWelcomeSection from "@/components/admin/AdminWelcomeSection";
import AdminMetrics from "@/components/admin/AdminMetrics";
import UserManagementOverview from "@/components/admin/UserManagementOverview";
import SystemHealthMonitor from "@/components/admin/SystemHealthMonitor";
import RecentAdminActivity from "@/components/admin/RecentAdminActivity";

export const metadata: Metadata = {
  title: "Admin Dashboard | Surg SAAS",
  description: "Manage users, monitor system health, and configure platform settings",
};

export default function AdminDashboard() {
  return (
    <div className="grid grid-cols-12 gap-4 md:gap-6">
      {/* Welcome Section */}
      <AdminWelcomeSection />

      {/* Admin Metrics */}
      <div className="col-span-12">
        <AdminMetrics />
      </div>

      {/* User Management and System Health */}
      <div className="col-span-12 space-y-6 xl:col-span-8">
        <UserManagementOverview />
      </div>

      <div className="col-span-12 xl:col-span-4">
        <SystemHealthMonitor />
      </div>

      {/* Recent Admin Activity */}
      <div className="col-span-12">
        <RecentAdminActivity />
      </div>
    </div>
  );
}
