import { NextSeo } from 'next-seo';
import { client } from '../utils/contentfulClient';
import LinkTo from '../components/atoms/LinkTo';
import Button from '../components/atoms/Button';
import SocialLinks from '../components/molecules/SocialLinks';
import FeaturedPosts from '../components/templates/FeaturedPosts';
import FeaturedProjects from '../components/templates/FeaturedProjects';

import type { GetStaticProps } from 'next';
import type { TypeBlogPost, TypeProjects } from '../types/responseTypes';

interface Props {
  blogs: TypeBlogPost[];
  projects: TypeProjects[];
}

export const getStaticProps: GetStaticProps = async () => {
  const { items: blogs } = await client.getEntries<TypeBlogPost>({
    content_type: 'blogPost',
    limit: 3,
  });

  const { items: projects } = await client.getEntries<TypeProjects>({
    content_type: 'projects',
    limit: 3,
  });

  return {
    props: { blogs, projects },
  };
};

export default function Home({ blogs, projects }: Props) {
  return (
    <>
      <NextSeo
        title="Khoirul Asfian"
        description="Khoirul personal website."
        openGraph={{
          url: 'https://www.rulasfia.tech',
          title: 'Khoirul Asfian',
          description: 'Khoirul personal website',
          site_name: 'Khoirul Asfian Website',
        }}
      />

      <main className="container mx-auto px-8 md:px-24 lg:px-36">
        <section className="flex min-h-[50vh] w-full flex-col items-center justify-center border-b border-primary-300 py-12 dark:border-primary-700 md:min-h-[80vh] md:flex-row md:justify-between">
          <div className="w-full md:w-3/5">
            {/* titile & subtitle */}
            <h1 className="mb-4 text-5xl font-bold tracking-wide">
              Hi!, I am{' '}
              <span className="text-accent-600 dark:text-accent-500">
                Khoirul Asfian
              </span>
            </h1>
            <h3 className="mb-6 text-xl font-normal">
              I&apos;m a fullstack web developer working on Node.js & React
              ecosystem.
            </h3>

            {/* link to about page */}
            <div className="mb-6 flex flex-row">
              <LinkTo to="/about" className="">
                <Button arrowRight>Learn More About me</Button>
              </LinkTo>
            </div>

            {/* social link */}
            <SocialLinks />
          </div>
        </section>

        <FeaturedPosts data={blogs} />

        <FeaturedProjects data={projects} />
      </main>
    </>
  );
}
