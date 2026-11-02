import Link from "next/link";
import Image from "next/image";
import { ArrowRight, UserRound } from "lucide-react";
import SiteNavigation from "@/app/components/site-navigation";
import PhotoCredit from "@/app/components/photo-credit";

const familyMembers = ["01", "02", "03", "04", "05"];

export default function AboutPage() {
  return (
    <>
      <SiteNavigation currentPath="/about" />
      <main className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
        <section className="max-w-4xl border-b border-stone-300 pb-12 sm:pb-16">
          <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-amber-900">About us</p>
          <h1 className="mt-5 max-w-3xl font-serif text-4xl leading-[1.05] tracking-tight text-stone-950 sm:text-6xl">
            Family resources, invested together.
          </h1>
          <p className="mt-7 max-w-3xl text-base leading-8 text-stone-600 sm:text-lg">
            Based in Louisville, Kentucky, Haley House Holdings began with a straightforward idea: bring family
            resources together to pursue opportunities we believe may succeed, and share in the success we work
            toward together.
          </p>
        </section>

        <figure className="relative mt-10 overflow-hidden rounded-sm border border-stone-300 bg-stone-800">
          <div className="relative h-56 sm:h-72">
            <Image
              src="/images/louisville-riverfront.jpg"
              alt="Downtown Louisville viewed from Waterfront Park in 1999, with the riverfront in the distance."
              fill
              loading="eager"
              sizes="(max-width: 1152px) 100vw, 1152px"
              className="object-cover object-center saturate-[.75]"
            />
            <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-r from-[#101c2c]/60 via-transparent to-transparent" />
            <p className="absolute bottom-5 left-5 font-serif text-2xl text-white sm:bottom-7 sm:left-7 sm:text-3xl">
              Louisville, Kentucky
            </p>
          </div>
          <PhotoCredit
            creator="William Alden"
            title="View WSW from near Waterfront Park playground, 1999"
            sourceUrl="https://commons.wikimedia.org/wiki/File:99E050_-_Looking_WSW_from_near_Waterfront_Park_playground_(near_foot_of_Preston_Street),_Louisville,_Kentucky,_Ohio_River_mile_603,_May_21,_1999_-_Flickr_-_Bill_Alden.jpg"
            className="bg-white px-4 py-2 text-[10px] leading-5 text-stone-500 sm:px-5"
          />
        </figure>

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
            className="inline-flex w-fit shrink-0 items-center gap-2 rounded-sm bg-stone-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-amber-900"
          >
            What we invest in <ArrowRight aria-hidden="true" size={16} />
          </Link>
        </section>
      </main>
    </>
  );
}
