'use client';
import { usePathname } from 'next/navigation';
import Navigation from './navigation';

export default function LayoutWrapper({ children }) {
  const pathname = usePathname();
  const isProjectsPage = pathname === '/projects';
  const isOpenSourcePage = pathname === '/open-source';

  if (isProjectsPage || isOpenSourcePage) {
    return (
      <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-16 lg:py-0">
        {children}
      </div>
    );
  }

  return (
    <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-16 lg:py-0">
      <div className="lg:flex lg:justify-between lg:gap-4 flex flex-col lg:flex-row text-white">
        <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[48%] lg:flex-col lg:justify-between lg:py-24">
          <Navigation />
        </header>
        <main id="content" className="pt-24 lg:py-24 scroll-smooth lg:w-[52%] flex flex-col items-center">
          {children}
        </main>
      </div>
    </div>
  );
}

