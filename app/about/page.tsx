import Link from "next/link";
import { ArrowRight, UserRound } from "lucide-react";
import SiteNavigation from "@/app/components/site-navigation";
import SiteFooter from "@/app/components/site-footer";

const familyMembers = ["01", "02", "03", "04", "05"];

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col bg-stone-50">
      <SiteNavigation currentPath="/about" />
      <main className="flex-1">
        <section
          aria-labelledby="about-title"
          className="border-b border-stone-200 bg-[#e9edf1]"
        >
          <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:px-8 sm:py-20 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:gap-16 lg:py-24">
            <div>
              <p className="flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.24em] text-amber-900">
                <span aria-hidden="true" className="h-px w-8 bg-amber-800/60" />
                About us
              </p>
              <h1
                id="about-title"
                className="mt-5 max-w-3xl font-serif text-5xl leading-[0.96] tracking-[-0.045em] text-stone-950 sm:text-7xl"
              >
                Family resources, invested together.
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-8 text-stone-600 sm:text-lg">
                Based in Louisville, Kentucky, we bring family resources together to pursue
                promising opportunities and share in the success we work to build.
              </p>
            </div>
            <aside className="relative overflow-hidden rounded-2xl bg-[#101c2c] p-7 text-white shadow-[0_24px_70px_rgba(16,28,44,0.14)] sm:p-9">
              <div
                aria-hidden="true"
                className="absolute -right-20 -top-24 size-64 rounded-full bg-[radial-gradient(circle,rgba(180,155,106,0.3)_0%,rgba(16,28,44,0)_70%)]"
              />
              <div className="relative">
                <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#c8b994]">
                  Louisville, Kentucky
                </p>
                <p className="mt-7 font-serif text-2xl leading-snug tracking-tight sm:text-3xl">
                  A shared perspective. A patient approach. A long view.
                </p>
                <div className="mt-8 h-px w-12 bg-[#c8b994]/70" />
                <p className="mt-5 text-sm leading-6 text-white/70">
                  Haley House Holdings is a family investment collective built around shared
                  resources and thoughtful partnership.
                </p>
              </div>
            </aside>
          </div>
        </section>

        <section className="bg-white">
          <div className="mx-auto grid max-w-7xl gap-8 px-5 py-14 sm:px-8 sm:py-20 md:grid-cols-[1.3fr_0.7fr] md:gap-16">
            <div className="md:order-2">
              <p className="flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.24em] text-amber-900">
                <span aria-hidden="true" className="h-px w-8 bg-amber-800/60" />
                Our story
              </p>
              <h2 className="mt-4 max-w-sm font-serif text-4xl leading-tight tracking-tight text-stone-950 sm:text-5xl">
                Practical experience across different fields.
              </h2>
            </div>
            <div className="space-y-5 text-base leading-8 text-stone-600 md:order-1">
              <p>
                Across accounting, real estate, property management, nonprofit work, and
                information technology, our family has developed practical experience with
                financial detail, property operations, organizational stewardship, and
                technology.
              </p>
              <p>
                That range gives us useful questions to bring to a conversation; it does not
                replace close examination of any particular business or asset.
              </p>
            </div>
          </div>
        </section>

        <section id="family" className="border-y border-stone-200 bg-[#e9edf1]">
          <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-20">
            <div className="mb-9 flex flex-col gap-4 border-b border-stone-300 pb-6 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.24em] text-amber-900">
                  <span aria-hidden="true" className="h-px w-8 bg-amber-800/60" />
                  The people behind Haley House
                </p>
                <h2 className="mt-4 max-w-xl font-serif text-3xl leading-tight tracking-tight text-stone-950 sm:text-4xl">
                  Family, working toward a shared vision.
                </h2>
              </div>
              <p className="max-w-md text-sm leading-6 text-stone-600">
                Personal introductions and portraits will be added here.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-5 lg:grid-cols-5">
              {familyMembers.map((number) => (
                <article
                  key={number}
                  className="overflow-hidden rounded-2xl border border-white bg-white shadow-[0_12px_30px_rgba(16,28,44,0.06)]"
                >
                  <div
                    role="img"
                    aria-label={`Headshot placeholder for family member ${number}`}
                    className="flex aspect-[4/4.5] items-center justify-center bg-[#101c2c] text-[#c8b994]"
                  >
                    <UserRound aria-hidden="true" size={48} strokeWidth={1} />
                  </div>
                  <div className="p-4 sm:p-5">
                    <h3 className="font-serif text-lg tracking-tight text-stone-950">
                      Family member {number}
                    </h3>
                    <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-amber-900">
                      Title to come
                    </p>
                    <p className="mt-3 text-sm leading-6 text-stone-600">
                      Short introduction to be added.
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#101c2c]">
          <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8 sm:py-16">
            <div className="flex flex-col gap-7 rounded-2xl border border-white/10 bg-white/[0.04] px-6 py-8 sm:px-9 sm:py-10 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#c8b994]">
                  Built for partnership
                </p>
                <h2 className="mt-4 font-serif text-3xl tracking-tight text-white sm:text-4xl">
                  Start a thoughtful conversation.
                </h2>
                <p className="mt-3 max-w-xl text-sm leading-6 text-white/70">
                  Connect with us about Haley House Holdings and our shared approach.
                </p>
              </div>
              <Link
                href="/contact"
                className="inline-flex w-fit shrink-0 items-center gap-2 rounded-full bg-[#b49b6a] px-5 py-3.5 text-sm font-semibold text-[#101c2c] transition hover:bg-[#c8b994]"
              >
                Get in touch <ArrowRight aria-hidden="true" size={16} />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
