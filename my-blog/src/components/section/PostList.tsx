import React from 'react';
import Image from 'next/future/image';
import { Col } from 'react-bootstrap';
import { Blog } from '@/types/blog';

type PostListProps = {
  data: Blog[];
  title: string;
};

function PostList({ data, title }: PostListProps) {
  return (
    <Col md={6} className='me-4'>
      <h2 className='mb-5 text-decoration-underline text-capitalize fs-5'>
        {title}
      </h2>
      {data.map((item) => (
        <div key={item.id} className='d-flex mb-3'>
          <Image width='165' height='180' src={item.images} alt={item.alt} />
          <div className='ms-4'>
            <h2 className='fs-6 text-black text-capitalize'>{item.title}</h2>
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
