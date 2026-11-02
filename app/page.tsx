import Link from "next/link";
import { ArrowDown, ArrowRight, ArrowUpRight } from "lucide-react";
import SiteNavigation from "@/app/components/site-navigation";

const principles = [
  {
    number: "01",
    title: "Stewardship first",
    text: "Capital is managed with care, clarity, and a long view.",
  },
  {
    number: "02",
    title: "Aligned by design",
    text: "A shared perspective brings patience and purpose to every decision.",
  },
  {
    number: "03",
    title: "Built to endure",
    text: "We favor durable potential over short-term noise.",
  },
];

const focusAreas = [
  "Venture growth",
  "Real assets",
  "Strategic opportunities",
];

export default function HomePage() {
  return (
    <div className="min-h-screen overflow-hidden text-stone-900">
      <SiteNavigation currentPath="/" />

      <main>
        <section className="mx-auto max-w-7xl px-5 pb-16 pt-12 sm:px-8 sm:pt-20 lg:pb-24 lg:pt-24">
          <div className="grid items-center gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:gap-16">
            <div className="relative z-10">
              <p className="mb-7 flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.22em] text-amber-900">
                <span className="h-px w-9 bg-amber-800/60" />
                A family investment collective
              </p>
              <h1 className="max-w-3xl font-serif text-[clamp(3.5rem,6.8vw,6rem)] leading-[0.98] tracking-[-0.05em] text-stone-950">
                Capital with
                <br />
                <span className="font-normal italic text-amber-900">a longer view.</span>
              </h1>
              <p className="mt-8 max-w-xl text-base leading-8 text-stone-600 sm:text-lg">
                Based in Louisville, Kentucky, we pool family resources to pursue opportunities we believe
                in and share in the success we work toward together.
              </p>
              <div className="mt-9 flex flex-wrap items-center gap-4">
                <Link
                  href="/portfolio"
                  className="group inline-flex items-center gap-3 rounded-full bg-stone-950 px-6 py-3.5 text-sm font-semibold text-white shadow-[0_8px_24px_rgba(28,22,18,0.12)] transition hover:bg-amber-900"
                >
                  Explore our focus
                  <ArrowRight aria-hidden="true" size={16} className="transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 px-3 py-3 text-sm font-semibold text-stone-700 transition hover:text-amber-900"
                >
                  Get to know us <ArrowUpRight aria-hidden="true" size={15} />
                </Link>
              </div>
              <a
                href="#approach"
                className="mt-16 hidden items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.22em] text-stone-500 transition hover:text-stone-900 lg:inline-flex"
              >
                <span className="flex size-8 items-center justify-center rounded-full border border-stone-300">
                  <ArrowDown aria-hidden="true" size={13} />
                </span>
                Discover our approach
              </a>
            </div>

            <div className="mx-auto w-full max-w-xl lg:ml-auto">
            <div className="relative overflow-hidden rounded-xl border border-[#2b4058] bg-[#1c2e45] p-7 text-white shadow-[0_20px_55px_rgba(25,42,62,0.14)] sm:p-10">
              <div className="relative">
                <div className="flex items-start justify-between gap-5">
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-amber-200/80">
                      Our investment lens
                    </p>
                    <p className="mt-2 font-serif text-2xl tracking-tight sm:text-3xl">
                        Intentional by nature.
                      </p>
                    </div>
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-sm border border-white/20 font-serif text-lg text-amber-100">
                      H
                    </span>
                  </div>

                  <div className="mt-9 border-t border-white/15">
                    {focusAreas.map((area, index) => (
                      <div
                        key={area}
                        className="flex items-center border-b border-white/15 py-5"
                      >
                        <div className="flex items-center gap-4">
                          <span className="w-7 font-mono text-[10px] text-amber-200/65">
                            0{index + 1}
                          </span>
                          <span className="text-sm font-medium tracking-wide text-stone-100 sm:text-base">
                            {area}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 flex items-end justify-between gap-5">
                    <p className="max-w-xs text-xs leading-6 text-stone-300">
                      A disciplined approach to shared capital and lasting opportunity.
                    </p>
                    <span className="font-serif text-4xl leading-none text-amber-100/20">HH</span>
                  </div>
                </div>
              </div>
              <p className="mt-4 text-right text-[10px] font-medium uppercase tracking-[0.18em] text-stone-500">
                Independent thinking. Shared conviction.
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-16">
          <div className="grid gap-6 border-y border-stone-300 py-7 sm:grid-cols-[0.7fr_1.3fr] sm:items-center sm:gap-12 sm:py-8">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-amber-900">
                Rooted in Louisville
              </p>
              <p className="mt-2 font-serif text-2xl tracking-tight text-stone-950">
                Shared resources. Shared possibility.
              </p>
            </div>
            <p className="max-w-3xl text-sm leading-7 text-stone-600 sm:text-base">
              Our family brings experience and involvement across accounting, real estate, property management,
              nonprofit work, and information technology. Those perspectives shape how we look at businesses,
              assets, and the people behind them.
              {" "}
              <Link href="/about" className="font-semibold text-stone-900 underline decoration-stone-400 underline-offset-4 transition hover:text-amber-900">
                Our story
              </Link>
            </p>
          </div>
        </section>

        <section id="approach" className="border-y border-stone-200 bg-[#e9edf1]">
          <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20">
            <div className="grid gap-10 md:grid-cols-[0.7fr_1.3fr] md:gap-16">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-amber-900">
                  What guides us
                </p>
                <h2 className="mt-4 max-w-sm font-serif text-3xl leading-tight tracking-tight text-stone-950 sm:text-4xl">
                  Good decisions begin with shared principles.
                </h2>
              </div>
              <div className="grid gap-0 sm:grid-cols-3">
                {principles.map((principle) => (
                  <article
                    key={principle.number}
                    className="border-t border-stone-300 py-6 sm:border-l sm:border-t-0 sm:px-6 sm:first:border-l-0 sm:first:pl-0 sm:last:pr-0"
                  >
                    <p className="font-mono text-[11px] text-amber-900/70">{principle.number}</p>
                    <h3 className="mt-5 text-sm font-semibold tracking-wide text-stone-900">
                      {principle.title}
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-stone-600">{principle.text}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-24">
          <div className="flex flex-col gap-8 rounded-xl border border-stone-200 bg-[#fcfdfd] px-7 py-9 sm:px-10 sm:py-10 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-amber-900">
                Built for partnership
              </p>
              <h2 className="mt-4 max-w-xl font-serif text-3xl leading-tight tracking-tight text-stone-950 sm:text-4xl">
                A considered approach to what comes next.
              </h2>
              <p className="mt-4 max-w-lg text-sm leading-7 text-stone-600">
                For thoughtful conversations about shared capital, opportunities, and the long view.
              </p>
            </div>
            <Link
              href="/contact"
              className="group inline-flex shrink-0 items-center gap-3 rounded-full border border-stone-300 px-5 py-3 text-sm font-semibold text-stone-800 transition hover:border-stone-900 hover:bg-stone-950 hover:text-white"
            >
              Start a conversation
              <ArrowUpRight aria-hidden="true" size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </section>
      </main>

      <footer className="mx-auto flex max-w-7xl flex-col gap-3 border-t border-stone-200/80 px-5 py-7 text-xs text-stone-500 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p>© Haley House Holdings</p>
        <div className="flex items-center gap-5">
          <p>Shared capital. Long-term conviction.</p>
          <Link href="/privacy" className="transition hover:text-stone-900">
            Privacy
          </Link>
        </div>
      </footer>
    </div>
  );
}
