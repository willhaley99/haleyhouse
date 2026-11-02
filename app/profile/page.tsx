import type { Metadata } from "next";
import Image from "next/image";
import { Suspense } from "react";
import { getServerSession } from "next-auth";
import { authOptions } from "@/auth";
import MemberNavigation from "@/app/components/member-navigation";

export const metadata: Metadata = {
  title: "Your profile",
};

export default function ProfilePage() {
  return (
    <Suspense fallback={<ProfileLoading />}>
      <ProfileContent />
    </Suspense>
  );
}

async function ProfileContent() {
  const session = await getServerSession(authOptions);
  const name = session?.user?.name?.trim() || "Member";
  const email = session?.user?.email;
  const initials = name
    .split(/\s+/)
    .slice(0, 2)
    .map((part) => part.charAt(0).toUpperCase())
    .join("");

  return (
    <>
      <MemberNavigation />
      <main className="mx-auto max-w-3xl px-6 py-16">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-amber-800">Member portal</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-stone-950">Your profile</h1>
        <section
          aria-label="Google account profile"
          className="mt-8 rounded-[2rem] border border-stone-200 bg-white p-8 shadow-sm md:p-10"
        >
          <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center">
            {session?.user?.image ? (
              <Image
                src={session.user.image}
                alt=""
                width={96}
                height={96}
                unoptimized
                className="size-24 rounded-full border border-stone-200 object-cover"
              />
            ) : (
              <div
                aria-hidden="true"
                className="flex size-24 items-center justify-center rounded-full bg-amber-100 text-2xl font-semibold text-amber-900"
              >
                {initials}
              </div>
            )}
            <div className="min-w-0">
              <p className="text-sm font-medium text-stone-500">Signed in with Google</p>
              <h2 className="mt-1 break-words text-2xl font-semibold text-stone-950">{name}</h2>
              <p className="mt-2 break-all text-stone-600">{email ?? "Email unavailable"}</p>
            </div>
          </div>
          <dl className="mt-8 grid gap-5 border-t border-stone-200 pt-6 sm:grid-cols-2">
            <div>
              <dt className="text-sm text-stone-500">Name</dt>
              <dd className="mt-1 font-medium text-stone-900">{name}</dd>
            </div>
            <div>
              <dt className="text-sm text-stone-500">Email address</dt>
              <dd className="mt-1 break-all font-medium text-stone-900">
                {email ?? "Email unavailable"}
              </dd>
            </div>
            <div>
              <dt className="text-sm text-stone-500">Account provider</dt>
              <dd className="mt-1 font-medium text-stone-900">Google</dd>
            </div>
            <div>
              <dt className="text-sm text-stone-500">Member access</dt>
              <dd className="mt-1 font-medium text-emerald-800">Approved</dd>
            </div>
          </dl>
        </section>
      </main>
    </>
  );
}

function ProfileLoading() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <p className="text-sm font-medium uppercase tracking-[0.2em] text-amber-800">Member portal</p>
      <h1 className="mt-3 text-4xl font-semibold tracking-tight text-stone-950">Loading your profile</h1>
    </main>
  );
}
