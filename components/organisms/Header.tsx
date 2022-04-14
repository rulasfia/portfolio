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
      <header className="container sticky top-0 z-10 mx-auto mb-4 flex h-24 items-center border-b border-primary-700 bg-primary-800 bg-opacity-70 px-8 backdrop-blur-lg backdrop-filter firefox:bg-opacity-90 md:px-24 lg:px-36">
        <div className="flex w-full flex-row items-center justify-between">
          <LinkTo to="/" className="cursor-pointer hover:text-white">
            <h2 className="text-xl font-bold">rulasfia</h2>
          </LinkTo>

          <MenuIcon
            onClick={() => setHidden((currentState) => !currentState)}
            className="block h-8 w-8 md:hidden"
          />
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

      <section
        className={clsx(
          hidden ? 'hidden' : 'flex',
          'absolute z-10 h-fit w-full flex-col items-center gap-6 border-b border-primary-600 bg-primary-800 pb-6 pt-4 font-medium duration-300 md:hidden md:flex-row'
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
