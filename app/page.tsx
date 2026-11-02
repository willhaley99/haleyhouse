import Link from "next/link";
import Image from "next/image";
import { ArrowDown, ArrowRight, ArrowUpRight } from "lucide-react";
import SiteNavigation from "@/app/components/site-navigation";
import SiteFooter from "@/app/components/site-footer";
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
              className="absolute inset-0 bg-gradient-to-b from-[#101c2c]/45 via-[#101c2c]/40 to-[#101c2c]/75"
            />
            <div className="relative mx-auto flex w-full max-w-7xl items-center justify-center px-5 py-24 sm:px-8 sm:py-28">
              <div className="max-w-5xl text-center">
                <p className="mb-7 flex items-center justify-center gap-3 text-[10px] font-semibold uppercase tracking-[0.22em] text-amber-200">
                  <span className="h-px w-9 bg-amber-200/70" />
                  A Louisville family investment collective
                  <span className="h-px w-9 bg-amber-200/70" />
                </p>
                <h1
                  id="home-hero-title"
                  className="font-serif text-[clamp(3.5rem,10vw,8.5rem)] leading-[0.94] tracking-[-0.05em] text-white"
                >
                  Capital with
                  <br />
                  <span className="font-normal italic text-[#c8b994]">a longer view.</span>
                </h1>
                <p className="mx-auto mt-7 max-w-3xl text-base leading-8 text-white/90 sm:text-lg sm:leading-9">
                  Based in Louisville, we bring family resources together to pursue promising opportunities—and
                  share in the success we work to build.
                </p>
                <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                  <Link
                    href="/about"
                    className="group inline-flex items-center gap-3 rounded-full bg-[#b49b6a] px-6 py-3.5 text-sm font-semibold text-[#101c2c] shadow-[0_8px_24px_rgba(16,28,44,0.2)] transition hover:bg-[#c8b994]"
                  >
                    Our story
                    <ArrowRight aria-hidden="true" size={16} className="transition-transform group-hover:translate-x-1" />
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 rounded-full border border-white/45 px-5 py-3 text-sm font-semibold text-white transition hover:border-white hover:bg-white/10"
                  >
                    Get in touch <ArrowUpRight aria-hidden="true" size={15} />
                  </Link>
                </div>
                <a
                  href="#approach"
                  className="mx-auto mt-12 flex w-fit items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.22em] text-white/75 transition hover:text-white"
                >
                  <span className="flex size-8 items-center justify-center rounded-full border border-[#c8b994]/80 text-[#c8b994]">
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

        <section id="approach" className="relative isolate overflow-hidden border-y border-stone-200 bg-[#e9edf1]">
          <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(ellipse_at_82%_15%,rgba(180,155,106,0.12)_0%,rgba(233,237,241,0)_48%)]" />
          <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20">
            <div className="relative grid gap-10 md:grid-cols-[0.7fr_1.3fr] md:gap-16">
              <div>
                <p className="flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.24em] text-amber-900">
                  <span aria-hidden="true" className="h-px w-8 bg-amber-800/60" />
                  What guides us
                </p>
                <h2 className="mt-4 max-w-sm font-serif text-3xl leading-tight tracking-tight text-stone-950 sm:text-4xl">
                  Good decisions begin with shared principles.
                </h2>
              </div>
              <div className="grid gap-3 sm:grid-cols-3">
                {principles.map((principle) => (
                  <article
                    key={principle.number}
                    className="rounded-2xl border border-stone-200 bg-[#101c2c] p-5 shadow-[0_12px_30px_rgba(16,28,44,0.08)] sm:p-6"
                  >
                    <p className="font-mono text-[11px] text-[#c8b994]">{principle.number}</p>
                    <h3 className="mt-5 text-sm font-semibold tracking-wide text-white">
                      {principle.title}
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-white/75">{principle.text}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section aria-labelledby="areas-title" className="relative isolate overflow-hidden border-b border-stone-200 bg-[#f3f5f7]">
          <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(180,155,106,0.09)_0%,rgba(243,245,247,0)_50%)]" />
          <div className="relative mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-24">
          <div className="mb-9 flex flex-col gap-4 border-b border-stone-300 pb-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.24em] text-amber-900">
                <span aria-hidden="true" className="h-px w-8 bg-amber-800/60" />
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
                <figure className="grid h-full grid-rows-[1fr_auto] overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-[0_16px_40px_rgba(16,28,44,0.08)]">
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
          </div>
        </section>

        <section className="relative isolate overflow-hidden bg-[#101c2c]">
          <div aria-hidden="true" className="absolute -right-36 -top-48 size-[28rem] rounded-full bg-[radial-gradient(circle,#314c68_0%,rgba(16,28,44,0)_70%)] opacity-60" />
          <div className="relative mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-24">
          <div className="flex flex-col gap-8 rounded-2xl border border-stone-200 bg-[#fcfdfd] px-7 py-9 shadow-[0_24px_70px_rgba(0,0,0,0.18)] sm:px-10 sm:py-12 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.24em] text-amber-900">
                <span aria-hidden="true" className="h-px w-8 bg-amber-800/60" />
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
              className="group inline-flex shrink-0 items-center gap-3 rounded-full bg-[#b49b6a] px-6 py-3.5 text-sm font-semibold text-[#101c2c] transition hover:bg-[#c8b994]"
            >
              Start a conversation
              <ArrowUpRight aria-hidden="true" size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
