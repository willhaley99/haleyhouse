import SiteNavigation from "@/app/components/site-navigation";
import ContactForm from "./contact-form";
import SiteFooter from "@/app/components/site-footer";

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteNavigation currentPath="/contact" />
      <main className="mx-auto grid w-full max-w-6xl flex-1 gap-10 px-6 py-16 sm:py-20 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <section className="max-w-lg">
          <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-amber-900">Contact</p>
          <h1 className="mt-5 font-serif text-4xl leading-[1.05] tracking-tight text-stone-950 sm:text-6xl">
            Start a conversation.
          </h1>
          <p className="mt-6 border-b border-stone-300 pb-8 text-base leading-8 text-stone-600">
            For thoughtful conversations about shared capital, opportunities, and the long view.
          </p>
        </section>
        <section aria-label="Send an inquiry" className="border border-stone-200 bg-[#fcfdfd] p-6 sm:p-9">
          <ContactForm />
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
