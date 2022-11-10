import React from 'react';
import Link from 'next/link';
import { Col } from 'react-bootstrap';

// constants
import { CATEGORY } from '@/constants/pages';

// types
import { Blog } from '@/types/blog';
import Posts from '../card/Posts';

type PostListProps = {
  data: Blog[];
  title: string;
};

function PostList({ data, title }: PostListProps) {
  return (
    <Col md={6} className='me-4'>
      <Link href={`/${CATEGORY}/${title}`}>
        <h2 className='mb-5 text-decoration-underline text-capitalize fs-5 postTitle'>
          {title}
        </h2>
      </Link>

      {data.map((item) => (
        <Posts key={item.id} posts={item} />
      ))}
    </Col>
  );
}

export default PostList;
