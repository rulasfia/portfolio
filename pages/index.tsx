import LinkTo from '../components/atoms/LinkTo';
import Button from '../components/atoms/Button';
import SocialLinks from '../components/molecules/SocialLinks';

export default function Home() {
  return (
    <>
      <main className="container mx-auto px-36">
        <section className="grid min-h-[80vh] w-full grid-cols-2 items-center justify-between py-12">
          <div>
            {/* titile & subtitle */}
            <h1 className="mb-4 text-4xl font-bold tracking-wide">
              Hi!, I am Khoirul Asfian
            </h1>
            <h3 className="mb-6 text-xl font-normal">
              I&apos;m a fullstack web developer working on Node.js & React
              ecosystem.
            </h3>

            {/* link to about page */}
            <div className="mb-6 flex flex-row">
              <LinkTo to="/about" className="">
                <Button>Learn More About me</Button>
              </LinkTo>
            </div>

            {/* social link */}
            <SocialLinks />
          </div>
        </section>

        <hr />
      </main>
    </>
  );
}
