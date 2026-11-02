import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SiteNavigation from "@/app/components/site-navigation";

const values = [
  {
    number: "01",
    title: "Stewardship before speed",
    text: "Capital deserves care. We favor considered decisions, clear expectations, and a thoughtful understanding of what an opportunity asks of its partners.",
  },
  {
    number: "02",
    title: "Alignment over activity",
    text: "Shared participation works best when people understand the purpose, trade-offs, and time horizon. We value candid conversations before decisions are made.",
  },
  {
    number: "03",
    title: "Patience with purpose",
    text: "A long view is not passive. It means looking beyond short-term noise while staying attentive to changing facts, risks, and the reasons behind an investment.",
  },
  {
    number: "04",
    title: "Clarity builds trust",
    text: "Good relationships rely on direct communication. We aim to make the rationale, assumptions, and uncertainties behind an opportunity easier to understand.",
  },
];

export default function AboutPage() {
  return (
    <>
      <SiteNavigation currentPath="/about" />
      <main className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
        <section className="max-w-4xl border-b border-stone-300 pb-12 sm:pb-16">
          <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-amber-900">About us</p>
          <h1 className="mt-5 max-w-3xl font-serif text-4xl leading-[1.05] tracking-tight text-stone-950 sm:text-6xl">
            A family collective, built around a longer view.
          </h1>
          <p className="mt-7 max-w-3xl text-base leading-8 text-stone-600 sm:text-lg">
            Haley House Holdings is built around a simple principle: capital is strongest when it is shared,
            guided by family values, and paired with disciplined vision. We bring people together to consider
            opportunities with care, ask better questions, and make decisions with a clear sense of purpose.
          </p>
        </section>

        <section className="grid gap-8 border-b border-stone-300 py-12 sm:py-16 md:grid-cols-[0.7fr_1.3fr] md:gap-16">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-amber-900">Our story</p>
            <h2 className="mt-4 max-w-sm font-serif text-3xl leading-tight tracking-tight text-stone-950 sm:text-4xl">
              Shared perspective. Thoughtful participation.
            </h2>
          </div>
          <div className="space-y-5 text-base leading-8 text-stone-600">
            <p>
              Haley House Holdings is a family-run investment collective. The idea is straightforward:
              bring a shared perspective to opportunities that merit time, discussion, and careful consideration.
            </p>
            <p>
              We believe the quality of a decision depends on more than the headline potential. It also depends
              on understanding the underlying business or asset, the people involved, the risks that could change
              the outcome, and whether the opportunity fits the people considering it.
            </p>
            <p>
              Our aim is to build a durable approach to shared capital—one grounded in thoughtful judgment,
              candid communication, and relationships that can support a long-term view.
            </p>
          </div>
        </section>

        <section className="py-12 sm:py-16">
          <div className="max-w-2xl">
            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-amber-900">What guides us</p>
            <h2 className="mt-4 font-serif text-3xl tracking-tight text-stone-950 sm:text-4xl">
              Principles behind the perspective.
            </h2>
          </div>
          <div className="mt-8 grid gap-x-10 sm:grid-cols-2">
            {values.map((value) => (
              <article key={value.number} className="border-t border-stone-300 py-6 sm:py-8">
                <p className="font-mono text-[10px] text-amber-900/70">{value.number}</p>
                <h3 className="mt-4 font-serif text-2xl tracking-tight text-stone-900">{value.title}</h3>
                <p className="mt-3 max-w-lg text-sm leading-7 text-stone-600">{value.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="flex flex-col gap-6 border-t border-stone-300 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-serif text-2xl tracking-tight text-stone-950">The long view starts with a conversation.</p>
            <p className="mt-2 text-sm leading-6 text-stone-600">
              Learn more about the areas we consider and how we think about opportunity.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex w-fit shrink-0 items-center gap-2 rounded-sm bg-stone-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-amber-900"
          >
            Get in touch <ArrowRight aria-hidden="true" size={16} />
          </Link>
        </section>
      </main>
    </>
  );
}
