import Link from "next/link";
import { ArrowRight, UserRound } from "lucide-react";
import SiteNavigation from "@/app/components/site-navigation";
import SiteFooter from "@/app/components/site-footer";

const familyMembers = ["01", "02", "03", "04", "05"];

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteNavigation currentPath="/about" />
      <main className="mx-auto w-full max-w-6xl flex-1 px-6 py-16 sm:py-20">
        <section className="mx-auto max-w-5xl border-b border-stone-300 pb-12 text-center sm:pb-16">
          <p className="flex items-center justify-center gap-3 text-[10px] font-semibold uppercase tracking-[0.22em] text-amber-900">
            <span aria-hidden="true" className="h-px w-8 bg-amber-800/50" />About us<span aria-hidden="true" className="h-px w-8 bg-amber-800/50" />
          </p>
          <h1 className="mx-auto mt-5 max-w-4xl font-serif text-5xl leading-[0.98] tracking-[-0.04em] text-stone-950 sm:text-7xl">
            Family resources, invested together.
          </h1>
          <p className="mx-auto mt-7 max-w-3xl text-base leading-8 text-stone-600 sm:text-lg">
            Based in Louisville, Kentucky, Haley House Holdings began with a straightforward idea: bring family
            resources together to pursue opportunities we believe may succeed, and share in the success we work
            toward together.
          </p>
        </section>

        <section className="grid gap-8 border-b border-stone-300 py-12 sm:py-16 md:grid-cols-[0.7fr_1.3fr] md:gap-16">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-amber-900">Our story</p>
            <h2 className="mt-4 max-w-sm font-serif text-3xl leading-tight tracking-tight text-stone-950 sm:text-4xl">
              Practical experience across different fields.
            </h2>
          </div>
          <div className="text-base leading-8 text-stone-600">
            <p>
              Across accounting, real estate, property management, nonprofit work, and information technology,
              our family has developed practical experience with financial detail, property operations,
              organizational stewardship, and technology. That range gives us useful questions to bring to a
              conversation; it does not replace close examination of any particular business or asset.
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

        <section className="flex flex-col gap-6 border-t border-stone-300 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-serif text-2xl tracking-tight text-stone-950">See what draws our attention.</p>
            <p className="mt-2 text-sm leading-6 text-stone-600">
              Explore the kinds of opportunities we consider and the questions we bring to them.
            </p>
          </div>
          <Link
            href="/portfolio"
            className="inline-flex w-fit shrink-0 items-center gap-2 rounded-full bg-[#b49b6a] px-5 py-3 text-sm font-semibold text-[#101c2c] transition hover:bg-[#c8b994]"
          >
            What we invest in <ArrowRight aria-hidden="true" size={16} />
          </Link>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
