import React from 'react';
import Image from 'next/future/image';
import Link from 'next/link';
import { Col } from 'react-bootstrap';

// types
import { Blog } from '@/types/blog';

type PostListProps = {
  data: Blog[];
  title: string;
};

function PostList({ data, title }: PostListProps) {
  return (
    <Col md={6} className='me-4'>
      <Link href={`category${title}`}>
        <h2 className='mb-5 text-decoration-underline text-capitalize fs-5 postTitle'>
          <a>{title}</a>
        </h2>
      </Link>

      {data.map((item) => (
        <div key={item.id} className='d-flex mb-3'>
          <Image width='165' height='180' src={item.images} alt={item.alt} />
          <div className='ms-4'>
            <Link href={`detail/${item.id}`}>
              <h2 className='fs-6 text-black text-capitalize'>
                <a>{item.title}</a>
              </h2>
            </Link>
            <p className='description'>{item.description}</p>
            <p className='text-capitalize category'>
              Dave Rogers <code className='text-secondary'>in</code>{' '}
              {item.category}
            </p>
          </div>
        </div>
      ))}
    </Col>
  );
}

export default PostList;
