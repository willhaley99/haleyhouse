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
        <section className="mx-auto max-w-7xl px-5 pb-20 pt-16 sm:px-8 sm:pt-24 lg:pb-28 lg:pt-28">
          <div className="grid items-center gap-14 lg:grid-cols-[1.08fr_0.92fr] lg:gap-16">
            <div className="relative z-10">
              <p className="mb-7 flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.24em] text-amber-900">
                <span className="h-px w-9 bg-amber-800/60" />
                A family investment collective
              </p>
              <h1 className="max-w-3xl font-serif text-[clamp(3.5rem,7.2vw,6.5rem)] leading-[0.96] tracking-[-0.055em] text-stone-950">
                Capital with
                <br />
                <span className="font-normal italic text-amber-900">a longer view.</span>
              </h1>
              <p className="mt-8 max-w-xl text-base leading-8 text-stone-600 sm:text-lg">
                We bring family capital together around thoughtful opportunities, enduring businesses,
                and the belief that the best outcomes are built with patience.
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

            <div className="relative mx-auto w-full max-w-xl lg:ml-auto">
              <div
                aria-hidden="true"
                className="absolute -right-14 -top-14 size-56 rounded-full border border-amber-800/15 sm:-right-20 sm:-top-20 sm:size-72"
              />
              <div
                aria-hidden="true"
                className="absolute -bottom-12 -left-12 size-40 rounded-full border border-stone-300/70"
              />
              <div className="relative overflow-hidden rounded-[2rem] bg-[#2c3028] p-7 text-white shadow-[0_30px_90px_rgba(38,35,28,0.2)] sm:p-10">
                <div
                  aria-hidden="true"
                  className="absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:44px_44px]"
                />
                <div
                  aria-hidden="true"
                  className="absolute -right-24 -top-20 size-72 rounded-full border border-amber-200/20"
                />
                <div
                  aria-hidden="true"
                  className="absolute -right-10 -top-6 size-44 rounded-full border border-amber-200/20"
                />
                <div className="relative">
                  <div className="flex items-start justify-between gap-5">
                    <div>
                      <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-amber-200/80">
                        Our investment lens
                      </p>
                      <p className="mt-2 font-serif text-2xl tracking-tight sm:text-3xl">
                        Intentional by nature.
                      </p>
                    </div>
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-full border border-white/20 font-serif text-lg text-amber-100">
                      H
                    </span>
                  </div>

                  <div className="mt-12 border-t border-white/15">
                    {focusAreas.map((area, index) => (
                      <div
                        key={area}
                        className="flex items-center justify-between border-b border-white/15 py-5"
                      >
                        <div className="flex items-center gap-4">
                          <span className="font-mono text-[10px] text-amber-200/65">
                            0{index + 1}
                          </span>
                          <span className="text-sm font-medium tracking-wide text-stone-100 sm:text-base">
                            {area}
                          </span>
                        </div>
                        <ArrowUpRight aria-hidden="true" size={16} className="text-amber-200/70" />
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 flex items-end justify-between gap-5">
                    <p className="max-w-xs text-xs leading-6 text-stone-300">
                      A disciplined approach to shared capital and lasting opportunity.
                    </p>
                    <span className="font-serif text-5xl leading-none text-white/10 sm:text-6xl">HH</span>
                  </div>
                </div>
              </div>
              <p className="relative mt-5 text-right text-[10px] font-medium uppercase tracking-[0.2em] text-stone-500">
                Independent thinking. Shared conviction.
              </p>
            </div>
          </div>
        </section>

        <section id="approach" className="border-y border-stone-200/80 bg-[#f2ede5]">
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
          <div className="flex flex-col gap-8 rounded-[2rem] border border-stone-200 bg-[#fffdf9] px-7 py-9 shadow-[0_16px_50px_rgba(54,39,26,0.05)] sm:px-12 sm:py-12 md:flex-row md:items-end md:justify-between">
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
        <p>Shared capital. Long-term conviction.</p>
      </footer>
    </div>
  );
}
