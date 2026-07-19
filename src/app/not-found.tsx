import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[70vh] max-w-5xl flex-col justify-center px-6 py-24 md:px-8">
      <h1 className="font-display text-4xl tracking-tight">Page not found</h1>
      <p className="mt-3 text-muted">That route doesn’t exist on this portfolio.</p>
      <Link
        href="/"
        className="mt-8 inline-flex w-fit text-accent hover:text-accent-deep"
      >
        ← Back home
      </Link>
    </div>
  );
}
