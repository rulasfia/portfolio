import Image from 'next/image';
import { useRouter } from 'next/router';
import placeholderImg from '../../public/img/post-placeholder.png';

export default function BlogPostDetails() {
  const { query } = useRouter();

  console.log({ query });
  return (
    <>
      <main className="container mx-auto px-8 md:px-24 lg:px-36">
        <section className="border-b border-primary-700 py-8">
          <article className="prose prose-neutral mx-auto dark:prose-invert">
            <p className="mb-1 text-sm font-semibold uppercase text-accent-600">
              24 April 2022
            </p>
            <h1 className="mb-3 text-3xl font-bold">This Is Post Title</h1>
            <div className="mb-6 flex flex-row items-center justify-between">
              <span>Khoirul Asfian</span>
              <span>1240 word</span>
            </div>

            <div className="mb-6 border-b border-primary-700" />

            <Image
              src={placeholderImg}
              alt="asfian-avatar"
              className="rounded-xl"
              width={320}
              height={180}
              style={{ borderRadius: '12px' }}
              objectFit="cover"
              layout="responsive"
              placeholder="blur"
              // blurDataURL={rgbDataURL(220, 220, 220)}
            />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
              sint enim dolor molestias? Iusto distinctio illum quaerat sed
              velit dolore a nobis eveniet omnis, quam veritatis nulla facilis,
              libero ipsum recusandae culpa rem corrupti porro quia nemo animi
              sint dolorem.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
              sint enim dolor molestias? Iusto distinctio illum quaerat sed
              velit dolore a nobis eveniet omnis, quam veritatis nulla facilis,
              libero ipsum recusandae culpa rem.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
              sint enim dolor molestias? Iusto distinctio illum quaerat sed
              velit dolore a nobis eveniet omnis, quam veritatis nulla facilis,
              libero ipsum recusandae culpa rem corrupti porro quia nemo animi
              sint dolorem. Lorem ipsum dolor sit amet consectetur, adipisicing
              elit. Aliquam porro tempore nulla.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
              sint enim dolor molestias? Iusto distinctio illum quaerat sed
              velit dolore a nobis eveniet omnis, quam veritatis nulla facilis,
              libero ipsum recusandae culpa rem corrupti porro quia.
            </p>
          </article>
        </section>
      </main>
    </>
  );
}
