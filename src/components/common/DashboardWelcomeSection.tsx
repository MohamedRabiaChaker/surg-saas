import Link from "next/link";
import Image from "next/image";

export default function DashboardWelcomeSection() {
    return (
        <div className="col-span-12 mb-6">
            <div className="rounded-2xl border border-gray-200 bg-gradient-to-r from-indigo-500 via-purple-600 to-indigo-700 p-6 text-white dark:border-gray-800 md:p-8">
                <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:items-center">
                    {/* Content Section */}
                    <div>
                        <h1 className="text-2xl font-bold sm:text-3xl lg:text-4xl">
                            Welcome to Your Training Dashboard
                        </h1>
                        <p className="mt-4 text-lg text-indigo-100">
                            Track your surgical training progress, explore new procedures, 
                            and continue your journey to mastering surgical excellence.
                        </p>
                        
                        <div className="mt-6 flex flex-wrap gap-4">
                            <Link
                                href="/training/new"
                                className="rounded-lg bg-white px-4 py-2 text-sm font-semibold text-indigo-600 shadow-sm hover:bg-indigo-50 transition-all duration-200"
                            >
                                Start New Training
                            </Link>
                            <Link
                                href="/progress"
                                className="rounded-lg border border-white/30 px-4 py-2 text-sm font-semibold text-white hover:bg-white/10 transition-all duration-200"
                            >
                                View Progress
                            </Link>
                        </div>

                        {/* Quick Stats */}
                        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3">
                            <div>
                                <div className="text-2xl font-bold">24</div>
                                <div className="text-sm text-indigo-200">Hours This Week</div>
                            </div>
                            <div>
                                <div className="text-2xl font-bold">12</div>
                                <div className="text-sm text-indigo-200">Completed Procedures</div>
                            </div>
                            <div>
                                <div className="text-2xl font-bold">96%</div>
                                <div className="text-sm text-indigo-200">Success Rate</div>
                            </div>
                        </div>
                    </div>

                    {/* Image Section */}
                    <div className="relative hidden lg:block">
                        <div className="relative mx-auto max-w-sm">
                            <Image
                                src="/images/brand/landing.png"
                                alt="Surgical training platform"
                                width={400}
                                height={400}
                                className="w-full rounded-xl shadow-2xl"
                            />
                            {/* Floating elements */}
                            <div className="absolute -top-2 -right-2 w-16 h-16 bg-white/20 rounded-full blur-lg"></div>
                            <div className="absolute -bottom-2 -left-2 w-20 h-20 bg-purple-300/20 rounded-full blur-lg"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
