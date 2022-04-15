import Image from 'next/image';
import { useDarkMode } from '../../utils/darkStore';
import { rgbDataURL } from '../../utils/formatImage';

const FavStackIcons = [
  '/svg/react',
  '/svg/next',
  '/svg/tailwind',
  '/svg/rq',
  '/svg/ts',
  '/svg/nodejs',
  '/svg/postgresql',
  '/svg/prisma',
];

export default function TechStackIcons() {
  const { enabled } = useDarkMode();

  return (
    <div className="grid grid-cols-4 gap-6">
      {FavStackIcons.map((item) => (
        <Image
          key={item}
          src={enabled ? item + '-li.svg' : item + '-da.svg'}
          className="opacity-75 transition duration-75 hover:opacity-100"
          alt="react-icon"
          height={64}
          width={64}
          objectFit="contain"
          layout="fixed"
          placeholder="blur"
          blurDataURL={rgbDataURL(220, 220, 220)}
        />
      ))}
    </div>
  );
}
