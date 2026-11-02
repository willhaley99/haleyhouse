import SiteNavigation from "@/app/components/site-navigation";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

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
            We look across business growth, real assets, and selective strategic opportunities. Each has
            its own character; our common thread is a preference for clear rationale, thoughtful partnership,
            and a time horizon that can support durable value.
          </p>
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

        <section className="mt-12 border-y border-stone-300 py-9 sm:mt-16 sm:py-11">
          <div className="grid gap-6 md:grid-cols-[0.7fr_1.3fr] md:gap-16">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-amber-900">
                Where our perspective comes from
              </p>
              <h2 className="mt-4 font-serif text-3xl leading-tight tracking-tight text-stone-950">
                Experience across disciplines.
              </h2>
            </div>
            <div>
              <p className="text-sm leading-7 text-stone-600 sm:text-base">
                Based in Louisville, Kentucky, our family brings experience and involvement in accounting,
                real estate, property management, nonprofit work, and information technology. These reflect
                our family’s experience and investment interests, rather than a list of current holdings.
              </p>
              <p className="mt-4 text-sm leading-7 text-stone-600 sm:text-base">
                We look for opportunities where our collective judgment can add context, where the people and
                purpose make sense to us, and where we can participate with a shared understanding of the risks.
              </p>
            </div>
          </div>
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
              Our areas of interest describe how we think, not a representation of current holdings or a promise
              that any opportunity will be available. Each opportunity is considered on its own merits.
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
