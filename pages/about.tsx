import Image from 'next/image';
import TechStackIcons from '../components/molecules/TechStackIcons';
import profilePic from '../public/img/asfian-avatar.jpg';

export default function About() {
  return (
    <>
      <main className="container mx-auto min-h-screen px-8 md:px-24 lg:px-36">
        <section className="border-b border-primary-700 py-8">
          <h2 className="mb-6 text-3xl font-bold">About Me</h2>

          <div className="flex flex-col-reverse justify-between gap-6 md:flex-row md:gap-2 lg:gap-0">
            <article className=" prose prose-neutral dark:prose-invert lg:w-3/5">
              <p>
                Hi, I&apos;m Asfian, a fullstack web developer based in Jombang,
                Indonesia. I really passionate about web development world,
                especially in javascript ecosystem.
              </p>
            </article>

            <figure className="flex flex-row items-center rounded-xl outline outline-1 outline-offset-4 outline-primary-700 transition duration-75 hover:outline-primary-300">
              <Image
                src={profilePic}
                alt="asfian-avatar"
                className="rounded-xl"
                width={400}
                height={400}
                style={{ borderRadius: '12px' }}
                placeholder="blur"
                // blurDataURL={rgbDataURL(220, 220, 220)}
              />
            </figure>
          </div>
        </section>

        <section className="grid grid-cols-1 justify-between gap-y-8 gap-x-0 border-b border-primary-700 py-8 pb-12 md:gap-x-4 md:gap-y-4 md:py-8 lg:grid-cols-3">
          <article className="prose prose-neutral col-span-2 dark:prose-invert">
            <h2 className="mb-6 text-3xl font-bold text-white text-opacity-90">
              My Skills
            </h2>
            <ul>
              <li>
                Programming Language : HTML, CSS, Javascript, and Typescript.
              </li>
              <li>
                Frontend Framework & Library : React, Next.js, Tailwind CSS,
                Chakra UI, Redux, Zustand, React Query, etc.
              </li>
              <li>
                Backend Framework & Library : Node.js, Express, PostgreSQL,
                MongoDB, Redis, Firebase, Prisma, etc.
              </li>
            </ul>
          </article>

          <div className="col-span-1">
            <h2 className="mb-6 text-3xl font-bold text-white text-opacity-90">
              Favorite Tech Stack
            </h2>

            <TechStackIcons />
          </div>
        </section>
      </main>
    </>
  );
}
