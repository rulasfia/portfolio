import Image from 'next/image';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { client } from '../../utils/contentfulClient';
import placeholderImg from '../../public/img/post-placeholder.png';
import { rgbDataURL } from '../../utils/formatImage';

import type { GetStaticProps } from 'next';
import type { ParsedUrlQuery } from 'querystring';
import type {
  TypeBlogPost,
  TypeBlogPostFields,
} from '../../types/responseTypes';

interface Props {
  blog: TypeBlogPost;
}

interface IParams extends ParsedUrlQuery {
  slug: string;
}

export async function getStaticPaths() {
  const { items: blogs } = await client.getEntries<TypeBlogPostFields>({
    content_type: 'blogPost',
  });

  const paths = blogs.map((item) => ({ params: { slug: item.fields.slug } }));

  console.log({ totalpaths: paths.length });
  return {
    paths: paths,
    fallback: false,
  };
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { slug } = context.params as IParams;

  const { items: blogs } = await client.getEntries<TypeBlogPostFields>({
    content_type: 'blogPost',
    limit: 1,
    'fields.slug': slug,
  });

  return {
    props: { blog: blogs[0] },
  };
};

export default function BlogPostDetails({ blog }: Props) {
  return (
    <>
      <main className="container mx-auto px-8 md:px-24 lg:px-36">
        <section className="border-b border-primary-300 py-8 dark:border-primary-700">
          <article className="prose prose-neutral mx-auto dark:prose-invert">
            <p className="mb-1 text-sm font-semibold uppercase text-accent-600">
              {new Date(blog.fields.publishDate).toLocaleDateString()}
            </p>
            <h1 className="mb-3 text-3xl font-bold">{blog.fields.title}</h1>
            <div className="mb-6 flex flex-row items-center justify-between">
              <span>Khoirul Asfian</span>
              <span>1240 word</span>
            </div>

            <div className="mb-6 border-b border-primary-300 dark:border-primary-700" />

            <Image
              src={
                `https:${blog.fields.heroImage.fields.file.url}?fm=jpg&fl=progressive&w=640&h=360` ||
                placeholderImg
              }
              alt="asfian-avatar"
              className="rounded-xl"
              width={320}
              height={180}
              style={{ borderRadius: '12px' }}
              objectFit="cover"
              layout="responsive"
              placeholder="blur"
              blurDataURL={
                blog.fields.heroImage.fields.file.url
                  ? rgbDataURL(220, 220, 220)
                  : ''
              }
            />
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {blog.fields.body}
            </ReactMarkdown>
          </article>
        </section>
      </main>
    </>
  );
}
