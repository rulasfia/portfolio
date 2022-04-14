import LinkTo from '../components/atoms/LinkTo';
import Button from '../components/atoms/Button';
import SocialLinks from '../components/molecules/SocialLinks';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <main className="container mx-auto px-36">
        <section className="flex min-h-[80vh] w-full flex-row items-center justify-between border-b border-primary-500 py-12">
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

        {/* <hr /> */}

        <section className="border-b border-primary-500 py-16">
          <h2 className="mb-6 text-3xl font-bold">Featured Posts</h2>

          <div className="mb-6 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="rounded-lg outline outline-1 outline-offset-0 outline-primary-50 hover:cursor-pointer"
              >
                <Image
                  src="/img/post-placeholder.png"
                  alt="post-header-image"
                  height={90}
                  width={180}
                  className="rounded-t-lg"
                  objectFit="cover"
                  layout="responsive"
                />
                <div className="m-2 p-4 text-primary-100">
                  <p className="mb-1 text-sm font-semibold uppercase text-accent-600">
                    25 April 2022
                  </p>
                  <h1 className=" mb-2 text-xl font-bold">
                    This Is Post Title
                  </h1>
                  <p className="text-sm text-primary-300">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Tenetur at deleniti a obcaecati veritatis libero iste
                    recusandae ex pariatur nemo molestiae, sunt provident qui.
                  </p>
                </div>
              </div>
            ))}
          </div>

          <LinkTo to="/blog" className="">
            <Button arrowRight>Read all posts</Button>
          </LinkTo>
        </section>

        <section className="py-12"></section>
      </main>
    </>
  );
}
