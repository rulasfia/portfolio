import NavLink from '../molecules/Header/NavLink';
import ThemeIcon from '../molecules/ThemeIcon';

const HeaderLinks = [
  { label: 'Home', slug: '/' },
  { label: 'Blog', slug: '/blog' },
  { label: 'Projects', slug: '/projects' },
  { label: 'About', slug: '/about' },
];

export default function Header() {
  return (
    <header className="container sticky top-0 z-10 mx-auto flex flex-row items-center justify-between px-36 py-8">
      <h1 className="text-2xl font-bold">Khoirul Asfian</h1>

      <section className="flex flex-row items-center gap-4 font-medium">
        {HeaderLinks.map(({ label, slug }) => (
          <NavLink to={slug} key={slug}>
            {label}
          </NavLink>
        ))}

        <ThemeIcon />
      </section>
    </header>
  );
}
