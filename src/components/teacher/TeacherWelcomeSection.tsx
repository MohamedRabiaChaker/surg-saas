import Link from "next/link";
import Image from "next/image";

interface TeacherWelcomeSectionProps {
  teacherName?: string;
  totalStudents?: number;
  activeTrainingSessions?: number;
  upcomingDeadlines?: number;
}

export default function TeacherWelcomeSection({ 
  teacherName = "Dr. Smith",
  totalStudents = 18,
  activeTrainingSessions = 5,
  upcomingDeadlines = 3
}: TeacherWelcomeSectionProps) {
    return (
        <div className="col-span-12 mb-6">
            <div className="rounded-2xl border border-gray-200 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-700 p-6 text-white dark:border-gray-800 md:p-8">
                <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:items-center">
                    {/* Content Section */}
                    <div>
                        <h1 className="text-2xl font-bold sm:text-3xl lg:text-4xl">
                            Welcome back, {teacherName}
                        </h1>
                        <p className="mt-4 text-lg text-blue-100">
                            Monitor your students&apos; progress, review training sessions, 
                            and guide the next generation of surgical professionals.
                        </p>
                        
                        <div className="mt-6 flex flex-wrap gap-4">
                            <Link
                                href="/teacher/students"
                                className="rounded-lg bg-white px-4 py-2 text-sm font-semibold text-indigo-600 shadow-sm hover:bg-indigo-50 transition-all duration-200"
                            >
                                Manage Students
                            </Link>
                            <Link
                                href="/teacher/analytics"
                                className="rounded-lg border border-white/30 px-4 py-2 text-sm font-semibold text-white hover:bg-white/10 transition-all duration-200"
                            >
                                View Analytics
                            </Link>
                        </div>

                        {/* Quick Stats */}
                        <div className="mt-8 grid grid-cols-3 gap-4">
                            <div>
                                <div className="text-2xl font-bold">{totalStudents}</div>
                                <div className="text-sm text-blue-200">Students</div>
                            </div>
                            <div>
                                <div className="text-2xl font-bold">{activeTrainingSessions}</div>
                                <div className="text-sm text-blue-200">Active Sessions</div>
                            </div>
                            <div>
                                <div className="text-2xl font-bold">{upcomingDeadlines}</div>
                                <div className="text-sm text-blue-200">Pending Reviews</div>
                            </div>
                        </div>
                    </div>

                    {/* Image Section */}
                    <div className="relative hidden lg:block">
                        <div className="relative mx-auto max-w-sm">
                            <Image
                                src="/images/brand/landing.png"
                                alt="Teaching dashboard"
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
