import dayjs from 'dayjs';
import { client } from '../../utils/contentfulClient';
import ContentBody from '../../components/organisms/ContentBody';

import type { GetStaticProps } from 'next';
import type { ParsedUrlQuery } from 'querystring';
import type {
  TypeProjects,
  TypeProjectsFields,
} from '../../types/responseTypes';
import { getWordCount } from '../../utils/formatString';

interface Props {
  project: TypeProjects;
}

interface IParams extends ParsedUrlQuery {
  slug: string;
}

export async function getStaticPaths() {
  const { items: projects } = await client.getEntries<TypeProjectsFields>({
    content_type: 'projects',
  });

  const paths = projects.map((item) => ({
    params: { slug: item.fields.slug },
  }));

  console.log({ totalprojects: paths.length });
  return {
    paths: paths,
    fallback: false,
  };
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { slug } = context.params as IParams;

  const { items: projects } = await client.getEntries<TypeProjectsFields>({
    content_type: 'projects',
    limit: 1,
    'fields.slug': slug,
  });

  return {
    props: { project: projects[0] },
  };
};

export default function ProjectDetails({ project }: Props) {
  return (
    <>
      <main className="container mx-auto px-8 md:px-24 lg:px-36">
        <section className="border-b border-primary-300 py-8 dark:border-primary-700">
          <article className="prose prose-neutral mx-auto dark:prose-invert">
            <p className="mb-1 text-sm font-semibold uppercase text-accent-600">
              {dayjs(project.fields.startDate).format('MMMM YYYY')}
            </p>
            <h1 className="mb-3 text-3xl font-bold">{project.fields.title}</h1>
            <div className="mb-6 flex flex-row items-center justify-between">
              <span>Khoirul Asfian</span>
              <span>{getWordCount(project.fields.body)} word</span>
            </div>

            <ContentBody
              isProject
              title={project.fields.title}
              body={project.fields.body}
              imgUrl={project.fields.heroImage.fields.file.url}
              demoUrl={project.fields.demoUrl}
              repoUrl={project.fields.repoUrl}
              tags={project.fields.tags}
            />
          </article>
        </section>
      </main>
    </>
  );
}
