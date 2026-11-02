"use client";

import { signOut } from "next-auth/react";

export default function SignOutButton() {
  return (
    <button
      type="button"
      onClick={() => signOut({ callbackUrl: "/" })}
      className="rounded-full border border-stone-300 px-4 py-2 text-stone-700 transition hover:border-stone-500 hover:text-stone-950"
    >
      Sign out
    </button>
  );
}
