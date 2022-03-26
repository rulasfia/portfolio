import NextLink from 'next/link';

interface Props {
  to: string;
  children: string | JSX.Element;
  className?: string;
}

export default function Link({ to, children, className }: Props) {
  return (
    <NextLink href={to}>
      <a className={className}>{children}</a>
    </NextLink>
  );
}
