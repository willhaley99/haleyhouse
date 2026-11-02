import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="mx-auto mt-auto flex w-full max-w-7xl flex-col gap-3 border-t border-stone-200/80 px-5 py-7 text-xs text-stone-500 sm:flex-row sm:items-center sm:justify-between sm:px-8">
      <p>© Haley House Holdings</p>
      <div className="flex items-center gap-5">
        <p>Shared capital. Long-term conviction.</p>
        <Link href="/privacy" className="transition hover:text-stone-900">
          Privacy
        </Link>
      </div>
    </footer>
  );
}
