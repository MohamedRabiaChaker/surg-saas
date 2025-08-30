"use client";
import SignOutButton from "@/components/auth/SignOutButton";
import Hero from "@/components/calendar/sections/hero";
import GridShape from "@/components/common/GridShape";
import { ThemeToggleButton } from "@/components/common/ThemeToggleButton";

export default function LandingPage() {
    return (
        <div className="relative z-1 flex min-h-screen flex-col overflow-hidden p-6">
            <header className="top-0 flex w-full justify-end space-x-2 pb-2 lg:border-b dark:border-white">
                <ThemeToggleButton />
                <SignOutButton />
            </header>
            <GridShape />
            <div className="mx-auto w-full text-center">
                <Hero />
            </div>
        </div>
    );
}
