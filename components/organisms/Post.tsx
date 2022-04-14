import Image from 'next/image';

export default function Post() {
  return (
    <div className="rounded-lg outline outline-1 outline-offset-0 outline-primary-300 ring-2 ring-transparent ring-offset-1 ring-offset-transparent transition duration-75 hover:cursor-pointer hover:outline-accent-500 hover:ring-accent-500">
      <Image
        src="/img/post-placeholder.png"
        alt="post-header-image"
        height={90}
        width={180}
        className="rounded-t-lg"
        objectFit="cover"
        layout="responsive"
      />
      <div className="m-2 bg-primary-800 p-4 text-primary-100">
        <p className="mb-1 text-sm font-semibold uppercase text-accent-600">
          25 April 2022
        </p>
        <h1 className=" mb-2 text-xl font-bold">This Is Post Title</h1>
        <p className="text-sm text-primary-300">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur at
          deleniti a obcaecati veritatis libero iste recusandae ex pariatur nemo
          molestiae, sunt provident qui.
        </p>
      </div>
    </div>
  );
}
