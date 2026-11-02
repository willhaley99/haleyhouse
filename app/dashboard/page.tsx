import { Suspense } from "react";
import { getServerSession } from "next-auth";
import Link from "next/link";
import { authOptions } from "@/auth";

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
    <main className="mx-auto max-w-5xl px-6 py-16">
      <div className="rounded-[2rem] border border-stone-200 bg-white p-8 shadow-sm md:p-10">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-amber-800">Dashboard</p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-stone-950">
          Welcome back, {session.user?.name?.split(" ")[0] ?? "Investor"}
        </h1>
        <p className="mt-4 text-lg text-stone-600">
          Family co-investor access is enabled. Portfolio metrics and shared opportunities will render here.
        </p>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl bg-stone-900 p-5 text-white">
            <p className="text-sm text-stone-300">Active pool</p>
            <p className="mt-2 text-3xl font-semibold">$12.8M</p>
          </div>
          <div className="rounded-2xl border border-stone-200 bg-stone-50 p-5">
            <p className="text-sm text-stone-500">Deployed</p>
            <p className="mt-2 text-3xl font-semibold text-stone-900">67%</p>
          </div>
          <div className="rounded-2xl border border-stone-200 bg-stone-50 p-5">
            <p className="text-sm text-stone-500">Open deals</p>
            <p className="mt-2 text-3xl font-semibold text-stone-900">4</p>
          </div>
        </div>
      </div>
    </main>
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
