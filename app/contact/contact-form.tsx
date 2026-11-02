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
            className="rounded-xl border border-stone-300 bg-stone-50 px-4 py-3 outline-none focus:border-stone-500"
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
            className="rounded-xl border border-stone-300 bg-stone-50 px-4 py-3 outline-none focus:border-stone-500"
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
          className="rounded-xl border border-stone-300 bg-stone-50 px-4 py-3 outline-none focus:border-stone-500"
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
        className="w-fit rounded-full bg-amber-700 px-6 py-3 text-sm font-semibold text-white hover:bg-amber-800"
      >
        Continue to email
      </button>
      <p className="text-sm text-stone-500">
        This opens your email app; your message is not sent until you send the email. You can also email{" "}
        <a className="underline underline-offset-4" href={`mailto:${contactEmail}`}>
          {contactEmail}
        </a>
        .
      </p>
    </form>
  );
}
