import type { Metadata } from "next";
import MemberNavigation from "@/app/components/member-navigation";
import ProfileDetails from "./profile-details";

export const metadata: Metadata = {
  title: "Your profile",
};

export default function ProfilePage() {
  return (
    <>
      <MemberNavigation />
      <main className="mx-auto w-full max-w-7xl px-5 py-12 sm:px-8 sm:py-16">
      <p className="flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.22em] text-amber-900"><span aria-hidden="true" className="h-px w-8 bg-amber-800/50" />Member portal</p>
      <h1 className="mt-5 font-serif text-5xl leading-[0.98] tracking-[-0.04em] text-stone-950 sm:text-7xl">Your profile</h1>
        <ProfileDetails />
      </main>
    </>
  );
}
