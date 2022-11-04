import React from 'react';
import Image from 'next/future/image';
import Link from 'next/link';
import { Col } from 'react-bootstrap';

// constants
import { CATEGORY, DETAIL } from 'constant/Category';

// types
import { Blog } from '@/types/blog';

type PostListProps = {
  data: Blog[];
  title: string;
};

function PostList({ data, title }: PostListProps) {
  return (
    <Col md={6} className='me-4'>
      <Link href={`/category${title}`}>
        <h2 className='mb-5 text-decoration-underline text-capitalize fs-5 postTitle'>
          <a>{title}</a>
        </h2>
      </Link>

      {data.map((item) => (
        <div key={item.id} className='d-flex mb-3'>
          <Image width={165} height={180} src={item.images} alt={item.alt} />
          <div className='ms-4'>
            <Link href={`/${DETAIL}/${item.id}`}>
              <a className='fs-6 text-decoration-none text-black text-capitalize postTitle'>
                {item.title}
              </a>
            </Link>
            <p className='description'>{item.description}</p>
            <p className='text-capitalize category'>
              Dave Rogers <code className='text-secondary'>in</code>{' '}
              <Link href={`/${CATEGORY}/${item.category}`}>
                <a className='text-black text-decoration-none'>
                  {item.category}
                </a>
              </Link>
            </p>
          </div>
        </div>
      ))}
    </Col>
  );
}

export default PostList;
