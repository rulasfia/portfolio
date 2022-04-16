import { NextSeo } from 'next-seo';
import { client } from '../utils/contentfulClient';
import LinkTo from '../components/atoms/LinkTo';
import SearchBar from '../components/molecules/SearchBar';
import Post from '../components/organisms/Post';

import type { GetStaticProps } from 'next';
import type { TypeBlogPost, TypeBlogPostFields } from '../types/responseTypes';

interface Props {
  blogs: TypeBlogPost[];
}

export const getStaticProps: GetStaticProps = async () => {
  const { items: blogs } = await client.getEntries<TypeBlogPostFields>({
    content_type: 'blogPost',
  });

  return {
    props: { blogs },
  };
};

export default function Blog({ blogs }: Props) {
  return (
    <>
      <NextSeo
        title="Blog - rulasfia"
        description="List of blog post by Khoirul Asfian."
        openGraph={{
          url: 'https://www.rulasfia.tech',
          title: 'Blog - rulasfia',
          description: 'List of blog post by Khoirul Asfian.',
          site_name: 'Khoirul Asfian Website',
        }}
      />

      <main className="container mx-auto px-8 md:px-24 lg:px-36">
        <section className="border-b border-primary-300 py-8 dark:border-primary-700">
          <h2 className="mb-6 text-3xl font-bold">Blog Posts</h2>

          <div className="my-6">
            <SearchBar id="blog-search" placeholder="search articles" />
          </div>

          <div className="mb-6 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {blogs.map((item) => (
              <LinkTo
                to={`/blog/${item.fields.slug}`}
                key={`/blog/${item.fields.slug}`}
                className=""
              >
                <Post
                  title={item.fields.title}
                  description={item.fields.description}
                  publishedDate={item.fields.publishDate}
                  imgUrl={item.fields.heroImage.fields.file.url}
                />
              </LinkTo>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
