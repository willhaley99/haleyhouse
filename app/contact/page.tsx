import SiteNavigation from "@/app/components/site-navigation";
import ContactForm from "./contact-form";
import SiteFooter from "@/app/components/site-footer";

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteNavigation currentPath="/contact" />
      <main className="mx-auto w-full max-w-6xl flex-1 px-6 py-12 sm:py-16">
        <section className="mx-auto mb-10 max-w-4xl text-center sm:mb-14">
          <p className="flex items-center justify-center gap-3 text-[10px] font-semibold uppercase tracking-[0.22em] text-amber-900">
            <span aria-hidden="true" className="h-px w-8 bg-amber-800/50" />Contact<span aria-hidden="true" className="h-px w-8 bg-amber-800/50" />
          </p>
          <h1 className="mt-5 font-serif text-5xl leading-[0.98] tracking-[-0.04em] text-stone-950 sm:text-7xl">
            Start a conversation.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-stone-600 sm:text-lg">
            For thoughtful conversations about shared capital, opportunities, and the long view.
          </p>
        </section>
        <section aria-label="Send an inquiry" className="mx-auto max-w-4xl rounded-2xl border border-stone-200 bg-[#fcfdfd] p-6 sm:p-9">
          <ContactForm />
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
