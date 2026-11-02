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
      <main className="flex-1 bg-stone-50">
        <section aria-labelledby="portfolio-title" className="mx-auto grid w-full max-w-7xl gap-10 px-5 py-12 sm:px-8 sm:py-16 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-16 lg:py-20">
          <div className="max-w-2xl">
            <p className="flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.24em] text-amber-900">
              <span aria-hidden="true" className="h-px w-8 bg-amber-800/60" />What we invest in
            </p>
            <h1 id="portfolio-title" className="mt-6 font-serif text-5xl leading-[0.96] tracking-[-0.045em] text-stone-950 sm:text-7xl">
              Investing with <span className="italic text-[#8b744b]">a longer view.</span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-8 text-stone-600 sm:text-lg">
              Businesses, real assets, and aligned opportunities—considered with patience and care.
            </p>
            <Link
              href="#investment-interests"
              className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#b49b6a] px-7 py-3.5 text-sm font-semibold text-[#101c2c] transition hover:bg-[#c8b994]"
            >
              Explore our areas <ArrowDown aria-hidden="true" size={16} />
            </Link>
          </div>
          <figure className="relative overflow-hidden rounded-2xl border border-stone-200 bg-[#101c2c] shadow-[0_24px_70px_rgba(16,28,44,0.14)]">
            <div className="relative aspect-[4/3]">
              <Image
                src="/images/historic-brick-facade.jpg"
                alt="Historic red brick facade with ornate detailing and arched windows."
                fill
                loading="eager"
                sizes="(max-width: 1024px) 100vw, 55vw"
                className="object-cover object-center saturate-[.85] sepia-[.08]"
              />
              <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-[#101c2c]/65 via-transparent to-transparent" />
              <p className="absolute bottom-4 left-5 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/90 sm:bottom-6 sm:left-7">
                Built to endure
              </p>
            </div>
            <PhotoCredit
              creator="Alexey Baikov"
              title="Historic Red Brick Building Facade with Arched Windows"
              sourceUrl="https://www.pexels.com/photo/historic-red-brick-building-facade-with-arched-windows-36554120/"
              licenseName="Pexels License"
              licenseUrl="https://www.pexels.com/license/"
              className="bg-white px-4 py-2 text-[9px] leading-4 text-stone-500 sm:px-5"
            />
          </figure>
        </section>

        <section id="investment-interests" aria-label="Investment interests" className="border-y border-stone-200 bg-[#e9edf1]">
          <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-20">
            <div className="mb-9 flex flex-col gap-4 border-b border-stone-300 pb-6 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.24em] text-amber-900">
                  <span aria-hidden="true" className="h-px w-8 bg-amber-800/60" />Areas of interest
                </p>
                <h2 className="mt-4 max-w-xl font-serif text-3xl leading-tight tracking-tight text-stone-950 sm:text-4xl">
                  Grounded in real potential.
                </h2>
              </div>
              <p className="max-w-md text-sm leading-6 text-stone-600">
                Selective interests, guided by fundamentals, alignment, and time.
              </p>
            </div>
            <div className="grid gap-5 md:grid-cols-3">
              {verticals.map((vertical, index) => {
                const featured = index === 1;
                return (
                  <article key={vertical.title} className="h-full">
                    <figure className={`grid h-full grid-rows-[1fr_auto] overflow-hidden rounded-2xl border shadow-[0_16px_40px_rgba(16,28,44,0.08)] ${featured ? "border-[#101c2c] bg-[#101c2c]" : "border-white bg-white"}`}>
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
                        <p className={`px-4 pt-4 text-sm leading-6 sm:px-5 ${featured ? "text-white/85" : "text-stone-700"}`}>{vertical.text}</p>
                        <PhotoCredit
                          creator={vertical.creator}
                          title={vertical.photoTitle}
                          sourceUrl={vertical.sourceUrl}
                          licenseName="Pexels License"
                          licenseUrl="https://www.pexels.com/license/"
                          className={`flex min-h-12 items-center px-4 py-2 text-[9px] leading-4 sm:px-5 ${featured ? "text-white/65" : "text-stone-500"}`}
                        />
                      </div>
                    </figure>
                  </article>
                );
              })}
            </div>
            <div className="mt-9 flex flex-col gap-5 border-t border-stone-300 pt-6 sm:flex-row sm:items-center sm:justify-between">
              <p className="max-w-3xl text-xs leading-5 text-stone-600">
                Illustrative images only. These are areas of interest, not current holdings or a promise of future investments. All investments involve risk.
              </p>
              <Link
                href="/contact"
                className="inline-flex w-fit shrink-0 items-center gap-2 rounded-full bg-[#b49b6a] px-5 py-3.5 text-sm font-semibold text-[#101c2c] transition hover:bg-[#c8b994]"
              >
                Start a conversation <ArrowRight aria-hidden="true" size={16} />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
