"use client";

import { useState, type FormEvent } from "react";

const contactEmail = "willhaley99@gmail.com";

export default function ContactForm() {
  const [message, setMessage] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const inquiry = String(formData.get("inquiry") ?? "").trim();
    const subject = `Website inquiry from ${name}`;
    const body = [`Name: ${name}`, `Email: ${email}`, "", inquiry].join("\n");
    const mailtoUrl = `mailto:${contactEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoUrl;
    setMessage("Your email app should open with this inquiry. Review it and send the email to complete your message.");
  }

  return (
    <form className="mt-8 grid gap-5" onSubmit={handleSubmit}>
      <div className="grid gap-5 md:grid-cols-2">
        <label className="grid gap-2 text-sm font-medium text-stone-700">
          Name
          <input
            name="name"
            autoComplete="name"
            required
            maxLength={120}
            className="rounded-xl border border-stone-300 bg-white px-4 py-3 outline-none transition focus:border-amber-900 focus:ring-2 focus:ring-amber-900/15"
            placeholder="Your name"
          />
        </label>
        <label className="grid gap-2 text-sm font-medium text-stone-700">
          Email
          <input
            name="email"
            type="email"
            autoComplete="email"
            required
            maxLength={254}
            className="rounded-xl border border-stone-300 bg-white px-4 py-3 outline-none transition focus:border-amber-900 focus:ring-2 focus:ring-amber-900/15"
            placeholder="you@example.com"
          />
        </label>
      </div>
      <label className="grid gap-2 text-sm font-medium text-stone-700">
        Inquiry
        <textarea
          name="inquiry"
          rows={6}
          required
          maxLength={5000}
          className="rounded-xl border border-stone-300 bg-white px-4 py-3 outline-none transition focus:border-amber-900 focus:ring-2 focus:ring-amber-900/15"
          placeholder="Tell us about the opportunity or partnership you have in mind."
        />
      </label>
      {message && (
        <p role="status" className="text-sm text-stone-600">
          {message}
        </p>
      )}
      <button
        type="submit"
        className="w-fit rounded-full bg-[#b49b6a] px-6 py-3.5 text-sm font-semibold text-[#101c2c] transition hover:bg-[#c8b994]"
      >
        Continue to email
      </button>
    </form>
  );
}
