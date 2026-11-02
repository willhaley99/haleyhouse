import Link from "next/link";
import SignOutButton from "./sign-out-button";

export default function MemberNavigation() {
  return (
    <header className="mx-auto max-w-6xl px-6 pt-4 sm:pt-5">
      <nav
        aria-label="Member navigation"
        className="flex flex-wrap items-center justify-between gap-4 border-b border-stone-300/80 px-1 pb-4"
      >
        <Link href="/" className="flex items-center gap-3 text-sm font-semibold tracking-wide text-stone-900">
          <span aria-hidden="true" className="flex size-9 items-center justify-center rounded-sm bg-[#1c2e45] font-serif text-lg text-[#f3f5f7]">
            H
          </span>
          <span>
            <span className="block">Haley House</span>
            <span className="mt-0.5 block text-[9px] font-medium uppercase tracking-[0.2em] text-stone-500">
              Holdings
            </span>
          </span>
        </Link>
        <div className="flex items-center gap-4 text-sm font-medium text-stone-600 sm:gap-6">
          <Link href="/dashboard" className="transition-colors hover:text-stone-950">
            Dashboard
          </Link>
          <Link href="/profile" className="transition-colors hover:text-stone-950">
            Profile
          </Link>
          <SignOutButton />
        </div>
      </nav>
    </header>
  );
}
