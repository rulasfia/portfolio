import LinkTo from '../components/atoms/LinkTo';
import Button from '../components/atoms/Button';
import SocialLinks from '../components/molecules/SocialLinks';
import Image from 'next/image';
import Post from '../components/organisms/Post';
import Project from '../components/organisms/Project';
import { BlogMock, ProjectsMock } from '../utils/constant';

export default function Home() {
  return (
    <>
      <main className="container mx-auto px-36">
        <section className="flex min-h-[80vh] w-full flex-row items-center justify-between border-b border-primary-700 py-12">
          <div className="w-3/5">
            {/* titile & subtitle */}
            <h1 className="mb-4 text-5xl font-bold tracking-wide">
              Hi!, I am Khoirul Asfian
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

        <section className="border-b border-primary-700 py-16">
          <h2 className="mb-6 text-3xl font-bold">Featured Posts</h2>

          <div className="mb-6 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {BlogMock.slice(0, 3).map((item) => (
              <LinkTo
                to={`/blog/${item.id}`}
                key={`/blog/${item.id}`}
                className=""
              >
                <Post {...item} />
              </LinkTo>
            ))}
          </div>

          <LinkTo to="/blog" className="">
            <Button arrowRight>Read all posts</Button>
          </LinkTo>
        </section>

        <section className="border-b border-primary-700 py-16">
          <h2 className="mb-6 text-3xl font-bold">Featured Projects</h2>

          <div className="mb-6 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {ProjectsMock.slice(0, 3).map((item) => (
              <LinkTo
                to={`/projects/${item.id}`}
                key={`/projects/${item.id}`}
                className=""
              >
                <Project {...item} />
              </LinkTo>
            ))}
          </div>

          <LinkTo to="/projects" className="">
            <Button arrowRight>View all projects</Button>
          </LinkTo>
        </section>

        <br />
        <br />
      </main>
    </>
  );
}
