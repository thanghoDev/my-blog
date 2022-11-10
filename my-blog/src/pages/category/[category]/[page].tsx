import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { Col, Row, Spinner } from 'react-bootstrap';
import Pagination from 'react-bootstrap/Pagination';

// components
import Trending from '@/components/sections/Trending';
import Subscribe from '@/components/sections/Subscribe';

// types
import { Blog } from '@/types/blog';
import { GetStaticPaths, GetStaticProps } from 'next';

// helper
import { fetchPosts } from '@/helpers/fetchPosts';

// constants
import { CATEGORY } from '@/constants/pages';
import { BLOG } from '@/constants/blog';

type CategoryProps = {
  category: string;
  page: string;
  totalPage: number[];
  categories: Blog[];
  trending: Blog[];
};

type Category = {
  id: string;
  category: string;
};

type Params = {
  category: string;
  page: string;
};

type Paths = {
  params: Params;
};

export const getStaticPaths: GetStaticPaths = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_DEVELOPMENT}/${CATEGORY}`
  );

  const data = await response.json();

  const result = await Promise.all(
    data.map((item: Category) =>
      fetch(
        `${process.env.NEXT_PUBLIC_DEVELOPMENT}/${BLOG}/?search=${item.category}`
      )
        .then((data) => data.json())
        .then((posts) => ({
          category: item.category,
          totalPage: Math.ceil(posts.length / 4),
        }))
    )
  );

  let paths: Paths[] = [];
  result.forEach((obj) => {
    const arr = Array.from({ length: obj.totalPage }, (_, index) => ({
      params: {
        category: obj.category,
        page: (index + 1).toString(),
      },
    }));

    paths = paths.concat(arr);
  });

  return { paths, fallback: true };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const category = params?.category;
  const page = params?.page;

  const [categories, trending, allCategory] = await Promise.all([
    fetchPosts({
      page: `${page}`,
      limit: '4',
      search: `${category}`,
      sortBy: 'id',
      order: 'desc',
    }),
    fetchPosts({ page: '1', limit: '4', sortBy: 'view', order: 'desc' }),
    fetchPosts({
      search: `${category}`,
    }),
  ]);

  if (
    categories.length === 0 ||
    trending.length === 0 ||
    allCategory.length === 0
  ) {
    return {
      notFound: true,
    };
  }

  const total = Math.ceil(allCategory.length / 4);
  const totalPage = Array.from({ length: total }, (_, index) => index + 1);

  return {
    props: {
      category,
      categories,
      trending,
      totalPage,
      page,
    },
    revalidate: 300,
  };
};

function Category({
  categories,
  trending,
  category,
  totalPage,
  page,
}: CategoryProps) {
  const router = useRouter();
  if (router.isFallback) {
    return (
      <Spinner
        className='position-absolute top-50 start-50'
        animation='border'
        variant='primary'
        data-testid='spinner'
      />
    );
  }

  return (
    <>
      <div className='container'>
        <div className='d-flex'>
          <Row className='flex-column'>
            <span>Categories</span>
            <h2 className='text-capitalize text-decoration-underline'>
              {category}
            </h2>
            <Col className='mt-5'>
              {categories.map((item) => (
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
          <Trending trending={trending} />
        </div>
        <Pagination>
          {totalPage.map((item, index) => (
            <Link
              key={index}
              href={`/${CATEGORY}/${category}?page=${item}`}
              passHref
            >
              <Pagination.Item
                className={`${item === parseInt(page) ? 'disabled' : ''}`}
              >
                {item}
              </Pagination.Item>
            </Link>
          ))}
        </Pagination>
      </div>
      <Subscribe />
    </>
  );
}

export default Category;
