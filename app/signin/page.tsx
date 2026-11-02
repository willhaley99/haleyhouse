import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteFooter from "@/app/components/site-footer";
import EmailSignInForm from "./email-sign-in-form";

export const metadata: Metadata = {
  title: "Member sign in",
};

export default function SignInPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="mx-auto flex w-full max-w-7xl flex-1 items-center justify-center px-5 py-16 sm:px-8">
      <section className="w-full max-w-lg rounded-2xl border border-stone-200 bg-[#fcfdfd] p-8 sm:p-12">
        <Link href="/" className="mb-10 inline-flex items-center gap-3 text-sm font-semibold tracking-wide text-stone-900">
          <span className="flex size-11 items-center justify-center overflow-hidden rounded-sm border border-stone-300 bg-white">
            <Image src="/haley-house-mark.png" alt="" width={44} height={44} />
          </span>
          Haley House Holdings
        </Link>
        <p className="flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.22em] text-amber-900">
          <span aria-hidden="true" className="h-px w-8 bg-amber-800/50" />Member portal
        </p>
        <h1 className="mt-5 font-serif text-4xl leading-[1.02] tracking-[-0.03em] text-stone-950 sm:text-5xl">
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
      <SiteFooter />
    </div>
  );
}
