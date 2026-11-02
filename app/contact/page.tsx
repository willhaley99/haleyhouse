import SiteNavigation from "@/app/components/site-navigation";
import ContactForm from "./contact-form";

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
          <ContactForm />
        </section>
      </main>
    </>
  );
}
