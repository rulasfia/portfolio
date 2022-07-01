import clsx from 'clsx';
import { useState } from 'react';
import MenuIcon from '../atoms/Icon/MenuIcon';
import LinkTo from '../atoms/LinkTo';
import NavLink from '../molecules/Header/NavLink';
import ThemeIcon from '../molecules/ThemeIcon';

const HeaderLinks = [
  { label: 'Home', slug: '/' },
  { label: 'Blog', slug: '/blog' },
  { label: 'Projects', slug: '/projects' },
  { label: 'About', slug: '/about' },
];

export default function Header() {
  const [hidden, setHidden] = useState(true);

  return (
    <>
      <header className="container sticky top-0 z-10 mx-auto flex h-24 items-center border-b border-primary-300 bg-primary-100 bg-opacity-70 px-8 backdrop-blur-lg backdrop-filter firefox:bg-opacity-90 dark:border-primary-700 dark:bg-primary-900 dark:bg-opacity-70 md:px-24 lg:px-36">
        <div className="flex w-full flex-row items-center justify-between">
          <LinkTo
            to="/"
            className="cursor-pointer hover:text-black dark:hover:text-white"
          >
            <h2 className="text-xl font-bold">rulasfia</h2>
          </LinkTo>

          {/* menu icon for mobile */}
          <MenuIcon
            onClick={() => setHidden((currentState) => !currentState)}
            className="block h-8 w-8 md:hidden"
          />

          {/* desktop menu navigation */}
          <section className="hidden flex-row items-center gap-6 font-medium md:flex">
            {HeaderLinks.map(({ label, slug }) => (
              <NavLink to={slug} key={slug}>
                {label}
              </NavLink>
            ))}

            <ThemeIcon />
          </section>
        </div>
      </header>

      {/* mobile menu navigation */}
      <section
        className={clsx(
          hidden ? 'hidden' : 'flex',
          'sticky top-24 z-10 w-full flex-col items-center gap-6 border-b border-t-2 border-primary-300 bg-primary-100 bg-opacity-70 pb-6 pt-4 font-medium backdrop-blur-lg backdrop-filter firefox:bg-opacity-90 dark:border-primary-600 dark:bg-primary-800 dark:bg-opacity-70 md:hidden md:flex-row'
        )}
      >
        {HeaderLinks.map(({ label, slug }) => (
          <NavLink to={slug} key={slug}>
            <span onClick={() => setHidden(true)}>{label}</span>
          </NavLink>
        ))}
        <ThemeIcon />
      </section>
    </>
  );
}
