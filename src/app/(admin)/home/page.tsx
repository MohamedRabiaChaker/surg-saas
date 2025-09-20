import type { Metadata } from "next";
import { SurgicalTrainingMetrics } from "@/components/ecommerce/SurgicalTrainingMetrics";
import DashboardWelcomeSection from "@/components/common/DashboardWelcomeSection";
import React from "react";
import MonthlyTarget from "@/components/ecommerce/MonthlyTarget";
import MonthlySalesChart from "@/components/ecommerce/MonthlySalesChart";
import StatisticsChart from "@/components/ecommerce/StatisticsChart";
import RecentOrders from "@/components/ecommerce/RecentOrders";
import DemographicCard from "@/components/ecommerce/DemographicCard";

export const metadata: Metadata = {
  title: "Surgical Training Dashboard | Surg SAAS",
  description: "Track your surgical training progress and performance metrics",
};

export default function Dashboard() {
  return (
    <div className="grid grid-cols-12 gap-4 md:gap-6">
      {/* Welcome Section */}
      <DashboardWelcomeSection />

      {/* Training Metrics */}
      <div className="col-span-12">
        <SurgicalTrainingMetrics />
      </div>

      <div className="col-span-12 space-y-6 xl:col-span-7">
        <MonthlySalesChart />
      </div>

      <div className="col-span-12 xl:col-span-5">
        <MonthlyTarget />
      </div>

      <div className="col-span-12">
        <StatisticsChart />
      </div>

      <div className="col-span-12 xl:col-span-5">
        <DemographicCard />
      </div>

      <div className="col-span-12 xl:col-span-7">
        <RecentOrders />
      </div>
    </div>
  );
}
