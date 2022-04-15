import Image from 'next/image';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import placeholderImg from '../../public/img/post-placeholder.png';
import { rgbDataURL } from '../../utils/formatImage';

interface Props {
  body: string;
}

export default function MarkdownComponents({ body }: Props) {
  return (
    <ReactMarkdown
      components={{
        p: ({ node, children }) => {
          // @ts-ignore
          if (
            'tagName' in node.children[0] &&
            node.children[0].tagName === 'img'
          ) {
            const image: any = node.children[0];
            return (
              <figure>
                <Image
                  src={
                    image.properties.src
                      ? `https:${image.properties.src}?fm=jpg&fl=progressive&w=1280&h=720`
                      : placeholderImg
                  }
                  alt={image.properties.alt}
                  className="rounded-md"
                  width={640}
                  height={360}
                  objectFit="cover"
                  layout="responsive"
                  placeholder="blur"
                  blurDataURL={
                    image.properties.src ? rgbDataURL(220, 220, 220) : ''
                  }
                />
                <p className="mt-2 text-center text-sm text-primary-500 dark:text-primary-300">
                  {image.properties.alt}
                </p>
              </figure>
            );
          }
          // Return default child if it's not an image
          return <p>{children}</p>;
        },
      }}
      remarkPlugins={[remarkGfm]}
    >
      {body}
    </ReactMarkdown>
  );
}
