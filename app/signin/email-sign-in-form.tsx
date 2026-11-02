"use client";

import { useState, type FormEvent } from "react";
import { signIn } from "next-auth/react";

export default function EmailSignInForm() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setMessage("");
    setIsSubmitting(true);

    let response: Response;

    try {
      response = await fetch("/api/auth/authorize-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
    } catch (error) {
      if (!(error instanceof TypeError)) {
        throw error;
      }

      setMessage("We couldn’t verify that email. Please try again.");
      setIsSubmitting(false);
      return;
    }

    if (response.status === 403) {
      setMessage("This email address is not approved for member access.");
      setIsSubmitting(false);
      return;
    }

    if (!response.ok) {
      setMessage("We couldn’t verify that email. Please try again.");
      setIsSubmitting(false);
      return;
    }

    try {
      const result = await signIn("google", { callbackUrl: "/dashboard" }, { login_hint: email.trim() });
      if (result?.error) {
        setMessage("Google sign-in couldn’t be started. Please try again.");
      }
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="member-email" className="block text-sm font-medium text-stone-700">
        Email address
      </label>
      <input
        id="member-email"
        name="email"
        type="email"
        autoComplete="email"
        required
        maxLength={254}
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        className="mt-2 w-full rounded-xl border border-stone-300 bg-white px-4 py-3 text-stone-950 outline-none transition focus:border-amber-900 focus:ring-2 focus:ring-amber-900/15"
        aria-describedby={message ? "sign-in-message" : undefined}
      />
      {message && (
        <p id="sign-in-message" role="alert" className="mt-3 text-sm text-red-700">
          {message}
        </p>
      )}
      <button
        type="submit"
        disabled={isSubmitting}
        className="mt-5 w-full rounded-full bg-[#b49b6a] px-6 py-3.5 text-sm font-semibold text-[#101c2c] transition hover:bg-[#c8b994] disabled:cursor-wait disabled:opacity-60"
      >
        {isSubmitting ? "Checking…" : "Continue"}
      </button>
    </form>
  );
}
