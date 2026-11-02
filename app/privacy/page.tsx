import type { Metadata } from "next";
import SiteNavigation from "@/app/components/site-navigation";
import SiteFooter from "@/app/components/site-footer";

export const metadata: Metadata = {
  title: "Privacy policy",
  description: "How Haley House Holdings handles information used to provide its website and member portal.",
};

const sections = [
  {
    title: "Information we handle",
    paragraphs: [
      "When you enter an email address on the member sign-in page, we check it against the member access list before starting Google sign-in. The address is used for that check and is not saved to a separate application database.",
      "If you continue with Google, Google provides your name, email address, and profile image. We require Google to verify the email address. Your name and email are used to identify your member account, and your profile image may be shown on your profile page.",
      "The member portal uses essential browser cookies to maintain your sign-in session and protect the authentication flow. The website does not currently include advertising trackers or analytics tools.",
    ],
  },
  {
    title: "How we use information",
    paragraphs: [
      "We use this information to verify member access, authenticate you, display your account profile, and protect the member portal from unauthorized access.",
      "The member access list is maintained in the website's deployment configuration. The application does not currently use a database to store member profiles.",
    ],
  },
  {
    title: "Service providers",
    paragraphs: [
      "Google provides the sign-in service and shares the profile information described above when you authenticate. Vercel hosts the website and processes the technical information needed to deliver and secure it. These providers handle information under their own privacy terms.",
      "We do not sell personal information. We do not use information from the sign-in flow for advertising.",
    ],
  },
  {
    title: "Your choices and requests",
    paragraphs: [
      "You can leave the sign-in flow before completing Google authentication, or sign out of the member portal to end your session. You can also manage Haley House Holdings' access to your Google account in your Google Account settings.",
      "To ask about, correct, or request removal of information associated with member access, contact us at the address below. Removing an address from the member access list prevents future sign-in but does not control records held independently by Google or Vercel.",
    ],
  },
  {
    title: "Changes and contact",
    paragraphs: [
      "We may update this policy when the website or its data practices change. The date at the top of this page indicates when it was last revised.",
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

            <section>
              <h2 className="text-xl font-semibold text-stone-900">Contact us</h2>
              <p className="mt-3 text-base leading-7 text-stone-600">
                For privacy questions or requests, email{" "}
                <a
                  className="font-medium text-amber-900 underline underline-offset-4"
                  href="mailto:willhaley99@gmail.com"
                >
                  willhaley99@gmail.com
                </a>
                .
              </p>
            </section>
          </div>

        </article>
      </main>
      <SiteFooter />
    </div>
  );
}
