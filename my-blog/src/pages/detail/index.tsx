import React from 'react';
import Image from 'next/future/image';
import { Col, Row } from 'react-bootstrap';
import Trending from '@/components/section/Trending';

export async function getStaticProps() {
  const response = await fetch(
    `https://63520df09d64d7c7130d539c.mockapi.io/blog/1`
  );
  // console.log(response);
  const data = await response.json();
  return {
    props: {
      data,
    },
  };
}

function Detail({ data }: any) {
  const trending = [
    {
      id: 1,
      title: 'title',
      description: 'description',
      category: 'health',
      view: 150,
      images: 'https://i.ibb.co/10hj3h1/health.jpg',
      alt: 'health',
    },
    {
      id: 2,
      title: 'title2',
      description: 'description',
      category: 'resHeath',
      view: 150,
      images: 'https://i.ibb.co/10hj3h1/health.jpg',
      alt: 'resHeath',
    },
  ];
  return (
    <div className='container d-flex'>
      <Row className='mt-5'>
        <Col>
          <Image
            width='730'
            height='440'
            src={`https://i.ibb.co/10hj3h1/health.jpg`}
            alt='image'
          />
          <div className='mt-5'>
            <h1 className='text-capitalize'>this is title</h1>
            <div className=''>{data.content}</div>
          </div>
        </Col>
      </Row>
      <Trending trending={trending} />
    </div>
  );
}

export default Detail;
