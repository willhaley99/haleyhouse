import type { Metadata } from "next";
import SiteNavigation from "@/app/components/site-navigation";
import SiteFooter from "@/app/components/site-footer";

export const metadata: Metadata = {
  title: "Privacy policy",
  description: "How Haley House Holdings handles information used to provide its website and member portal.",
};

const sections = [
  {
    title: "Information we collect",
    paragraphs: [
      "We collect information you provide when using the member sign-in or contacting us. Google sign-in may provide your name, email address, and profile image. The site also uses essential cookies to maintain your sign-in session.",
    ],
  },
  {
    title: "How we use and share information",
    paragraphs: [
      "We use information to operate the website, manage member access, and respond to inquiries. Service providers that support sign-in and website hosting may process information as needed to provide their services. We do not sell personal information.",
    ],
  },
  {
    title: "Your choices and this policy",
    paragraphs: [
      "You can sign out to end your member session and manage Google account access in your Google settings. Contact us with privacy questions or requests. We may update this policy as our practices change.",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteNavigation />
      <main className="mx-auto w-full max-w-4xl flex-1 px-6 py-16 sm:py-20">
        <article className="border-b border-stone-300 pb-12 sm:pb-16">
          <p className="flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.22em] text-amber-900">
            <span aria-hidden="true" className="h-px w-8 bg-amber-800/50" />Haley House Holdings
          </p>
          <h1 className="mt-5 font-serif text-5xl leading-[0.98] tracking-[-0.04em] text-stone-950 md:text-7xl">
            Privacy policy
          </h1>
          <p className="mt-4 text-sm text-stone-500">Last updated November 1, 2026</p>
          <p className="mt-8 text-lg leading-8 text-stone-600">
            This policy explains how Haley House Holdings handles information when you visit
            this website or use the member portal.
          </p>

          <div className="mt-10 space-y-9">
            {sections.map((section) => (
              <section key={section.title}>
                <h2 className="text-xl font-semibold text-stone-900">{section.title}</h2>
                <div className="mt-3 space-y-3 text-base leading-7 text-stone-600">
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </section>
            ))}

          </div>

        </article>
      </main>
      <SiteFooter />
    </div>
  );
}
