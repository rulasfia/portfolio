import dayjs from 'dayjs';
import { client } from '../../utils/contentfulClient';
import ContentBody from '../../components/organisms/ContentBody';

import type { GetStaticProps } from 'next';
import type { ParsedUrlQuery } from 'querystring';
import type {
  TypeBlogPost,
  TypeBlogPostFields,
} from '../../types/responseTypes';
import { getWordCount } from '../../utils/formatString';

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

  console.log({ totalblog: paths.length });
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
          <article className="prose prose-base prose-neutral mx-auto prose-pre:my-2 prose-pre:bg-transparent prose-pre:p-0 dark:prose-invert md:prose-lg md:prose-pre:my-2 md:prose-pre:p-0">
            <p className="mb-1 text-sm font-semibold uppercase text-accent-600">
              {dayjs(blog.fields.publishDate).format('DD MMMM YYYY')}
            </p>
            <h1 className="mb-3 text-3xl font-bold">{blog.fields.title}</h1>
            <div className="mb-6 flex flex-row items-center justify-between">
              <span>Khoirul Asfian</span>
              <span>{getWordCount(blog.fields.body)} word</span>
            </div>

            <ContentBody
              title={blog.fields.title}
              body={blog.fields.body}
              imgUrl={blog.fields.heroImage.fields.file.url}
              tags={blog.fields.tags}
            />
          </article>
        </section>
      </main>
    </>
  );
}
