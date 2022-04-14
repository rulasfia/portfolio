import Image from 'next/image';

const FavStackIcons = [
  '/svg/react-li.svg',
  '/svg/next-li.svg',
  '/svg/tailwind-li.svg',
  '/svg/rq-li.svg',
  '/svg/ts-li.svg',
  '/svg/nodejs-li.svg',
  '/svg/postgresql-li.svg',
  '/svg/prisma-li.svg',
];

export default function TechStackIcons() {
  return (
    <div className="grid grid-cols-4 gap-6">
      {FavStackIcons.map((item) => (
        <Image
          key={item}
          src={item}
          className="cursor-pointer opacity-75 transition duration-75 hover:opacity-100"
          alt="react-icon"
          height={64}
          width={64}
          objectFit="contain"
          layout="fixed"
        />
      ))}
    </div>
  );
}
