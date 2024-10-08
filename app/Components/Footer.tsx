export default function Footer() {
  return (
    <footer className="mb-10 px-4 py-10 text-center text-light-Accent md:leading-9 leading-8 dark:text-dark-Accent">
      <small className="mb-2 block text-sm">
        &copy; 2018 Varinder. All rights reserved.
      </small>
      <p className="text-xs">
        <span className="font-semibold">About this website:</span> built with
        React & Next.js (App Router & Server Actions), TypeScript, Tailwind CSS,
        Framer Motion, Vercel hosting.
      </p>
    </footer>
  );
}
