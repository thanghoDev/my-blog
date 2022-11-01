import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { Col, Pagination, Row, Spinner } from 'react-bootstrap';
import { Blog } from '@/types/blog';
import { useRouter } from 'next/router';
import useSWR from 'swr';
import { FetchPosts } from '@/helpers/FetchPosts';
function Search() {
  const router = useRouter();
  const searchValue = router.query.search;
  const { data, error } = useSWR<Blog[]>(
    `search=${searchValue}&page=1&limit=4`,
    FetchPosts
  );

  if (error) return <div>Failed to load</div>;
  if (!data)
    return (
      <Spinner
        className='position-absolute top-50 start-50'
        animation='border'
        variant='primary'
      />
    );
  console.log(Math.ceil(data.length / 4));
  const total = Math.ceil(data.length / 4);
  const totalPage = Array.from({ length: total }, (_, index) => index + 1);
  return (
    <div className='container '>
      <div className='d-flex'>
        <Row>
          <h2 className='text-capitalize text-decoration-underline'>
            {searchValue}
          </h2>
          <Col className='mt-5'>
            {data.map((item) => (
              <div key={item.id} className='d-flex mb-3'>
                <div className='me-3 w-100'>
                  <Link href={`/detail/${item.id}`}>
                    <a className='fs-5 text-black text-capitalize postTitle text-decoration-none'>
                      {item.title}
                    </a>
                  </Link>
                  <p className='description'>{item.description}</p>
                  <p className='text-capitalize category'>
                    Dave Rogers <code className='text-secondary'>in</code>{' '}
                    {item.category}
                  </p>
                </div>
                <Image
                  className='w-25'
                  height='155'
                  width='248'
                  src={item.images}
                  alt={item.alt}
                />
              </div>
            ))}
          </Col>
        </Row>
      </div>
      <Pagination>
        {totalPage.map((item, index) => (
          <Link key={index} href={'#'} passHref>
            <Pagination.Item>{item}</Pagination.Item>
          </Link>
        ))}
      </Pagination>
    </div>
  );
}

export default Search;
