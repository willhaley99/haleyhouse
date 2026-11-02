import SiteNavigation from "@/app/components/site-navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowDown, ArrowRight } from "lucide-react";
import PhotoCredit from "@/app/components/photo-credit";
import SiteFooter from "@/app/components/site-footer";

const verticals = [
  {
    title: "Business ownership",
    text: "Businesses with room to grow and strong fundamentals.",
    image: "/images/industrial-warehouse.jpg",
    alt: "An expansive industrial interior with structural steel beams.",
    creator: "Pixabay",
    photoTitle: "Gray Concrete Building Interior",
    sourceUrl: "https://www.pexels.com/photo/gray-concrete-building-interior-236709/",
    imagePosition: "object-center",
  },
  {
    title: "Real assets",
    text: "Durable assets with clear purpose and potential.",
    image: "/images/rural-hills.jpg",
    alt: "Green hills and mature trees across a quiet rural landscape.",
    creator: "Mark Daniel",
    photoTitle: "View of a Hill",
    sourceUrl: "https://www.pexels.com/photo/view-of-a-hill-17070425/",
    imagePosition: "object-center",
  },
  {
    title: "Strategic opportunities",
    text: "Selective partnerships shaped by alignment and thoughtful terms.",
    image: "/images/architectural-plans.jpg",
    alt: "Architectural plans and a pencil resting on a wood table.",
    creator: "Ron Lach",
    photoTitle: "White Printer Paper on Brown Wooden Desk",
    sourceUrl: "https://www.pexels.com/photo/white-printer-paper-on-brown-wooden-desk-9615249/",
    imagePosition: "object-[center_65%]",
  },
];

export default function PortfolioPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteNavigation currentPath="/portfolio" />
      <main className="flex-1">
        <section aria-labelledby="portfolio-title" className="relative isolate flex min-h-[min(760px,calc(100svh-5.5rem))] overflow-hidden bg-[#101c2c]">
          <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_100%,rgba(49,76,104,0.75)_0%,rgba(16,28,44,0)_55%),linear-gradient(180deg,#101c2c_0%,#101722_100%)]" />
          <div aria-hidden="true" className="absolute bottom-[-28rem] left-1/2 size-[38rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_38%_28%,#f0e5cc_0%,#c8b994_22%,#9a8154_43%,#314c68_68%,#101c2c_76%)] shadow-[0_0_100px_rgba(180,155,106,0.2)] sm:bottom-[-34rem] sm:size-[54rem]" />
          <div className="relative mx-auto flex w-full max-w-7xl flex-col items-center px-5 pb-20 pt-16 text-center sm:px-8 sm:pt-24">
            <p className="flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.24em] text-[#c8b994]">
              <span aria-hidden="true" className="h-px w-8 bg-[#c8b994]/70" />What we invest in<span aria-hidden="true" className="h-px w-8 bg-[#c8b994]/70" />
            </p>
            <h1 id="portfolio-title" className="mt-7 max-w-5xl font-serif text-[clamp(3.5rem,9vw,8rem)] leading-[0.93] tracking-[-0.05em] text-white">
              Investing with
              <br />
              <span className="font-normal italic text-[#c8b994]">a longer view.</span>
            </h1>
            <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-white/80 sm:text-lg">
              A focused set of interests. A shared, patient approach.
            </p>
            <Link
              href="#investment-interests"
              className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#b49b6a] px-7 py-3.5 text-sm font-semibold text-[#101c2c] transition hover:bg-[#c8b994]"
            >
              Explore our areas <ArrowDown aria-hidden="true" size={16} />
            </Link>
            <p className="absolute inset-x-5 bottom-4 mx-auto w-fit max-w-[calc(100%-2.5rem)] rounded-full border border-white/10 bg-[#101c2c]/75 px-4 py-2 text-[9px] leading-4 text-white/80 backdrop-blur-sm sm:bottom-6 sm:text-[10px]">
              Illustrative photography below; images do not represent Haley House holdings.
            </p>
          </div>
        </section>

        <section id="investment-interests" aria-label="Investment interests" className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-24">
          <div className="mb-9 flex flex-col gap-4 border-b border-stone-300 pb-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-amber-900">Areas of interest</p>
              <h2 className="mt-4 max-w-xl font-serif text-3xl leading-tight tracking-tight text-stone-950 sm:text-4xl">
                Grounded in real potential.
              </h2>
            </div>
            <p className="max-w-md text-sm leading-6 text-stone-600">
              Selective interests, guided by fundamentals, alignment, and time.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {verticals.map((vertical, index) => (
              <article key={vertical.title} className="h-full">
                <figure className="grid h-full grid-rows-[1fr_auto] overflow-hidden border border-stone-300 bg-white">
                  <div className="relative aspect-[4/3] overflow-hidden bg-stone-200">
                    <Image
                      src={vertical.image}
                      alt={vertical.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className={`object-cover ${vertical.imagePosition} saturate-[.82] transition-transform duration-500 hover:scale-[1.025] motion-reduce:transition-none motion-reduce:hover:scale-100`}
                    />
                    <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-[#101c2c]/80 via-transparent to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5 text-white sm:p-6">
                      <h3 className="font-serif text-2xl tracking-tight sm:text-3xl">{vertical.title}</h3>
                      <span className="pb-1 font-mono text-[10px] text-white/75">0{index + 1}</span>
                    </div>
                  </div>
                  <div>
                    <p className="px-4 pt-4 text-sm leading-6 text-stone-600 sm:px-5">{vertical.text}</p>
                    <PhotoCredit
                      creator={vertical.creator}
                      title={vertical.photoTitle}
                      sourceUrl={vertical.sourceUrl}
                      licenseName="Pexels License"
                      licenseUrl="https://www.pexels.com/license/"
                      className="flex min-h-12 items-center px-4 py-2 text-[9px] leading-4 text-stone-500 sm:px-5"
                    />
                  </div>
                </figure>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-12 flex flex-col gap-5 border-t border-stone-300 pt-7 sm:mt-16 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-3xl text-xs leading-5 text-stone-500">
            Illustrative images only. These are areas of interest, not current holdings or a promise of future investments. All investments involve risk.
          </p>
          <Link
            href="/contact"
            className="inline-flex w-fit shrink-0 items-center gap-2 rounded-full bg-[#b49b6a] px-5 py-3.5 text-sm font-semibold text-[#101c2c] transition hover:bg-[#c8b994]"
          >
            Start a conversation <ArrowRight aria-hidden="true" size={16} />
          </Link>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
