import React from 'react';
import Link from 'next/link';
import Image from 'next/future/image';
import { Col } from 'react-bootstrap';

// Components
import Subscribe from '@/components/section/Subscribe';

// types
import { Blog } from '@/types/blog';
import { GetStaticPaths, GetStaticProps } from 'next/types';

// helper
import { FetchPosts } from '@/helpers/FetchPosts';

// constant
import { BLOG } from 'constant/Blog';
import { CATEGORY } from 'constant/Category';

type DetailProps = {
  data: Blog;
};

export const getStaticPaths: GetStaticPaths = async () => {
  const data = await FetchPosts({});

  const paths = data.map((post: Blog) => ({
    params: { id: post.id },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const id = params?.id;
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_DEVELOPMENT}/${BLOG}/${id}`
  );

  const data = await response.json();
  return {
    props: {
      data,
    },
  };
};

function Detail({ data }: DetailProps) {
  return (
    <>
      <div className='container d-flex'>
        <Col>
          <Image
            className='mb-5'
            width={1120}
            height={650}
            src={data.images}
            alt={data.alt}
          />
          <h1 className='text-capitalize mb-4'>{data.title}</h1>
          <div className='d-flex mb-5'>
            <Image
              src='/images/avatar.jpg'
              className='rounded-circle'
              width='40'
              height='40'
              alt='avatar'
            />
            <div className='mx-3'>
              <p className='text-capitalize'>
                Dave Rogers <code className='text-secondary'>in</code>{' '}
                <Link href={`/${CATEGORY}/${data.category}`}>
                  <a className='text-black text-decoration-none'>
                    {data.category}
                  </a>
                </Link>
              </p>
            </div>
          </div>
          <div className='mt-5'>
            <div
              className='description mt-5'
              dangerouslySetInnerHTML={{ __html: data.content }}
            />
          </div>

          <p className='pt-5'>
            Categories:
            <code className='text-success text-capitalize'>
              {' '}
              design, events.
            </code>
            Tags:
            <code className='text-success text-capitalize'>
              {' '}
              #{data.category}
            </code>
          </p>
        </Col>
      </div>
      <Subscribe />
    </>
  );
}

export default Detail;
