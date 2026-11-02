import Link from "next/link";
import Image from "next/image";
import { ArrowDown, ArrowRight, ArrowUpRight } from "lucide-react";
import SiteNavigation from "@/app/components/site-navigation";
import PhotoCredit from "@/app/components/photo-credit";

const areasOfInterest = [
  {
    number: "01",
    title: "Business ownership",
    image: "/images/industrial-warehouse.jpg",
    alt: "A spacious industrial warehouse interior with steel structures and an open work floor.",
    creator: "Pixabay",
    photoTitle: "Gray Concrete Building Interior",
    sourceUrl: "https://www.pexels.com/photo/gray-concrete-building-interior-236709/",
    imagePosition: "object-center",
  },
  {
    number: "02",
    title: "Real assets",
    image: "/images/rural-hills.jpg",
    alt: "Green hills and mature trees across a quiet rural landscape.",
    creator: "Mark Daniel",
    photoTitle: "View of a Hill",
    sourceUrl: "https://www.pexels.com/photo/view-of-a-hill-17070425/",
    imagePosition: "object-center",
  },
  {
    number: "03",
    title: "Strategic opportunities",
    image: "/images/architectural-plans.jpg",
    alt: "Architectural plans and a pencil resting on a wood table.",
    creator: "Ron Lach",
    photoTitle: "White Printer Paper on Brown Wooden Desk",
    sourceUrl: "https://www.pexels.com/photo/white-printer-paper-on-brown-wooden-desk-9615249/",
    imagePosition: "object-[center_65%]",
  },
];

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

export default function HomePage() {
  return (
    <div className="min-h-screen overflow-hidden text-stone-900">
      <SiteNavigation currentPath="/" />

      <main>
        <section aria-labelledby="home-hero-title">
          <figure className="relative isolate flex min-h-[min(760px,calc(100svh-5.5rem))] items-center overflow-hidden bg-[#101c2c]">
            <Image
              src="/images/estate-manor.jpg"
              alt="A traditional manor surrounded by gardens and mature trees, used as illustrative photography."
              fill
              loading="eager"
              sizes="100vw"
              className="object-cover object-[70%_center] saturate-[.78] sm:object-center"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-r from-[#101c2c]/95 via-[#101c2c]/72 to-[#101c2c]/20"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-t from-[#101c2c]/65 via-transparent to-[#101c2c]/15"
            />
            <div className="relative mx-auto flex w-full max-w-7xl items-center px-5 py-24 sm:px-8 sm:py-28">
              <div className="max-w-5xl">
                <p className="mb-7 flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.22em] text-amber-200">
                  <span className="h-px w-9 bg-amber-200/70" />
                  A Louisville family investment collective
                </p>
                <h1
                  id="home-hero-title"
                  className="font-serif text-[clamp(3.25rem,8vw,7.5rem)] leading-[0.94] tracking-[-0.05em] text-white"
                >
                  Capital with
                  <br />
                  <span className="font-normal italic text-amber-200">a longer view.</span>
                </h1>
                <p className="mt-7 max-w-2xl text-base leading-8 text-white/85 sm:text-lg sm:leading-9">
                  Based in Louisville, we bring family resources together to pursue promising opportunities—and
                  share in the success we work to build.
                </p>
                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <Link
                    href="/portfolio"
                    className="group inline-flex items-center gap-3 rounded-full bg-[#f3f5f7] px-6 py-3.5 text-sm font-semibold text-[#101c2c] shadow-[0_8px_24px_rgba(16,28,44,0.2)] transition hover:bg-amber-100"
                  >
                    Explore our focus
                    <ArrowRight aria-hidden="true" size={16} className="transition-transform group-hover:translate-x-1" />
                  </Link>
                  <Link
                    href="/about"
                    className="inline-flex items-center gap-2 px-3 py-3 text-sm font-semibold text-white transition hover:text-amber-200"
                  >
                    Get to know us <ArrowUpRight aria-hidden="true" size={15} />
                  </Link>
                </div>
                <a
                  href="#approach"
                  className="mt-12 inline-flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.22em] text-white/75 transition hover:text-white"
                >
                  <span className="flex size-8 items-center justify-center rounded-full border border-white/45">
                    <ArrowDown aria-hidden="true" size={13} />
                  </span>
                  Discover our approach
                </a>
              </div>
            </div>
            <div className="absolute inset-x-5 bottom-3 z-10 flex flex-col gap-1 text-[10px] leading-5 text-white/75 sm:inset-x-8 sm:bottom-5 sm:flex-row sm:items-end sm:justify-between sm:gap-4">
              <p>Illustrative photography; not a Haley House property.</p>
              <PhotoCredit
                creator="Roman Pobochii"
                title="Elegant Manor with Lush Landscaped Garden"
                sourceUrl="https://www.pexels.com/photo/elegant-manor-with-lush-landscaped-garden-33738275/"
                licenseName="Pexels License"
                licenseUrl="https://www.pexels.com/license/"
                className="text-left sm:text-right"
              />
            </div>
          </figure>
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

        <section aria-labelledby="areas-title" className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-24">
          <div className="mb-9 flex flex-col gap-4 border-b border-stone-300 pb-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-amber-900">
                Areas of interest
              </p>
              <h2
                id="areas-title"
                className="mt-4 max-w-xl font-serif text-3xl leading-tight tracking-tight text-stone-950 sm:text-4xl"
              >
                A considered view of opportunity.
              </h2>
            </div>
            <p className="max-w-md text-sm leading-6 text-stone-600">
              Illustrative images only; they do not represent current holdings or specific investments.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {areasOfInterest.map((area) => (
              <article key={area.number} className="h-full">
                <figure className="grid h-full grid-rows-[1fr_auto] overflow-hidden border border-stone-300 bg-white">
                  <div className="relative aspect-[4/3] overflow-hidden bg-stone-200">
                    <Image
                      src={area.image}
                      alt={area.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className={`object-cover ${area.imagePosition} saturate-[.82] transition-transform duration-500 hover:scale-[1.025] motion-reduce:transition-none motion-reduce:hover:scale-100`}
                    />
                    <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-[#101c2c]/75 via-transparent to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5 text-white sm:p-6">
                      <h3 className="font-serif text-2xl tracking-tight sm:text-3xl">{area.title}</h3>
                      <span className="pb-1 font-mono text-[10px] text-white/75">{area.number}</span>
                    </div>
                  </div>
                  <PhotoCredit
                    creator={area.creator}
                    title={area.photoTitle}
                    sourceUrl={area.sourceUrl}
                    licenseName="Pexels License"
                    licenseUrl="https://www.pexels.com/license/"
                    className="flex min-h-12 items-center px-4 py-2 text-[9px] leading-4 text-stone-500"
                  />
                </figure>
              </article>
            ))}
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
