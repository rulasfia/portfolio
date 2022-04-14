import LinkTo from '../components/atoms/LinkTo';
import SearchBar from '../components/molecules/SearchBar';
import Post from '../components/organisms/Post';
import { BlogMock } from '../utils/constant';

export default function Blog() {
  return (
    <>
      <main className="container mx-auto px-8 md:px-24 lg:px-36">
        <section className="border-b border-primary-700 py-8">
          <h2 className="mb-6 text-3xl font-bold">Blog Posts</h2>

          <div className="my-6">
            <SearchBar id="blog-search" />
          </div>

          <div className="mb-6 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {BlogMock.map((item) => (
              <LinkTo
                to={`/blog/${item.id}`}
                key={`/blog/${item.id}`}
                className=""
              >
                <Post {...item} />
              </LinkTo>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
