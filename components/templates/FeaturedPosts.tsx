import { TypeBlogPost } from '../../types/responseTypes';
import Button from '../atoms/Button';
import LinkTo from '../atoms/LinkTo';
import Post from '../organisms/Post';

interface Props {
  data: TypeBlogPost[];
}

export default function FeaturedPosts({ data }: Props) {
  return (
    <section className="border-b border-primary-300 py-16 dark:border-primary-700">
      <h2 className="mb-6 text-3xl font-bold">Featured Posts</h2>

      <div className="mb-6 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {data.slice(0, 3).map((item) => (
          <LinkTo
            to={`/blog/${item.fields.slug}`}
            key={`/blog/${item.fields.slug}`}
            className=""
          >
            <Post
              title={item.fields.title}
              description={item.fields.description}
              publishedDate={item.fields.publishDate}
              imgUrl={item.fields.heroImage.fields.file.url}
            />
          </LinkTo>
        ))}
      </div>

      <LinkTo to="/blog" className="">
        <Button arrowRight>Read all posts</Button>
      </LinkTo>
    </section>
  );
}
