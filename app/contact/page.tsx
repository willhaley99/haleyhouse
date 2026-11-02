import SiteNavigation from "@/app/components/site-navigation";

export default function ContactPage() {
  return (
    <>
      <SiteNavigation />
      <main className="mx-auto max-w-4xl px-6 py-16">

      <section className="rounded-[2rem] border border-stone-200 bg-white p-8 shadow-sm md:p-10">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-amber-800">Contact</p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-stone-950 md:text-5xl">
          Start a conversation.
        </h1>

        <form className="mt-8 grid gap-5">
          <div className="grid gap-5 md:grid-cols-2">
            <label className="grid gap-2 text-sm font-medium text-stone-700">
              Name
              <input className="rounded-xl border border-stone-300 bg-stone-50 px-4 py-3 outline-none focus:border-stone-500" placeholder="Your name" />
            </label>
            <label className="grid gap-2 text-sm font-medium text-stone-700">
              Email
              <input type="email" className="rounded-xl border border-stone-300 bg-stone-50 px-4 py-3 outline-none focus:border-stone-500" placeholder="you@example.com" />
            </label>
          </div>
          <label className="grid gap-2 text-sm font-medium text-stone-700">
            Inquiry
            <textarea rows={6} className="rounded-xl border border-stone-300 bg-stone-50 px-4 py-3 outline-none focus:border-stone-500" placeholder="Tell us about the opportunity or partnership you have in mind." />
          </label>
          <button type="submit" className="w-fit rounded-full bg-amber-700 px-6 py-3 text-sm font-semibold text-white hover:bg-amber-800">
            Send inquiry
          </button>
        </form>
      </section>
      </main>
    </>
  );
}
