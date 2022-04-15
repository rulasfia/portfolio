import Image from 'next/image';
import { useRouter } from 'next/router';
import dumbImg from '../../public/img/post-placeholder.png';
import { rgbDataURL } from '../../utils/formatImage';

interface Props {
  title: string;
  description: string;
  imgUrl?: string | null;
  startDate: string;
  endDate?: string;
}

export default function Project({
  title,
  description,
  imgUrl,
  startDate,
  endDate,
}: Props) {
  const { pathname } = useRouter();

  return (
    <div className="h-full rounded-lg outline outline-1 outline-offset-0 outline-primary-300 ring-2 ring-transparent ring-offset-1 ring-offset-transparent transition duration-75 hover:cursor-pointer hover:outline-accent-500 hover:ring-accent-500 dark:outline-primary-600">
      <Image
        src={`https:${imgUrl}?fm=jpg&fl=progressive&w=540&h=360` || dumbImg}
        alt={title}
        height={pathname === '/projects' ? 120 : 90}
        width={180}
        className="rounded-t-lg"
        objectFit="cover"
        layout="responsive"
        placeholder="blur"
        blurDataURL={imgUrl ? rgbDataURL(220, 220, 220) : ''}
      />
      <div className="m-2 bg-transparent p-4 text-primary-800 dark:text-primary-100">
        <p className="mb-1 text-sm font-semibold uppercase text-accent-600">
          {new Date(startDate).toLocaleDateString() +
            ' - ' +
            (endDate ? new Date(endDate).toLocaleDateString() : 'In Progress')}
        </p>
        <h1 className=" mb-2 text-xl font-bold">{title}</h1>
        <p className="text-sm text-primary-700 line-clamp-3 dark:text-primary-300">
          {description}
        </p>
      </div>
    </div>
  );
}
