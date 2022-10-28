import React from 'react';
import Image from 'next/image';
import { Col, Row } from 'react-bootstrap';
import Pagination from 'react-bootstrap/Pagination';

// components
import Trending from '@/components/section/Trending';
import Subscribe from '@/components/section/Subscribe';

// types
import { Blog } from '@/types/blog';
import { GetStaticPaths, GetStaticProps } from 'next';
import { FetchPosts } from '@/helpers/FetchPosts';
import Link from 'next/link';

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
    `${process.env.NEXT_PUBLIC_DEVELOPMENT_CATEGORY}`
  );
  const data = await response.json();

  const result = await Promise.all(
    data.map((item: Category) =>
      fetch(
        `${process.env.NEXT_PUBLIC_DEVELOPMENT_BLOG}/?search=${item.category}`
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

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const category = params?.category;
  const page = params?.page;

  const [resCategories, resTrending, allCategory] = await Promise.all([
    FetchPosts({
      page: `${page}`,
      limit: '4',
      search: `${category}`,
      sortBy: 'id',
      order: 'desc',
    }),
    FetchPosts({ page: '1', limit: '4', sortBy: 'view', order: 'desc' }),
    FetchPosts({
      search: `${category}`,
    }),
  ]);

  const total = Math.ceil(allCategory.length / 4);
  const totalPage = Array.from({ length: total }, (_, index) => index + 1);

  const categories = resCategories.map((item: Blog) => ({
    id: item.id,
    title: item.title,
    description: item.description,
    category: item.category,
  }));

  const trending = resTrending.map((item: Blog) => ({
    id: item.id,
    title: item.title,
    category: item.category,
  }));

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
  return (
    <>
      <div className='container '>
        <div className='d-flex'>
          <Row>
            <span>Categories</span>
            <h2 className='text-capitalize text-decoration-underline'>
              {category}
            </h2>
            <Col className='mt-5'>
              {categories.map((item) => (
                <div key={item.id} className='d-flex mb-3'>
                  <div className='me-3 w-100'>
                    <Link href={`/detail/${item.id}`}>
                      <h3 className='fs-5 text-black text-capitalize postTitle'>
                        <a>
                          {item.id}: {item.title}
                        </a>
                      </h3>
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
        <Pagination className='gap-1'>
          {totalPage.map((item, index) => (
            <Link key={index} href={`/category/${category}/${item}`} passHref>
              <Pagination.Item
                key={index}
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
