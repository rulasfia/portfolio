import Image from 'next/image';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import placeholderImg from '../../public/img/post-placeholder.png';
import { rgbDataURL } from '../../utils/formatImage';
import { formatSlug } from '../../utils/formatString';
import Button from '../atoms/Button';
import LinkTo from '../atoms/LinkTo';

interface Props {
  imgUrl?: string;
  title: string;
  body: string;
  isProject?: boolean;
  repoUrl?: string;
  demoUrl?: string;
  tags?: string[];
}

export default function ContentBody({
  body,
  title,
  imgUrl,
  isProject = false,
  repoUrl,
  demoUrl,
  tags,
}: Props) {
  return (
    <>
      <div className="mb-6 border-b border-primary-300 dark:border-primary-700" />

      <Image
        src={
          `https:${imgUrl}?fm=jpg&fl=progressive&w=640&h=360` || placeholderImg
        }
        alt={title}
        className="rounded-xl"
        width={320}
        height={180}
        style={{ borderRadius: '12px' }}
        objectFit="cover"
        layout="responsive"
        placeholder="blur"
        blurDataURL={imgUrl ? rgbDataURL(220, 220, 220) : ''}
      />
      {tags ? (
        <div className="mt-4 flex flex-row gap-4">
          {tags.map((item) => (
            <LinkTo to={formatSlug(item)} key={item} className="">
              <Button tags>{item}</Button>
            </LinkTo>
          ))}
        </div>
      ) : (
        <Button tags>Not Available</Button>
      )}

      {isProject && (
        <ul className="mt-4">
          <li>
            Project Repo:{' '}
            {repoUrl ? (
              <LinkTo to={repoUrl} blank className="">
                Click here
              </LinkTo>
            ) : (
              'Not Available'
            )}
          </li>
          <li>
            Project Demo:{' '}
            {demoUrl ? (
              <LinkTo to={demoUrl} blank className="">
                Click here
              </LinkTo>
            ) : (
              'Not Available'
            )}
          </li>
        </ul>
      )}
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{body}</ReactMarkdown>
    </>
  );
}
