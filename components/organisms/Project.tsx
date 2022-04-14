import Image from 'next/image';
import { useRouter } from 'next/router';
import placeholderImg from '../../public/img/post-placeholder.png';
import { rgbDataURL } from '../../utils/formatImage';

interface Props {
  title: string;
  description: string;
  imgUrl?: string | null;
  workingDate: string;
}

export default function Project({
  title,
  description,
  imgUrl,
  workingDate,
}: Props) {
  const { pathname } = useRouter();

  return (
    <div className="rounded-lg outline outline-1 outline-offset-0 outline-primary-300 ring-2 ring-transparent ring-offset-1 ring-offset-transparent transition duration-75 hover:cursor-pointer hover:outline-accent-500 hover:ring-accent-500">
      <Image
        src={imgUrl || placeholderImg}
        alt="post-header-image"
        height={pathname === '/projects' ? 120 : 90}
        width={180}
        className="rounded-t-lg"
        objectFit="cover"
        layout="responsive"
        placeholder="blur"
        blurDataURL={imgUrl ? rgbDataURL(220, 220, 220) : ''}
      />
      <div className="m-2 bg-primary-800 p-4 text-primary-100">
        <p className="mb-1 text-sm font-semibold uppercase text-accent-600">
          {workingDate}
        </p>
        <h1 className=" mb-2 text-xl font-bold">{title}</h1>
        <p className="text-sm text-primary-300">{description}</p>
      </div>
    </div>
  );
}
