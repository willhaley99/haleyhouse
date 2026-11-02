import Link from "next/link";
import Image from "next/image";
import SignOutButton from "./sign-out-button";

export default function MemberNavigation() {
  return (
    <header className="mx-auto w-full max-w-7xl px-5 pt-4 sm:px-8 sm:pt-5">
      <nav
        aria-label="Member navigation"
        className="flex flex-wrap items-center justify-between gap-4 border-b border-stone-300/80 px-1 pb-4"
      >
        <Link href="/" className="group flex items-center gap-3 text-sm font-semibold tracking-wide text-stone-900">
          <span className="flex size-10 items-center justify-center overflow-hidden rounded-sm border border-stone-300 bg-white transition group-hover:border-amber-800">
            <Image src="/haley-house-mark.png" alt="" width={40} height={40} />
          </span>
          <span>
            <span className="block">Haley House</span>
            <span className="mt-0.5 block text-[9px] font-medium uppercase tracking-[0.2em] text-stone-500">
              Holdings
            </span>
          </span>
        </Link>
        <div className="flex items-center gap-4 text-sm font-medium text-stone-600 sm:gap-6">
          <Link href="/dashboard" className="rounded-full px-3 py-2 transition-colors hover:bg-stone-100 hover:text-stone-950">
            Dashboard
          </Link>
          <Link href="/profile" className="rounded-full px-3 py-2 transition-colors hover:bg-stone-100 hover:text-stone-950">
            Profile
          </Link>
          <SignOutButton />
        </div>
      </nav>
    </header>
  );
}
