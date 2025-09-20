"use client";

import Link from "next/link";
import Image from "next/image";

export default function HeroSection() {
    return (
        <div className="relative isolate px-6 pt-14 lg:px-8">
            <div
                className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
                aria-hidden="true"
            >
                <div
                    className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                    style={{
                        clipPath:
                            "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                    }}
                />
            </div>

            <div className="mx-auto max-w-7xl py-32 sm:py-48 lg:py-56">
                <div className="hidden sm:mb-8 sm:flex sm:justify-center lg:justify-start">
                    <div className="relative rounded-full px-3 py-1 text-sm/6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20 dark:text-gray-400 dark:ring-white/10 dark:hover:ring-white/20">
                        Revolutionizing surgical training worldwide.{" "}
                        <Link
                            href="/signin"
                            className="font-semibold text-indigo-600 dark:text-indigo-400"
                        >
                            <span
                                className="absolute inset-0"
                                aria-hidden="true"
                            />
                            Get started <span aria-hidden="true">&rarr;</span>
                        </Link>
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2 lg:items-center">
                    {/* Content Section */}
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl lg:text-6xl xl:text-7xl dark:text-white">
                            Master Surgical Skills with{" "}
                            <span className="text-indigo-600 dark:text-indigo-400">
                                Confidence
                            </span>
                        </h1>
                        <p className="mt-8 text-lg font-medium text-gray-500 sm:text-xl/8 dark:text-gray-400">
                            Transform your surgical training with our comprehensive
                            platform. Practice, learn, and perfect your techniques
                            with cutting-edge simulation and expert guidance.
                        </p>

                        <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
                            <Link
                                href="/signin"
                                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-all duration-200"
                            >
                                Start Training
                            </Link>
                            <Link
                                href="#features"
                                className="text-sm/6 font-semibold text-gray-900 hover:text-indigo-600 dark:text-white dark:hover:text-indigo-400 transition-colors duration-200"
                            >
                                Learn more <span aria-hidden="true">→</span>
                            </Link>
                        </div>

                        {/* Stats Section */}
                        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-3">
                            <div className="mx-auto flex max-w-xs flex-col gap-y-4 lg:mx-0">
                                <dt className="text-base/7 text-gray-600 dark:text-gray-400">
                                    Success Rate
                                </dt>
                                <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl dark:text-white">
                                    98%
                                </dd>
                            </div>
                            <div className="mx-auto flex max-w-xs flex-col gap-y-4 lg:mx-0">
                                <dt className="text-base/7 text-gray-600 dark:text-gray-400">
                                    Students Trained
                                </dt>
                                <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl dark:text-white">
                                    10,000+
                                </dd>
                            </div>
                            <div className="mx-auto flex max-w-xs flex-col gap-y-4 lg:mx-0">
                                <dt className="text-base/7 text-gray-600 dark:text-gray-400">
                                    Procedures Covered
                                </dt>
                                <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl dark:text-white">
                                    500+
                                </dd>
                            </div>
                        </div>
                    </div>

                    {/* Image Section */}
                    <div className="relative mx-auto lg:mx-0">
                        <div className="relative">
                            <Image
                                src="/images/brand/landing.png"
                                alt="Surgical training platform interface"
                                width={600}
                                height={600}
                                className="w-full max-w-lg mx-auto rounded-2xl shadow-2xl ring-1 ring-gray-900/10 dark:ring-white/10"
                                priority
                            />
                            {/* Floating elements for visual appeal */}
                            <div className="absolute -top-4 -right-4 w-24 h-24 bg-indigo-600 rounded-full opacity-20 blur-xl"></div>
                            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-purple-600 rounded-full opacity-20 blur-xl"></div>
                        </div>
                    </div>
                </div>
            </div>

            <div
                className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
                aria-hidden="true"
            >
                <div
                    className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
                    style={{
                        clipPath:
                            "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                    }}
                />
            </div>
        </div>
    );
}
