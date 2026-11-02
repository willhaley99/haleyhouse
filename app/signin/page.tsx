import type { Metadata } from "next";
import Link from "next/link";
import EmailSignInForm from "./email-sign-in-form";

export const metadata: Metadata = {
  title: "Member sign in",
};

export default function SignInPage() {
  return (
    <main className="flex min-h-screen items-center justify-center px-6 py-16">
      <section className="w-full max-w-md border border-stone-200 bg-[#fcfdfd] p-8 sm:p-10">
        <Link href="/" className="mb-9 inline-flex items-center gap-3 text-sm font-semibold tracking-wide text-stone-900">
          <span aria-hidden="true" className="flex size-9 items-center justify-center rounded-sm bg-[#1c2e45] font-serif text-lg text-[#f3f5f7]">
            H
          </span>
          Haley House Holdings
        </Link>
        <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-amber-900">
          Member portal
        </p>
        <h1 className="mt-4 font-serif text-3xl tracking-tight text-stone-950">
          Enter your email address
        </h1>
        <div className="mt-8">
          <EmailSignInForm />
        </div>
        <p className="mt-6 text-center text-sm text-stone-500">
          <Link href="/privacy" className="underline underline-offset-4 hover:text-stone-900">
            Privacy policy
          </Link>
        </p>
      </section>
    </main>
  );
}
