import GridShape from "@/components/common/GridShape";
import ThemeTogglerTwo from "@/components/common/ThemeTogglerTwo";

import { ThemeProvider } from "@/context/ThemeContext";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative z-1 bg-white p-6 sm:p-0 dark:bg-gray-900">
      <ThemeProvider>
        <div className="relative flex h-screen w-full flex-col justify-center sm:p-0 lg:flex-row dark:bg-gray-900">
          {children}
          <div className="bg-brand-950 hidden h-full w-full items-center lg:grid lg:w-1/2 dark:bg-white/5">
            <div className="relative z-1 flex items-center justify-center">
              {/* <!-- ===== Common Grid Shape Start ===== --> */}
              <GridShape />
              <div className="flex max-w-sm flex-col items-center px-6">
                <Link href="/" className="mb-6 block">
                  <Image
                    width={231}
                    height={48}
                    src="/images/logo/logo.png"
                    alt="SurgSaaS Logo"
                    className="mx-auto"
                  />
                </Link>

                {/* Feature highlights */}
                <div className="mb-6 space-y-4">
                  <div className="flex items-center space-x-3 text-gray-300 dark:text-white/70">
                    <div className="bg-brand-400 h-2 w-2 rounded-full"></div>
                    <span className="text-sm">Digital Surgery Management</span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-300 dark:text-white/70">
                    <div className="bg-brand-400 h-2 w-2 rounded-full"></div>
                    <span className="text-sm">Patient Care Optimization</span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-300 dark:text-white/70">
                    <div className="bg-brand-400 h-2 w-2 rounded-full"></div>
                    <span className="text-sm">Real-time Analytics</span>
                  </div>
                </div>

                <p className="text-center text-sm leading-relaxed text-gray-400 dark:text-white/60">
                  Advanced Surgical Management Platform - Streamline your
                  surgical workflows with cutting-edge technology
                </p>
              </div>
            </div>
          </div>
          <div className="fixed right-6 bottom-6 z-50 hidden sm:block">
            <ThemeTogglerTwo />
          </div>
        </div>
      </ThemeProvider>
    </div>
  );
}
