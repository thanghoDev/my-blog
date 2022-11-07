import React from 'react';
import useSWR from 'swr';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { Col, Pagination, Row, Spinner } from 'react-bootstrap';

// helpers
import { FetchPosts } from '@/helpers/FetchPosts';

// types
import { Blog } from '@/types/blog';

// constant
import { CATEGORY } from 'constant/Pages';

function Search() {
  const router = useRouter();
  const page = router.query.page;
  const searchValue = router.query.search;

  // get data to render page
  const { data, error } = useSWR<Blog[]>(
    `title=${searchValue}&page=${page}&limit=4`,
    FetchPosts
  );

  // get all data
  const { data: totalData, error: totalDataError } = useSWR<Blog[]>(
    `title=${searchValue}`,
    FetchPosts
  );

  if (!data || !totalData)
    return (
      <Spinner
        className='position-absolute top-50 start-50'
        animation='border'
        variant='primary'
        data-testid='spinner'
      />
    );
  if (error || totalDataError) return <div>Failed to load</div>;

  const total = Math.ceil(totalData.length / 4);

  const totalPage = Array.from({ length: total }, (_, index) => index + 1);

  return (
    <div className='container vh-75'>
      <div className='d-flex'>
        <Row>
          <h2 className='text-capitalize text-decoration-underline'>
            {searchValue}
          </h2>
          <Col className='mt-5'>
            {data.length > 0 ? (
              data.map((item) => (
                <div key={item.id} className='d-flex mb-3'>
                  <Image
                    className='me-3 w-50'
                    height='255'
                    width='348'
                    src={item.images}
                    alt={item.alt}
                  />
                  <div className='w-100'>
                    <Link href={`/detail/${item.id}`}>
                      <a className='fs-5 text-black text-capitalize postTitle text-decoration-none'>
                        {item.title}
                      </a>
                    </Link>
                    <p className='description'>{item.description}</p>
                    <p className='text-capitalize category'>
                      Dave Rogers <code className='text-secondary'>in</code>{' '}
                      <Link href={`/${CATEGORY}/${item.category}`}>
                        <a className='text-black text-decoration-none'>
                          {item.category}
                        </a>
                      </Link>
                    </p>
                  </div>
                </div>
              ))
            ) : (
              <div className='fs-3 position-absolute start-50 translate-middle text-center'>
                There is no result for{' '}
                <code className='text-danger'>{searchValue}</code>
              </div>
            )}
          </Col>
        </Row>
      </div>

      <Pagination>
        {totalPage.map((item, index) => (
          <Link
            key={index}
            href={`/search/${searchValue}?page=${item}`}
            passHref
          >
            <Pagination.Item
              className={`${
                item === parseInt(page as string) ? 'disabled' : ''
              }`}
            >
              {item}
            </Pagination.Item>
          </Link>
        ))}
      </Pagination>
    </div>
  );
}

export default Search;
