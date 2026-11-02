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
      <main className="mx-auto max-w-3xl px-6 py-16">
      <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-amber-900">Member portal</p>
      <h1 className="mt-3 font-serif text-4xl tracking-tight text-stone-950">Your profile</h1>
        <ProfileDetails />
      </main>
    </>
  );
}
