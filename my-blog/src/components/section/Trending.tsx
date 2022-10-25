import React from 'react';
import Link from 'next/link';
import { Col } from 'react-bootstrap';

import Styles from '@/styles/Trending.module.css';
import { Blog } from '@/types/blog';

type TrendingProps = {
  trending: Blog[];
};
function Trending({ trending }: TrendingProps) {
  return (
    <Col md={4} className='mt-5 ps-4'>
      <h2 className='mb-5 text-decoration-underline fs-5'>Trending</h2>
      {trending.map((item, index) => (
        <div key={item.id} className='mt-3 d-flex'>
          <h3 className={Styles.number}>0{index + 1}</h3>
          <div className='ms-4'>
            <h3 className={`text-black text-capitalize ${Styles.title}`}>
              {item.title}
            </h3>
            <p className='text-capitalize category'>
              Dave Rogers <code className='text-secondary'>in</code>{' '}
              {item.category}
            </p>
          </div>
        </div>
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
