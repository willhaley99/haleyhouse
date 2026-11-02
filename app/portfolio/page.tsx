import SiteNavigation from "@/app/components/site-navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import PhotoCredit from "@/app/components/photo-credit";

const verticals = [
  {
    title: "Venture growth",
    summary: "Backing the potential of enduring businesses.",
    text: "We are interested in businesses with a clear purpose, a meaningful problem to solve, and room to grow over time. We consider the quality of the team, the strength of the business model, and the realities of the market it serves.",
    questions: ["What gives the business a reason to endure?", "What would sustainable growth require?"],
  },
  {
    title: "Real assets",
    summary: "Taking a grounded view of long-lived assets.",
    text: "Physical assets can play a role in a long-term investment perspective. We look at the asset itself, the people responsible for operating it, the sources of value, and the risks that may affect its use or performance.",
    questions: ["What supports the asset's underlying value?", "Which operating and market risks matter most?"],
  },
  {
    title: "Strategic capital",
    summary: "Staying open to selective, aligned opportunities.",
    text: "Some opportunities do not fit neatly into a single category. We remain open to situations where a distinct advantage, strong alignment, and a thoughtful structure can make participation worth considering.",
    questions: ["Why is this opportunity a fit for our perspective?", "Are the incentives and expectations aligned?"],
  },
];

const considerations = [
  {
    title: "Clarity of purpose",
    text: "Can we explain what the opportunity is, how it may create value, and what assumptions that view depends on?",
  },
  {
    title: "People and alignment",
    text: "Do the people involved have the experience, incentives, and shared expectations to pursue the opportunity responsibly?",
  },
  {
    title: "Risk and time",
    text: "What could go wrong, what may be difficult to change, and does the expected time horizon make sense for those participating?",
  },
];

export default function PortfolioPage() {
  return (
    <>
      <SiteNavigation currentPath="/portfolio" />
      <main className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
        <section className="max-w-4xl border-b border-stone-300 pb-12 sm:pb-16">
          <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-amber-900">Portfolio focus</p>
          <h1 className="mt-5 max-w-3xl font-serif text-4xl leading-[1.05] tracking-tight text-stone-950 sm:text-6xl">
            Different opportunities. One considered perspective.
          </h1>
          <p className="mt-7 max-w-3xl text-base leading-8 text-stone-600 sm:text-lg">
            Our interests range from growing businesses to tangible assets and selective partnerships. What
            matters most is the strength of the underlying case, the people involved, and whether the terms
            and time horizon make sense.
          </p>
        </section>

        <section className="mt-10 grid overflow-hidden border border-stone-300 bg-white md:grid-cols-[1.1fr_0.9fr]">
          <figure className="grid grid-rows-[1fr_auto]">
            <div className="relative min-h-56 bg-stone-800 sm:min-h-72">
              <Image
                src="/images/louisville-bridge.jpg"
                alt="Downtown Louisville and the Ohio River in 1999, viewed from a bridge."
                fill
                loading="eager"
                sizes="(max-width: 768px) 100vw, 55vw"
                className="object-cover object-center saturate-[.75]"
              />
            </div>
            <PhotoCredit
              creator="William Alden III"
              title="Waterfront and downtown Louisville, 1999"
              sourceUrl="https://commons.wikimedia.org/wiki/File:Waterfront_and_downtown_Louisville_Kentucky_USA_Ohio_River_mile_604_June_1999_file_99f102.jpg"
              className="bg-white px-4 py-2 text-[10px] leading-5 text-stone-500 sm:px-5"
            />
          </figure>
          <div className="flex flex-col justify-center px-6 py-7 sm:px-9 sm:py-10">
            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-amber-900">
              A view of our home city
            </p>
            <h2 className="mt-3 font-serif text-2xl leading-tight tracking-tight text-stone-950 sm:text-3xl">
              Grounded in the places where we live and work.
            </h2>
            <p className="mt-3 text-sm leading-7 text-stone-600">
              This Louisville waterfront photograph is illustrative; it does not represent a Haley House
              holding or investment.
            </p>
          </div>
        </section>

        <section className="mt-10 grid gap-x-10 md:grid-cols-3">
          {verticals.map((vertical, index) => (
            <article key={vertical.title} className="border-b border-stone-300 py-7 md:border-t md:py-8">
              <p className="font-mono text-[10px] text-amber-900/70">0{index + 1}</p>
              <h2 className="mt-5 font-serif text-2xl tracking-tight text-stone-900">{vertical.title}</h2>
              <p className="mt-2 text-sm font-medium leading-6 text-stone-700">{vertical.summary}</p>
              <p className="mt-4 text-sm leading-7 text-stone-600">{vertical.text}</p>
              <ul className="mt-5 space-y-3 border-t border-stone-200 pt-4">
                {vertical.questions.map((question) => (
                  <li key={question} className="flex gap-3 text-xs leading-5 text-stone-600">
                    <span aria-hidden="true" className="mt-2 size-1 shrink-0 rounded-full bg-amber-800" />
                    {question}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </section>

        <section className="mt-14 border-y border-stone-300 bg-[#e9edf1] px-6 py-10 sm:mt-20 sm:px-10 sm:py-12">
          <div className="grid gap-8 md:grid-cols-[0.7fr_1.3fr] md:gap-16">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-amber-900">How we evaluate</p>
              <h2 className="mt-4 font-serif text-3xl leading-tight tracking-tight text-stone-950">
                Start with the questions that matter.
              </h2>
            </div>
            <div className="divide-y divide-stone-300">
              {considerations.map((item, index) => (
                <article key={item.title} className="grid gap-2 py-5 first:pt-0 last:pb-0 sm:grid-cols-[0.65fr_1.35fr] sm:gap-6">
                  <h3 className="text-sm font-semibold text-stone-900">
                    <span className="mr-3 font-mono text-[10px] text-amber-900/70">0{index + 1}</span>
                    {item.title}
                  </h3>
                  <p className="text-sm leading-6 text-stone-600">{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-14 flex flex-col gap-6 border-t border-stone-300 pt-8 sm:mt-16 sm:flex-row sm:items-center sm:justify-between">
          <div className="max-w-2xl">
            <p className="font-serif text-2xl tracking-tight text-stone-950">Opportunity begins with fit.</p>
            <p className="mt-2 text-sm leading-6 text-stone-600">
              These themes describe our interests, not a list of current holdings or a promise of future
              opportunities. Any investment involves risk.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex w-fit shrink-0 items-center gap-2 rounded-sm bg-stone-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-amber-900"
          >
            Start a conversation <ArrowRight aria-hidden="true" size={16} />
          </Link>
        </section>
      </main>
    </>
  );
}
