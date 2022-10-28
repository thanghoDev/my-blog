import React from 'react';
import Link from 'next/link';
import { Col } from 'react-bootstrap';

import Styles from '@/styles/Trending.module.css';
import { Blog } from '@/types/blog';

type TrendingProps = {
  trending: Blog[];
};

function Trending({ trending }: TrendingProps) {
  if (!trending) return <div>loading</div>;
  return (
    <Col md={4} className='mt-5 ps-4'>
      <h2 className='mb-5 text-decoration-underline text-capitalize fs-5'>
        trending
      </h2>

      {trending.map((item, index) => (
        <div key={item.id} className='mt-3 d-flex'>
          <h3 className={Styles.number}>0{index + 1}</h3>
          <div className='ms-4'>
            <Link href={`/detail/${item.id}`}>
              <a
                className={`text-black text-capitalize text-decoration-none ${Styles.title}`}
              >
                {item.title}
              </a>
            </Link>
            <p className='text-capitalize category mt-3'>
              Dave Rogers <code className='text-secondary'>in</code>{' '}
              <Link href={`/category/${item.category}`}>
                <a className='text-black text-decoration-none'>
                  {item.category}
                </a>
              </Link>
            </p>
          </div>
        </div>
      ))}

      <Link href={`/category/trending`}>
        <a className='text-uppercase link-success text-decoration-none'>
          See all trends<i className='bi bi-chevron-right'></i>
        </a>
      </Link>
    </Col>
  );
}

export default Trending;
