"use client";
import SignOutButton from "@/components/auth/SignOutButton";
import CTASection from "@/components/common/CTASection";
import FeaturesSection from "@/components/common/FeaturesSection";
import GridShape from "@/components/common/GridShape";
import HeroSection from "@/components/common/HeroSection";
import { ThemeToggleButton } from "@/components/common/ThemeToggleButton";
import Image from "next/image";

export default function LandingPage() {
    return (
      <div className="relative z-1 flex min-h-screen flex-col overflow-hidden">
        <header className="absolute top-0 z-50 flex w-full justify-between p-4 lg:border-b dark:border-white/10">
          <div className="flex items-center space-x-2">
            <Image
              src="/images/logo/logo.png"
              alt="logo"
              width={75}
              height={75}
            />
            <h1 className="text-lg font-bold text-pretty dark:text-white">
              Surg SAAS
            </h1>
          </div>
          <div className="flex items-center space-x-2">
            <ThemeToggleButton />
            <SignOutButton />
          </div>
        </header>
        <GridShape />
        <main>
          <HeroSection />
          <FeaturesSection />
          <CTASection />
        </main>
      </div>
    );
}
