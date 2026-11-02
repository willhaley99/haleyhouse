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
      <main className="mx-auto max-w-4xl px-6 py-24 text-center sm:py-32">
        <p className="flex items-center justify-center gap-3 text-[10px] font-semibold uppercase tracking-[0.22em] text-amber-900"><span aria-hidden="true" className="h-px w-8 bg-amber-800/50" />Member portal</p>
        <h1 className="mx-auto mt-5 max-w-3xl font-serif text-5xl leading-[0.98] tracking-[-0.04em] text-stone-950 sm:text-7xl">Sign in to view the dashboard</h1>
        <p className="mx-auto mt-5 max-w-xl text-lg leading-8 text-stone-600">
          This portal is reserved for approved family co-investors and partners.
        </p>
        <Link
          href="/signin"
          className="mt-8 inline-flex rounded-full bg-[#b49b6a] px-7 py-3.5 text-sm font-semibold text-[#101c2c] transition hover:bg-[#c8b994]"
        >
          Continue
        </Link>
      </main>
    );
  }

  return (
    <>
      <MemberNavigation />
      <main className="mx-auto max-w-7xl px-5 py-12 sm:px-8 sm:py-16">
        <div className="rounded-2xl border border-stone-200 bg-[#fcfdfd] p-8 sm:p-12">
          <p className="flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.22em] text-amber-900"><span aria-hidden="true" className="h-px w-8 bg-amber-800/50" />Dashboard</p>
          <h1 className="mt-5 font-serif text-5xl leading-[0.98] tracking-[-0.04em] text-stone-950 sm:text-7xl">
            Welcome back, {session.user?.name?.split(" ")[0] ?? "Investor"}
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-stone-600">
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
    <main className="mx-auto max-w-4xl px-6 py-24 text-center sm:py-32">
      <p className="flex items-center justify-center gap-3 text-[10px] font-semibold uppercase tracking-[0.22em] text-amber-900"><span aria-hidden="true" className="h-px w-8 bg-amber-800/50" />Member portal</p>
      <h1 className="mt-5 font-serif text-5xl leading-[0.98] tracking-[-0.04em] text-stone-950 sm:text-7xl">Loading your dashboard</h1>
    </main>
  );
}
