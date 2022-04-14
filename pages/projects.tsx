import LinkTo from '../components/atoms/LinkTo';
import SearchBar from '../components/molecules/SearchBar';
import Project from '../components/organisms/Project';
import { ProjectsMock } from '../utils/constant';

export default function Projects() {
  return (
    <>
      <main className="container mx-auto px-36">
        <section className="border-b border-primary-700 py-8">
          <h2 className="mb-6 text-3xl font-bold">Projects</h2>

          <div className="my-6">
            <SearchBar id="projects-search" />
          </div>

          <div className="mb-6 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {ProjectsMock.map((item) => (
              <LinkTo
                to={`/blog/${item.id}`}
                key={`/blog/${item.id}`}
                className=""
              >
                <Project {...item} />
              </LinkTo>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
