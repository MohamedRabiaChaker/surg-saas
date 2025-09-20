import Link from "next/link";

export default function CTASection() {
    return (
        <div className="bg-indigo-600 dark:bg-indigo-700">
            <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                        Ready to transform your surgical training?
                    </h2>
                    <p className="mx-auto mt-6 max-w-xl text-lg/8 text-indigo-200">
                        Join thousands of medical professionals who have elevated
                        their skills with our comprehensive training platform.
                        Start your journey today.
                    </p>
                    <div className="mt-10 flex items-center justify-center gap-x-6">
                        <Link
                            href="/signin"
                            className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-indigo-600 shadow-sm hover:bg-indigo-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-all duration-200"
                        >
                            Get started for free
                        </Link>
                        <Link
                            href="/contact"
                            className="text-sm/6 font-semibold text-white hover:text-indigo-200 transition-colors duration-200"
                        >
                            Contact sales <span aria-hidden="true">→</span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
