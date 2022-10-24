import React from 'react';
import Image from 'next/future/image';
import { Col, Row } from 'react-bootstrap';

// types
import { Blog } from '@/types/blog';

type HealthProps = {
  health: Blog[];
};

function Health({ health }: HealthProps) {
  const [firstArticle, ...resArticle] = health;

  return (
    <Row md={8} className='mt-5 align-content-start'>
      <h2 className='mb-5 text-decoration-underline fs-5'>Health</h2>
      <Col md={6}>
        <div className='mb-2'>
          <Image
            className='w-100'
            width='350'
            height='210'
            src={firstArticle.images}
            alt='image'
          />
          <div className='mt-5'>
            <h2 className='fs-5 text-black text-capitalize'>
              {firstArticle.title}
            </h2>
            <p className=''>{firstArticle.description}</p>
          </div>
        </div>
      </Col>
      <Col md={6}>
        {resArticle.map((item) => (
          <div key={item.id} className='d-flex mb-2'>
            <Image width='105' height='107' src={item.images} alt='image' />
            <div className='ms-4'>
              <h2 className='fs-6 text-black text-capitalize'>{item.title}</h2>
              <p className='text-capitalize'>
                Dave Rogers <code className='text-secondary'>in</code>{' '}
                {item.category}
              </p>
            </div>
          </div>
        ))}
      </Col>
    </Row>
  );
}

export default Health;
