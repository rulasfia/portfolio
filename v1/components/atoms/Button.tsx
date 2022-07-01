import clsx from 'clsx';
import ArrowRightIcon from './Icon/ArrowRightIcon';

interface Props {
  children: string | JSX.Element;
  onClick?: () => void;
  type?: 'submit' | 'reset' | 'button';
  arrowRight?: boolean;
  tags?: boolean;
}

export default function Button({
  children,
  onClick,
  type = 'button',
  arrowRight = false,
  tags = false,
}: Props) {
  return (
    <button
      onClick={onClick}
      type={type}
      className={clsx(
        'rounded-full bg-transparent font-medium text-primary-800 transition duration-75 ease-in dark:text-white',
        tags
          ? 'bg-primary-300 px-3 py-2 text-sm hover:bg-accent-600 hover:bg-opacity-40 dark:bg-primary-700 dark:hover:bg-accent-500 dark:hover:bg-opacity-40'
          : 'px-6 py-2.5 text-base ring ring-accent-500 ring-offset-0 ring-offset-transparent hover:bg-accent-600 hover:bg-opacity-10 hover:ring-offset-2'
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
