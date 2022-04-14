import Button from '../atoms/Button';
import LinkTo from '../atoms/LinkTo';
import Project from '../organisms/Project';
import type { TypeProjects } from '../../types/responseTypes';

interface Props {
  data: TypeProjects[];
}

export default function FeaturedProjects({ data }: Props) {
  return (
    <section className="border-b border-primary-300 py-16 dark:border-primary-700">
      <h2 className="mb-6 text-3xl font-bold">Featured Projects</h2>

      <div className="mb-6 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {data.slice(0, 3).map((item) => (
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

      <LinkTo to="/projects" className="">
        <Button arrowRight>View all projects</Button>
      </LinkTo>
    </section>
  );
}
