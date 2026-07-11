import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 dark:bg-slate-900/50 py-12 mt-auto border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col items-center md:items-start">
            <Link href="/" className="text-xl font-bold text-[var(--color-brand)] dark:text-[var(--color-brand-dark)]">
              AnushriGolwalkar
            </Link>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-2 text-center md:text-left">
              &copy; {currentYear} Developer Portfolio. Built with precision. All rights reserved.
            </p>
          </div>
          
          <div className="flex space-x-6">
            <a href="https://www.linkedin.com/in/anushri-golwalkar/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-[var(--color-brand)] dark:hover:text-[var(--color-brand-dark)] text-sm font-medium transition-colors">
              LinkedIn
            </a>
            <a href="mailto:anushrigolwalkar27@gmail.com" className="text-gray-500 hover:text-[var(--color-brand)] dark:hover:text-[var(--color-brand-dark)] text-sm font-medium transition-colors">
              Email
            </a>
            <a href="tel:+91 9424600374" className="text-gray-500 hover:text-[var(--color-brand)] dark:hover:text-[var(--color-brand-dark)] text-sm font-medium transition-colors">
              9424600374
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
