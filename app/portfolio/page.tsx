import Link from "next/link";

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
    <main className="mx-auto max-w-5xl px-6 py-16">
      <nav className="mb-10 flex items-center justify-between">
        <Link href="/" className="text-lg font-semibold tracking-tight text-stone-900">
          Haley House
        </Link>
        <div className="flex gap-5 text-sm font-medium text-stone-600">
          <Link href="/about">About</Link>
          <Link href="/dashboard">Dashboard</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </nav>

      <section className="rounded-[2rem] border border-stone-200 bg-white p-8 shadow-sm md:p-10">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-amber-800">Portfolio focus</p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-stone-950 md:text-5xl">
          A disciplined mix across growth and stewardship.
        </h1>
      </section>

      <section className="mt-10 grid gap-6 md:grid-cols-3">
        {verticals.map((vertical) => (
          <article key={vertical.title} className="rounded-3xl border border-stone-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-stone-900">{vertical.title}</h2>
            <p className="mt-4 text-base leading-7 text-stone-600">{vertical.text}</p>
          </article>
        ))}
      </section>
    </main>
  );
}
