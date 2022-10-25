import React from 'react';
import Image from 'next/future/image';
import { Col, Row } from 'react-bootstrap';

// types
import { Blog } from '@/types/blog';
import Link from 'next/link';

type HealthProps = {
  health: Blog[];
};

function Health({ health }: HealthProps) {
  const [firstArticle, ...resArticle] = health;

  return (
    <Row md={8} className='mt-5 align-content-start'>
      <Link href={`category/${firstArticle.category}`}>
        <h2 className='mb-5 postTitle text-decoration-underline text-capitalize fs-5'>
          <a>{firstArticle.category}</a>
        </h2>
      </Link>
      <Col md={6}>
        <div className='mb-2'>
          <Image
            width='350'
            height='210'
            src={firstArticle.images}
            alt={firstArticle.alt}
          />
          <div className='mt-5'>
            <Link href={`detail/${firstArticle.id}`}>
              <a className='fs-5 text-black text-decoration-none text-capitalize'>
                {firstArticle.title}
              </a>
            </Link>

            <p className='description'>{firstArticle.description}</p>
          </div>
        </div>
      </Col>
      <Col md={6}>
        {resArticle.map((item) => (
          <div key={item.id} className='d-flex mb-2'>
            <Image width='105' height='107' src={item.images} alt={item.alt} />
            <div className='ms-4'>
              <Link href={`detail/${item.id}`}>
                <a className='fs-6 text-black text-decoration-none text-capitalize'>
                  {item.title}
                </a>
              </Link>
              <p className='text-capitalize category mt-3'>
                Dave Rogers <code className='text-secondary'>in</code>{' '}
                <Link href={`category/${item.category}`}>
                  <a className='text-black text-decoration-none'>
                    {item.category}
                  </a>
                </Link>
              </p>
            </div>
          </div>
        ))}
      </Col>
    </Row>
  );
}

export default Health;
