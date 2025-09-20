import {
    AcademicCapIcon,
    ChartBarIcon,
    ShieldCheckIcon,
    UserGroupIcon,
} from "@heroicons/react/24/outline";

const features = [
    {
        name: "Advanced Simulation",
        description:
            "Practice complex surgical procedures in a risk-free virtual environment with realistic haptic feedback and detailed anatomical models.",
        icon: AcademicCapIcon,
    },
    {
        name: "Progress Tracking",
        description:
            "Monitor your learning journey with detailed analytics, performance metrics, and personalized feedback to accelerate your development.",
        icon: ChartBarIcon,
    },
    {
        name: "Expert Mentorship",
        description:
            "Learn from world-renowned surgeons through guided tutorials, live sessions, and personalized coaching programs.",
        icon: UserGroupIcon,
    },
    {
        name: "Certified Training",
        description:
            "Earn accredited certifications and continuing education credits recognized by leading medical institutions worldwide.",
        icon: ShieldCheckIcon,
    },
];

export default function FeaturesSection() {
    return (
        <div id="features" className="bg-white py-24 sm:py-32 dark:bg-gray-900">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:text-center">
                    <h2 className="text-base/7 font-semibold text-indigo-600 dark:text-indigo-400">
                        Transform Your Training
                    </h2>
                    <p className="mt-2 text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl dark:text-white">
                        Everything you need to excel in surgery
                    </p>
                    <p className="mt-6 text-lg/8 text-gray-600 dark:text-gray-300">
                        Our comprehensive platform combines cutting-edge technology with proven educational methods to deliver unparalleled surgical training experiences.
                    </p>
                </div>
                <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
                    <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
                        {features.map((feature) => (
                            <div key={feature.name} className="relative pl-16">
                                <dt className="text-base/7 font-semibold text-gray-900 dark:text-white">
                                    <div className="absolute left-0 top-0 flex size-10 items-center justify-center rounded-lg bg-indigo-600">
                                        <feature.icon
                                            aria-hidden="true"
                                            className="size-6 text-white"
                                        />
                                    </div>
                                    {feature.name}
                                </dt>
                                <dd className="mt-2 text-base/7 text-gray-600 dark:text-gray-300">
                                    {feature.description}
                                </dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
        </div>
    );
}
