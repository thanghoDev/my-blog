import React from 'react';
import Image from 'next/future/image';
import { Col, Row } from 'react-bootstrap';

function Health() {
  return (
    <Row className='g-4 mt-5'>
      <Col md={6}>
        <div className='mb-2'>
          <Image
            className='w-100'
            width='150'
            height='300'
            src='https://i.ibb.co/QmmqW6t/health.jpg'
            alt='image'
          />
          <div className='mt-5'>
            <h2>Card title</h2>
            <p>
              This is a longer card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
          </div>
        </div>
      </Col>
      <Col md={6}>
        <div className='d-flex mb-2'>
          <Image
            width='150'
            height='150'
            src='https://i.ibb.co/QmmqW6t/health.jpg'
            alt='image'
          />
          <div className='ms-4'>
            <h2>Card title</h2>
            <p>
              This is a longer card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
          </div>
        </div>
        <div className='d-flex mb-2'>
          <Image
            width='150'
            height='150'
            src='https://i.ibb.co/QmmqW6t/health.jpg'
            alt='image'
          />
          <div className='ms-4'>
            <h2>Card title</h2>
            <p>
              This is a longer card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
          </div>
        </div>
        <div className='d-flex mb-2'>
          <Image
            width='150'
            height='150'
            src='https://i.ibb.co/QmmqW6t/health.jpg'
            alt='image'
          />
          <div className='ms-4'>
            <h2>Card title</h2>
            <p>
              This is a longer card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
          </div>
        </div>
      </Col>
    </Row>
  );
}

export default Health;
