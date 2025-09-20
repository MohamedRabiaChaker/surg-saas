import Link from "next/link";
import Image from "next/image";

interface AdminWelcomeSectionProps {
  adminName?: string;
  totalUsers?: number;
  activeOrganizations?: number;
  systemAlerts?: number;
}

export default function AdminWelcomeSection({ 
  adminName = "Sarah Johnson",
  totalUsers = 247,
  activeOrganizations = 3,
  systemAlerts = 2
}: AdminWelcomeSectionProps) {
    return (
        <div className="col-span-12 mb-6">
            <div className="rounded-2xl border border-gray-200 bg-gradient-to-r from-red-600 via-pink-600 to-purple-700 p-6 text-white dark:border-gray-800 md:p-8">
                <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:items-center">
                    {/* Content Section */}
                    <div>
                        <h1 className="text-2xl font-bold sm:text-3xl lg:text-4xl">
                            System Administration
                        </h1>
                        <p className="mt-4 text-lg text-red-100">
                            Welcome, {adminName}. Monitor platform health, manage users, 
                            and configure system settings for optimal performance.
                        </p>
                        
                        <div className="mt-6 flex flex-wrap gap-4">
                            <Link
                                href="/admin/users"
                                className="rounded-lg bg-white px-4 py-2 text-sm font-semibold text-red-600 shadow-sm hover:bg-red-50 transition-all duration-200"
                            >
                                Manage Users
                            </Link>
                            <Link
                                href="/admin/settings"
                                className="rounded-lg border border-white/30 px-4 py-2 text-sm font-semibold text-white hover:bg-white/10 transition-all duration-200"
                            >
                                System Settings
                            </Link>
                        </div>

                        {/* Quick Stats */}
                        <div className="mt-8 grid grid-cols-3 gap-4">
                            <div>
                                <div className="text-2xl font-bold">{totalUsers}</div>
                                <div className="text-sm text-red-200">Total Users</div>
                            </div>
                            <div>
                                <div className="text-2xl font-bold">{activeOrganizations}</div>
                                <div className="text-sm text-red-200">Organizations</div>
                            </div>
                            <div>
                                <div className="text-2xl font-bold">{systemAlerts}</div>
                                <div className="text-sm text-red-200">System Alerts</div>
                            </div>
                        </div>
                    </div>

                    {/* Image Section */}
                    <div className="relative hidden lg:block">
                        <div className="relative mx-auto max-w-sm">
                            <Image
                                src="/images/brand/landing.png"
                                alt="Admin dashboard"
                                width={400}
                                height={400}
                                className="w-full rounded-xl shadow-2xl"
                            />
                            {/* Floating elements */}
                            <div className="absolute -top-2 -right-2 w-16 h-16 bg-white/20 rounded-full blur-lg"></div>
                            <div className="absolute -bottom-2 -left-2 w-20 h-20 bg-pink-300/20 rounded-full blur-lg"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
