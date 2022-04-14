import { useRouter } from 'next/router';

export default function BlogPostDetails() {
  const { query } = useRouter();

  return (
    <>
      <main className="container mx-auto px-36">
        <section className="border-b border-primary-700 py-8">
          <h2 className="mb-6 text-3xl font-bold">This Is Post Title</h2>

          <p>{JSON.stringify(query)}</p>
        </section>
      </main>
    </>
  );
}
