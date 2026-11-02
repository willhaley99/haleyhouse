import Link from "next/link";
import SignOutButton from "./sign-out-button";

export default function MemberNavigation() {
  return (
    <header className="mx-auto max-w-6xl px-6 pt-6">
      <nav
        aria-label="Member navigation"
        className="flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-stone-200 bg-white/90 px-5 py-3 shadow-sm"
      >
        <Link href="/" className="text-lg font-semibold tracking-tight text-stone-900">
          Haley House Holdings
        </Link>
        <div className="flex items-center gap-4 text-sm font-medium text-stone-600">
          <Link href="/dashboard" className="hover:text-stone-900">
            Dashboard
          </Link>
          <Link href="/profile" className="hover:text-stone-900">
            Profile
          </Link>
          <SignOutButton />
        </div>
      </nav>
    </header>
  );
}
