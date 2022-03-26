import { useRouter } from 'next/router';
import clsx from 'clsx';
import Link from '../../atoms/Link';

interface Props {
  to: string;
  children: string | JSX.Element;
}

export default function NavLink({ to, children }: Props) {
  const { pathname } = useRouter();

  return (
    <Link to={to} className={clsx(pathname === to && 'text-accent-500')}>
      {children}
    </Link>
  );
}
