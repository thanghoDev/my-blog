import Link from 'next/link';
import Image from 'next/future/image';

// constant
import { CATEGORY, DETAIL } from '@/constants/pages';

// types
import { Blog } from '@/types/blog';

type PostsProps = {
  posts: Blog;
};

function Posts({ posts }: PostsProps) {
  return (
    <div className='d-flex mb-3'>
      <Image width={165} height={180} src={posts.images} alt={posts.alt} />
      <div className='ms-4'>
        <Link href={`/${DETAIL}/${posts.id}`}>
          <a className='fs-6 text-decoration-none text-black text-capitalize postTitle'>
            {posts.title}
          </a>
        </Link>
        <p className='description'>{posts.description}</p>
        <p className='text-capitalize category'>
          Dave Rogers <code className='text-secondary'>in</code>{' '}
          <Link href={`/${CATEGORY}/${posts.category}`}>
            <a className='text-black text-decoration-none'>{posts.category}</a>
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Posts;
