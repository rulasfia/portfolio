import { NextSeo } from 'next-seo';
import { client } from '../utils/contentfulClient';
import LinkTo from '../components/atoms/LinkTo';
import SearchBar from '../components/molecules/SearchBar';
import Project from '../components/organisms/Project';

import type { GetStaticProps } from 'next';
import type { TypeProjects, TypeProjectsFields } from '../types/responseTypes';

interface Props {
  projects: TypeProjects[];
}

export const getStaticProps: GetStaticProps = async () => {
  const { items: projects } = await client.getEntries<TypeProjectsFields>({
    content_type: 'projects',
  });

  return {
    props: { projects },
  };
};

export default function Projects({ projects }: Props) {
  return (
    <>
      <NextSeo
        title="Projects - rulasfia"
        description="List of project by Khoirul Asfian."
        openGraph={{
          url: 'https://www.rulasfia.tech',
          title: 'Projects - rulasfia',
          description: 'List of project by Khoirul Asfian.',
          site_name: 'Khoirul Asfian Website',
        }}
      />

      <main className="container mx-auto px-8 md:px-24 lg:px-36">
        <section className="border-b border-primary-300 py-8 dark:border-primary-700">
          <h2 className="mb-6 text-3xl font-bold">Projects</h2>

          <div className="my-6">
            <SearchBar id="projects-search" placeholder="search projects" />
          </div>

          <div className="mb-6 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((item) => (
              <LinkTo
                to={`/projects/${item.fields.slug}`}
                key={`/projects/${item.fields.slug}`}
                className=""
              >
                <Project
                  title={item.fields.title}
                  description={item.fields.description}
                  imgUrl={item.fields.heroImage.fields.file.url}
                  startDate={item.fields.startDate}
                  endDate={item.fields.endDate}
                />
              </LinkTo>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
