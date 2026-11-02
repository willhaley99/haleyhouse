import Link from "next/link";

const navItems = [
  { href: "/about", label: "About" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/dashboard", label: "Dashboard" },
  { href: "/contact", label: "Contact" },
];

const focusAreas = [
  "Venture growth and early-stage opportunities",
  "Family-driven, long-term capital allocation",
  "Shared-pool investing with disciplined execution",
];

const principles = [
  { title: "Steady capital", text: "Investing with patience, discipline, and conviction through cycles." },
  { title: "Family alignment", text: "A shared philosophy that prioritizes trust, stewardship, and mutual accountability." },
  { title: "Operational clarity", text: "Clear focus on where the pool has strategic edge and long-term upside." },
];

export default function HomePage() {
  return (
    <div className="min-h-screen text-stone-900">
      <header className="mx-auto max-w-6xl px-6 pt-6">
        <nav className="flex items-center justify-between rounded-full border border-stone-200 bg-white/80 px-5 py-3 shadow-sm backdrop-blur-sm">
          <Link href="/" className="text-lg font-semibold tracking-tight text-stone-900">
            Haley House
          </Link>
          <div className="hidden items-center gap-6 text-sm font-medium text-stone-600 md:flex">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="hover:text-stone-900">
                {item.label}
              </Link>
            ))}
          </div>
          <Link
            href="/contact"
            className="rounded-full bg-stone-900 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-stone-700"
          >
            Start a conversation
          </Link>
        </nav>
      </header>

      <main>
        <section className="mx-auto max-w-6xl px-6 pb-12 pt-16 md:pt-20">
          <div className="grid items-center gap-12 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <div className="mb-6 inline-flex items-center rounded-full border border-amber-200 bg-amber-50 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-amber-900">
                Family-run investment collective
              </div>
              <h1 className="max-w-xl text-5xl font-semibold tracking-tight text-stone-950 md:text-6xl">
                Shared capital. Long-term conviction.
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-8 text-stone-600">
                Haley House Holdings connects a family-oriented pool of capital with durable growth
                opportunities, strategic ventures, and carefully selected investments built for the long run.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/portfolio"
                  className="rounded-full bg-amber-700 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-amber-800"
                >
                  Explore focus areas
                </Link>
                <Link
                  href="/about"
                  className="rounded-full border border-stone-300 bg-white px-6 py-3 text-sm font-semibold text-stone-800 hover:border-stone-400"
                >
                  Learn our story
                </Link>
              </div>
            </div>

            <div className="rounded-[2rem] border border-stone-200 bg-white p-6 shadow-[0_20px_60px_rgba(28,22,18,0.08)]">
              <div className="rounded-[1.5rem] bg-stone-900 p-6 text-white">
                <p className="text-sm uppercase tracking-[0.18em] text-stone-300">Investment philosophy</p>
                <div className="mt-8 space-y-6">
                  {focusAreas.map((item) => (
                    <div key={item} className="flex gap-3">
                      <span className="mt-1 h-2.5 w-2.5 rounded-full bg-amber-400" />
                      <p className="text-sm leading-6 text-stone-200">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-16">
          <div className="grid gap-6 md:grid-cols-3">
            {principles.map((principle) => (
              <article key={principle.title} className="rounded-3xl border border-stone-200 bg-white p-6 shadow-sm">
                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-amber-800">
                  {principle.title}
                </p>
                <p className="text-base leading-7 text-stone-600">{principle.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-16">
          <div className="rounded-[2rem] border border-stone-200 bg-stone-950 px-8 py-10 text-white md:px-12">
            <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-stone-300">Built for partnership</p>
                <h2 className="mt-3 max-w-lg text-3xl font-semibold tracking-tight text-white">
                  Thoughtful investing with a family-first lens.
                </h2>
              </div>
              <Link
                href="/contact"
                className="inline-flex rounded-full bg-white px-5 py-3 text-sm font-semibold text-stone-900 hover:bg-stone-200"
              >
                Speak with the team
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
