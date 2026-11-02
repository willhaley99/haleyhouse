import Link from "next/link";

const links = [
  { href: "/about", label: "Our story" },
  { href: "/portfolio", label: "What we invest in" },
  { href: "/dashboard", label: "Member portal" },
];

export default function SiteNavigation({ currentPath = "/" }: { currentPath?: string }) {
  return (
    <header className="mx-auto max-w-7xl px-5 pt-5 sm:px-8 sm:pt-7">
      <nav
        aria-label="Main navigation"
        className="relative flex min-h-16 items-center justify-between gap-5 rounded-2xl border border-stone-200/80 bg-[#fffdf9]/90 px-5 py-3 shadow-[0_8px_30px_rgba(54,39,26,0.05)] backdrop-blur-md sm:px-6"
      >
        <Link href="/" className="group flex shrink-0 items-center gap-3" aria-label="Haley House Holdings home">
          <span
            aria-hidden="true"
            className="flex size-9 items-center justify-center rounded-full border border-amber-900/20 font-serif text-lg text-amber-900 transition group-hover:border-amber-900/50"
          >
            H
          </span>
          <span className="leading-tight">
            <span className="block text-sm font-semibold tracking-[0.04em] text-stone-950 sm:text-base">
              Haley House
            </span>
            <span className="hidden text-[10px] font-medium uppercase tracking-[0.2em] text-stone-500 sm:block">
              Holdings
            </span>
          </span>
        </Link>

        <div className="hidden items-center gap-8 text-[13px] font-medium text-stone-600 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={currentPath === link.href ? "page" : undefined}
              className={`nav-link py-2 transition-colors hover:text-stone-950 ${
                currentPath === link.href ? "text-stone-950" : ""
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden md:block">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-stone-950 px-5 py-3 text-xs font-semibold tracking-wide text-white transition hover:bg-amber-900"
          >
            Get in touch <span aria-hidden="true">↗</span>
          </Link>
        </div>

        <details className="group relative md:hidden">
          <summary className="flex cursor-pointer list-none items-center gap-2 rounded-full border border-stone-300 px-4 py-2.5 text-sm font-semibold text-stone-800 transition hover:border-stone-500 [&::-webkit-details-marker]:hidden">
            <span className="menu-icon" aria-hidden="true">
              <span />
              <span />
            </span>
            Menu
          </summary>
          <div className="absolute right-0 top-[calc(100%+0.75rem)] z-20 w-[min(20rem,calc(100vw-2.5rem))] rounded-2xl border border-stone-200 bg-[#fffdf9] p-3 shadow-[0_20px_60px_rgba(28,22,18,0.14)]">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block rounded-xl px-4 py-3 text-sm font-medium text-stone-700 transition hover:bg-stone-100 hover:text-stone-950"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="mt-2 flex items-center justify-between rounded-xl bg-stone-950 px-4 py-3 text-sm font-semibold text-white transition hover:bg-amber-900"
            >
              Get in touch <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </details>
      </nav>
    </header>
  );
}
