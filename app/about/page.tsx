import SiteNavigation from "@/app/components/site-navigation";

const values = [
  "Shared stewardship over individual gain",
  "Patience in markets and approach to capital",
  "Operational clarity across all opportunities",
  "Relationships grounded in trust and alignment",
];

export default function AboutPage() {
  return (
    <>
      <SiteNavigation currentPath="/about" />
      <main className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
        <section className="max-w-4xl border-b border-stone-300 pb-12 sm:pb-16">
          <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-amber-900">About us</p>
          <h1 className="mt-5 max-w-3xl font-serif text-4xl leading-[1.05] tracking-tight text-stone-950 sm:text-6xl">
            A family pool with a long view.
          </h1>
          <p className="mt-7 max-w-3xl text-base leading-8 text-stone-600 sm:text-lg">
            Haley House Holdings is built around a simple principle: capital is strongest when it is shared,
            guided by family values, and paired with disciplined vision. We pursue opportunities where a patient,
            collaborative approach can create durable outcomes.
          </p>
        </section>

        <section className="mt-12 grid gap-x-12 sm:grid-cols-2 lg:gap-x-20">
          {values.map((value, index) => (
            <article key={value} className="border-b border-stone-300 py-6 sm:py-7">
              <p className="font-mono text-[10px] text-amber-900/70">0{index + 1}</p>
              <p className="mt-3 max-w-sm text-base leading-7 text-stone-800">{value}</p>
            </article>
          ))}
        </section>
      </main>
    </>
  );
}
