"use client";
import SignOutButton from "@/components/auth/SignOutButton";
import Hero from "@/components/calendar/sections/hero";
import GridShape from "@/components/common/GridShape";
import { ThemeToggleButton } from "@/components/common/ThemeToggleButton";
import Image from "next/image";

export default function LandingPage() {
    return (
        <div className="relative z-1 flex min-h-screen flex-col overflow-hidden p-4">
            <header className="top-0 flex w-full justify-between pb-2 pl-4 lg:border-b dark:border-white">
                <div className="flex items-center space-x-2">
                    <Image
                        src="/images/logo/logo.png"
                        alt="logo"
                        width={75}
                        height={75}
                    />
                    <h1 className="text-lg font-bold text-pretty dark:text-white">
                        Surg SASS
                    </h1>
                </div>
                <div className="flex items-center space-x-2">
                    <ThemeToggleButton />
                    <SignOutButton />
                </div>
            </header>
            <GridShape />
            <div className="mx-auto w-full text-center">
                <Hero />
            </div>
        </div>
    );
}
