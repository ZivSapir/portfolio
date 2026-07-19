import Link from "next/link";
import { site } from "@/content/site";

export function SiteHeader() {
  return (
    <header className="absolute inset-x-0 top-0 z-20">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-5 md:px-8">
        <Link
          href="/"
          className="font-display text-lg tracking-tight text-foreground transition-colors hover:text-accent"
        >
          {site.name}
        </Link>
        <nav className="flex items-center gap-6 text-sm text-muted">
          <a
            href="/#projects"
            className="transition-colors hover:text-foreground"
          >
            Projects
          </a>
          <a
            href="/#about"
            className="transition-colors hover:text-foreground"
          >
            About
          </a>
          <a
            href="/#contact"
            className="transition-colors hover:text-foreground"
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
