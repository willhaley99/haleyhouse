import SiteNavigation from "@/app/components/site-navigation";

const verticals = [
  {
    title: "Venture growth",
    text: "Targeting promising founders and high-conviction opportunities with durable product-market fit.",
  },
  {
    title: "Real assets",
    text: "Supporting long-duration investments with measured risk and stable operators.",
  },
  {
    title: "Strategic capital",
    text: "Backed by flexibility, partnership, and a thoughtful view on compounding outcomes.",
  },
];

export default function PortfolioPage() {
  return (
    <>
      <SiteNavigation currentPath="/portfolio" />
      <main className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
        <section className="max-w-4xl border-b border-stone-300 pb-12 sm:pb-16">
          <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-amber-900">Portfolio focus</p>
          <h1 className="mt-5 max-w-3xl font-serif text-4xl leading-[1.05] tracking-tight text-stone-950 sm:text-6xl">
            A disciplined mix across growth and stewardship.
          </h1>
        </section>

        <section className="mt-10 grid gap-x-10 md:grid-cols-3">
          {verticals.map((vertical, index) => (
            <article key={vertical.title} className="border-b border-stone-300 py-7 md:border-t md:py-8">
              <p className="font-mono text-[10px] text-amber-900/70">0{index + 1}</p>
              <h2 className="mt-5 font-serif text-2xl tracking-tight text-stone-900">{vertical.title}</h2>
              <p className="mt-3 text-sm leading-7 text-stone-600">{vertical.text}</p>
            </article>
          ))}
        </section>
      </main>
    </>
  );
}
