'use client';

import { navLinks } from '@/lib/data';
import { useTheme } from 'next-themes';
import React, { useEffect, useState } from 'react';
import { CiDark } from 'react-icons/ci';
import { MdOutlineWbSunny } from 'react-icons/md';
import NavLink from './NavLink';

const Header = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <header className="z-[999] relative">
      <div className="hidden sm:block">
        <nav className="fixed top-6 left-1/2 -translate-x-1/2 h-[3.25rem] w-[38rem] rounded-full border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] dark:bg-gray-950 dark:border-black/40 dark:bg-opacity-75 z-[999]"></nav>

        <div className="fixed top-[1.7rem] left-1/2 -translate-x-1/2 z-[999]">
          <ul className="flex w-[24rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-5">
            {navLinks.map((item) => (
              <NavLink
                key={item.title}
                title={item.title}
                href={item.path}
              />
            ))}

            {mounted && (
              <button
                className="bg-white p-2 rounded-full shadow-sm border border-gray-200 dark:bg-gray-900 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:scale-110 active:scale-105 transition-all ml-4"
                onClick={() =>
                  setTheme(
                    theme === 'light' ? 'dark' : 'light',
                  )
                }
              >
                {theme === 'light' ? (
                  <MdOutlineWbSunny />
                ) : (
                  <CiDark />
                )}
              </button>
            )}
          </ul>
        </div>
      </div>

      <nav className="fixed bottom-5 left-1/2 -translate-x-1/2 w-[90%] max-w-[22rem] h-[4rem] rounded-2xl border border-white/40 bg-white/80 dark:bg-gray-950/75 dark:border-white/10 backdrop-blur-lg shadow-2xl z-[999] sm:hidden flex items-center justify-around px-4">
        {navLinks.map((item) => (
          <a
            key={item.title}
            href={item.path}
            className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-50 p-2 transition flex flex-col items-center gap-1"
          >
            <div className="text-xl">
              {React.createElement(item.icon)}
            </div>
          </a>
        ))}

        {mounted && (
          <button
            className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-50 p-2 transition flex flex-col items-center gap-1"
            onClick={() =>
              setTheme(theme === 'light' ? 'dark' : 'light')
            }
          >
            <div className="text-xl">
              {theme === 'light' ? (
                <MdOutlineWbSunny />
              ) : (
                <CiDark />
              )}
            </div>
          </button>
        )}
      </nav>
    </header>
  );
};

export default Header;
