import clsx from 'clsx';
import ArrowRightIcon from './Icon/ArrowRightIcon';

interface Props {
  children: string | JSX.Element;
  onClick?: () => void;
  type?: 'submit' | 'reset' | 'button';
  arrowRight?: boolean;
}

export default function Button({
  children,
  onClick,
  type = 'button',
  arrowRight = false,
}: Props) {
  return (
    <button
      onClick={onClick}
      type={type}
      className={clsx(
        'rounded-full bg-transparent px-6 py-2.5 font-medium text-white ring ring-accent-500 ring-offset-0 ring-offset-transparent transition duration-75 ease-in hover:bg-accent-600 hover:bg-opacity-10 hover:ring-offset-2'
      )}
    >
      {!arrowRight ? (
        children
      ) : (
        <span className="flex flex-row items-center gap-2">
          {children}
          <ArrowRightIcon />
        </span>
      )}
    </button>
  );
}
