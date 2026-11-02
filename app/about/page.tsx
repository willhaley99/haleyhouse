import Link from "next/link";

const values = [
  "Shared stewardship over individual gain",
  "Patience in markets and approach to capital",
  "Operational clarity across all opportunities",
  "Relationships grounded in trust and alignment",
];

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-16">
      <nav className="mb-10 flex items-center justify-between">
        <Link href="/" className="text-lg font-semibold tracking-tight text-stone-900">
          Haley House
        </Link>
        <div className="flex gap-5 text-sm font-medium text-stone-600">
          <Link href="/portfolio">Portfolio</Link>
          <Link href="/dashboard">Dashboard</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </nav>

      <section className="rounded-[2rem] border border-stone-200 bg-white p-8 shadow-sm md:p-10">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-amber-800">About us</p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-stone-950 md:text-5xl">
          A family pool with a long view.
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-stone-600">
          Haley House Holdings is built around a simple principle: capital is strongest when it is shared,
          guided by family values, and paired with disciplined vision. We pursue opportunities where a patient,
          collaborative approach can create durable outcomes.
        </p>
      </section>

      <section className="mt-10 grid gap-6 md:grid-cols-2">
        {values.map((value) => (
          <article key={value} className="rounded-3xl border border-stone-200 bg-white p-6 shadow-sm">
            <p className="text-base leading-7 text-stone-700">{value}</p>
          </article>
        ))}
      </section>
    </main>
  );
}
