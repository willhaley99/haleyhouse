import { Suspense } from "react";
import { getServerSession } from "next-auth";
import Link from "next/link";
import { authOptions } from "@/auth";
import MemberNavigation from "@/app/components/member-navigation";

export default function DashboardPage() {
  return (
    <Suspense fallback={<DashboardLoading />}>
      <DashboardContent />
    </Suspense>
  );
}

async function DashboardContent() {
  const session = await getServerSession(authOptions);

  if (!session) {
    return (
      <main className="mx-auto max-w-3xl px-6 py-20 text-center">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-amber-800">Member portal</p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-stone-950">Sign in to view the dashboard</h1>
        <p className="mt-4 text-lg text-stone-600">
          This portal is reserved for approved family co-investors and partners.
        </p>
        <Link
          href="/signin"
          className="mt-8 inline-flex rounded-full bg-stone-900 px-6 py-3 text-sm font-semibold text-white hover:bg-stone-700"
        >
          Continue
        </Link>
      </main>
    );
  }

  return (
    <>
      <MemberNavigation />
      <main className="mx-auto max-w-5xl px-6 py-16">
        <div className="rounded-[2rem] border border-stone-200 bg-white p-8 shadow-sm md:p-10">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-amber-800">Dashboard</p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-stone-950">
            Welcome back, {session.user?.name?.split(" ")[0] ?? "Investor"}
          </h1>
          <p className="mt-4 text-lg text-stone-600">
            Your member portal is being set up. Portfolio information and shared opportunities will appear here
            once they are ready.
          </p>
        </div>
      </main>
    </>
  );
}

function DashboardLoading() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-20 text-center">
      <p className="text-sm font-medium uppercase tracking-[0.2em] text-amber-800">Member portal</p>
      <h1 className="mt-4 text-4xl font-semibold tracking-tight text-stone-950">Loading your dashboard</h1>
    </main>
  );
}
