import type { Metadata } from "next";
import EmailSignInForm from "./email-sign-in-form";

export const metadata: Metadata = {
  title: "Member sign in",
};

export default function SignInPage() {
  return (
    <main className="flex min-h-screen items-center justify-center px-6 py-16">
      <section className="w-full max-w-md rounded-[2rem] border border-stone-200 bg-white p-8 shadow-sm md:p-10">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-amber-800">
          Member portal
        </p>
        <h1 className="mt-4 text-3xl font-semibold tracking-tight text-stone-950">
          Enter your email address
        </h1>
        <div className="mt-8">
          <EmailSignInForm />
        </div>
      </section>
    </main>
  );
}
