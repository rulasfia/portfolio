import { useRouter } from 'next/router';
import clsx from 'clsx';
import LinkTo from '../../atoms/LinkTo';

interface Props {
  to: string;
  children: string | JSX.Element;
}

export default function NavLink({ to, children }: Props) {
  const { pathname } = useRouter();

  return (
    <LinkTo
      to={to}
      className={clsx(
        pathname === to
          ? 'text-accent-500 hover:text-accent-400'
          : 'hover:text-white',
        'transition duration-75'
      )}
    >
      {children}
    </LinkTo>
  );
}
