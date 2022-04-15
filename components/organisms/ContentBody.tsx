import Image from 'next/image';
import placeholderImg from '../../public/img/post-placeholder.png';
import { rgbDataURL } from '../../utils/formatImage';
import Button from '../atoms/Button';
import MarkdownComponents from '../molecules/MarkdownComponent';
import ProjectLink from '../molecules/ProjectLink';
import Tags from '../molecules/Tags';

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
          `https:${imgUrl}?fm=jpg&fl=progressive&w=1280&h=720` || placeholderImg
        }
        alt={title}
        className="rounded-md"
        width={640}
        height={360}
        objectFit="cover"
        layout="responsive"
        placeholder="blur"
        blurDataURL={imgUrl ? rgbDataURL(220, 220, 220) : ''}
      />

      {tags ? <Tags tags={tags} /> : <Button tags>Not Available</Button>}
      {isProject && <ProjectLink demoUrl={demoUrl} repoUrl={repoUrl} />}

      <MarkdownComponents body={body} />
    </>
  );
}
