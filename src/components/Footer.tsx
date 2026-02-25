import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-dark/10 px-6 py-10 mt-16">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-dark/50 text-sm">
        <p>
          built with ♡ by{" "}
          <Link href="/" className="text-pink hover:text-mauve transition-colors font-medium">
            jada
          </Link>
        </p>
        <div className="flex gap-6">
          <a
            href="https://github.com/jadaross"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-dark transition-colors"
          >
            github
          </a>
          <Link href="/blog" className="hover:text-dark transition-colors">
            blog
          </Link>
          <Link href="/projects" className="hover:text-dark transition-colors">
            projects
          </Link>
        </div>
      </div>
    </footer>
  );
}
