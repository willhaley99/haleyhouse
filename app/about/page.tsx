import Link from "next/link";
import { ArrowUpRight, UserRound } from "lucide-react";
import SiteNavigation from "@/app/components/site-navigation";
import SiteFooter from "@/app/components/site-footer";

const familyMembers = ["01", "02", "03", "04", "05"];

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col bg-stone-50">
      <SiteNavigation currentPath="/about" />
      <main className="flex-1">
        <section aria-labelledby="about-title" className="border-b border-stone-200 bg-white">
          <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-24 lg:py-28">
            <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:gap-20">
              <div>
                <p className="flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.24em] text-amber-900">
                  <span aria-hidden="true" className="h-px w-8 bg-amber-800/60" />
                  About Haley House
                </p>
                <h1
                  id="about-title"
                  className="mt-6 max-w-3xl font-serif text-5xl leading-[0.96] tracking-[-0.045em] text-stone-950 sm:text-7xl"
                >
                  Family resources, <span className="italic text-[#8b744b]">invested together.</span>
                </h1>
              </div>
              <div className="max-w-xl border-l border-[#b49b6a] pl-6 sm:pl-8 lg:mb-2">
                <p className="text-base leading-8 text-stone-600 sm:text-lg">
                  Based in Louisville, Kentucky, we bring family resources together to pursue
                  promising opportunities and share in the success we work to build.
                </p>
                <p className="mt-5 text-[10px] font-semibold uppercase tracking-[0.2em] text-stone-500">
                  Louisville, Kentucky
                </p>
              </div>
            </div>
          </div>
        </section>

        <section aria-labelledby="story-title" className="bg-[#101c2c] text-white">
          <div className="mx-auto grid max-w-7xl gap-8 px-5 py-14 sm:px-8 sm:py-20 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <div>
              <p className="flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.24em] text-[#c8b994]">
                <span aria-hidden="true" className="h-px w-8 bg-[#c8b994]/70" />
                Our story
              </p>
              <h2
                id="story-title"
                className="mt-5 max-w-md font-serif text-4xl leading-tight tracking-tight sm:text-5xl"
              >
                Practical experience across different fields.
              </h2>
            </div>
            <div className="space-y-6 border-t border-white/15 pt-6 text-base leading-8 text-white/75 lg:border-l lg:border-t-0 lg:pl-12 lg:pt-0">
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

        <section id="family" aria-labelledby="family-title" className="bg-[#e9edf1]">
          <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-20">
            <div className="grid gap-5 border-b border-stone-300 pb-7 sm:grid-cols-[1fr_auto] sm:items-end">
              <div>
                <p className="flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.24em] text-amber-900">
                  <span aria-hidden="true" className="h-px w-8 bg-amber-800/60" />
                  The people behind Haley House
                </p>
                <h2
                  id="family-title"
                  className="mt-4 max-w-xl font-serif text-3xl leading-tight tracking-tight text-stone-950 sm:text-4xl"
                >
                  Family, working toward a shared vision.
                </h2>
              </div>
              <p className="max-w-sm text-sm leading-6 text-stone-600">
                Personal introductions and portraits will be added here.
              </p>
            </div>
            <div className="mt-2 grid gap-x-12 lg:grid-cols-2">
              {familyMembers.map((number) => (
                <article
                  key={number}
                  className="flex min-h-24 items-center gap-5 border-b border-stone-300 py-5 sm:gap-7"
                >
                  <span className="font-serif text-2xl italic text-[#8b744b]">{number}</span>
                  <span
                    aria-hidden="true"
                    className="flex size-11 shrink-0 items-center justify-center rounded-full bg-[#d7e0e8] text-[#314c68]"
                  >
                    <UserRound size={22} strokeWidth={1.25} />
                  </span>
                  <div>
                    <h3 className="font-serif text-xl tracking-tight text-stone-950">
                      Family member {number}
                    </h3>
                    <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-amber-900">
                      Title to come
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white">
          <div className="mx-auto flex max-w-7xl flex-col gap-5 border-t border-stone-200 px-5 py-10 sm:flex-row sm:items-center sm:justify-between sm:px-8 sm:py-14">
            <div>
              <p className="font-serif text-2xl tracking-tight text-stone-950">
                Interested in a conversation?
              </p>
              <p className="mt-2 text-sm leading-6 text-stone-600">
                Get in touch with Haley House Holdings.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex w-fit items-center gap-2 border-b border-[#b49b6a] pb-2 text-sm font-semibold text-stone-950 transition hover:text-amber-900"
            >
              Contact us <ArrowUpRight aria-hidden="true" size={16} />
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
