import SiteNavigation from "@/app/components/site-navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
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
      <main className="mx-auto w-full max-w-7xl flex-1 px-5 py-10 sm:px-8 sm:py-14">
        <section aria-labelledby="portfolio-title">
          <div className="relative isolate min-h-[430px] overflow-hidden bg-[#101c2c] sm:min-h-[520px]">
            <Image
              src="/images/historic-brick-facade.jpg"
              alt="Historic red brick facade with ornate detailing and arched windows."
              fill
              loading="eager"
              sizes="(max-width: 768px) 100vw, 1280px"
              className="object-cover object-center saturate-[.85] sepia-[.08]"
            />
            <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-r from-[#101c2c]/90 via-[#101c2c]/45 to-transparent" />
            <div className="relative flex min-h-[430px] max-w-3xl flex-col justify-center px-6 py-16 sm:min-h-[520px] sm:px-12 lg:px-16">
              <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-amber-200">Portfolio focus</p>
              <h1 id="portfolio-title" className="mt-5 max-w-2xl font-serif text-5xl leading-[0.98] tracking-tight text-white sm:text-7xl">
                A long view.
              </h1>
              <p className="mt-6 max-w-lg text-base leading-7 text-white/85 sm:text-lg">
                Businesses. Real assets. Thoughtful partnerships.
              </p>
            </div>
            <div className="absolute inset-x-5 bottom-3 z-10 flex flex-col gap-1 text-[10px] leading-5 text-white/75 sm:inset-x-8 sm:bottom-5 sm:flex-row sm:items-end sm:justify-between sm:gap-4">
              <p>Illustrative photography; not a Haley House holding.</p>
              <PhotoCredit
                creator="Alexey Baikov"
                title="Historic Red Brick Building Facade with Arched Windows"
                sourceUrl="https://www.pexels.com/photo/historic-red-brick-building-facade-with-arched-windows-36554120/"
                licenseName="Pexels License"
                licenseUrl="https://www.pexels.com/license/"
                className="text-left sm:text-right"
              />
            </div>
          </div>
        </section>

        <section aria-label="Investment interests" className="mt-10 grid gap-5 sm:mt-14 md:grid-cols-3 md:gap-6">
          {verticals.map((vertical, index) => (
            <article key={vertical.title}>
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
                    <h2 className="font-serif text-2xl tracking-tight sm:text-3xl">{vertical.title}</h2>
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
        </section>

        <section className="mt-12 flex flex-col gap-5 border-t border-stone-300 pt-7 sm:mt-16 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-3xl text-xs leading-5 text-stone-500">
            Illustrative images only. These are areas of interest, not current holdings or a promise of future investments. All investments involve risk.
          </p>
          <Link
            href="/contact"
            className="inline-flex w-fit shrink-0 items-center gap-2 rounded-sm bg-stone-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-amber-900"
          >
            Start a conversation <ArrowRight aria-hidden="true" size={16} />
          </Link>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
