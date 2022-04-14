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
        pathname === to && 'text-accent-500',
        'transition duration-75 hover:text-white'
      )}
    >
      {children}
    </LinkTo>
  );
}
