import React from 'react';
import Link from 'next/link';
import { Col } from 'react-bootstrap';

// types
import { Blog } from '@/types/blog';

import Trends from '../card/Trends';

type TrendingProps = {
  trending: Blog[];
};

function Trending({ trending }: TrendingProps) {
  return (
    <Col md={4} className='mt-5 ps-4'>
      <h2 className='mb-5 text-decoration-underline text-capitalize fs-5'>
        trending
      </h2>

      {trending.map((item, index) => (
        <Trends key={item.id} trends={item} index={index} />
      ))}

      <Link href='#'>
        <a className='text-uppercase link-success text-decoration-none'>
          See all trends<i className='bi bi-chevron-right'></i>
        </a>
      </Link>
    </Col>
  );
}

export default Trending;
