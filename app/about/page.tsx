import Link from "next/link";
import { ArrowRight, UserRound } from "lucide-react";
import SiteNavigation from "@/app/components/site-navigation";

const familyMembers = ["01", "02", "03", "04", "05"];

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
            Based in Louisville, Kentucky, Haley House Holdings began with a straightforward idea: bring family
            resources together to pursue opportunities we believe may succeed, and share in the success we work
            toward together.
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
              We are a family-run investment collective shaped by the people, experience, and practical
              perspectives within our family. Pooling resources lets us consider opportunities together—with
              shared purpose, open discussion, and a long-term outlook.
            </p>
            <p>
              Our family’s experience and involvement spans accounting, real estate, property management,
              nonprofit work, and information technology. These fields bring different ways of thinking about
              financial fundamentals, physical assets, day-to-day operations, community, and the systems that
              help organizations work.
            </p>
            <p>
              We draw on those perspectives as we evaluate opportunities, while recognizing that every business,
              asset, and investment has its own details and risks. We want to understand both the potential and
              what could stand in its way before deciding whether it belongs in our shared effort.
            </p>
            <p>
              At its heart, Haley House Holdings is about building together: combining resources and judgment,
              supporting opportunities we believe in, and sharing in the outcomes—good or difficult—that come
              with investing.
            </p>
          </div>
        </section>

        <section className="border-b border-stone-300 py-12 sm:py-16">
          <div className="max-w-2xl">
            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-amber-900">The people behind Haley House</p>
            <h2 className="mt-4 font-serif text-3xl tracking-tight text-stone-950 sm:text-4xl">
              Family, working toward a shared vision.
            </h2>
            <p className="mt-4 text-sm leading-7 text-stone-600 sm:text-base">
              Meet the family members behind our collective. Personal introductions and portraits will be added here.
            </p>
          </div>
          <div className="mt-8 grid grid-cols-2 gap-x-5 gap-y-8 sm:grid-cols-3 lg:grid-cols-5 lg:gap-x-6">
            {familyMembers.map((number) => (
              <article key={number}>
                <div
                  role="img"
                  aria-label={`Headshot placeholder for family member ${number}`}
                  className="flex aspect-[4/5] items-center justify-center border border-stone-300 bg-[#e5ebf1] text-[#314c68]"
                >
                  <UserRound aria-hidden="true" size={52} strokeWidth={1} />
                </div>
                <h3 className="mt-4 font-serif text-lg tracking-tight text-stone-900">
                  Family member {number}
                </h3>
                <p className="mt-1 text-xs font-medium uppercase tracking-[0.14em] text-amber-900">
                  Title to come
                </p>
                <p className="mt-2 text-sm leading-6 text-stone-600">
                  Short introduction to be added.
                </p>
              </article>
            ))}
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
