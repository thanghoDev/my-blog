import React from 'react';

import { render } from '@testing-library/react';
import Category, {
  getStaticPaths,
  getStaticProps,
} from '@/pages/category/[category]/[page]';

describe('testing Category page', () => {
  test('testing getStaticPaths', async () => {
    const data = [
      {
        id: '1',
        category: 'business',
      },
    ];
    global.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        ok: true,
        json: () => data,
      })
    );
    const response = await (getStaticPaths as jest.Mock)();
    const paths = [{ params: { category: 'business', page: '1' } }];
    expect(response).toEqual({ paths, fallback: false });
    expect(fetch).toHaveBeenCalled();
  });

  test('testing getStaticProps', async () => {
    const categories = [
      {
        id: 1,
        title: 'title',
        description: 'description',
        category: 'business',
        view: 111,
        alt: 'alt',
        images: 'https://i.ibb.co/10hj3h1/carousel.jpg',
        content: 'content',
      },
    ];
    const category = 'business';
    const page = '1';
    const trending = [
      {
        id: 1,
        title: 'title',
        description: 'description',
        category: 'business',
        view: 111,
        alt: 'alt',
        images: 'https://i.ibb.co/10hj3h1/carousel.jpg',
        content: 'content',
      },
    ];
    const allCategory = [
      {
        id: 1,
        title: 'title',
        description: 'description',
        category: 'business',
        view: 111,
        alt: 'alt',
        images: 'https://i.ibb.co/10hj3h1/carousel.jpg',
        content: 'content',
      },
    ];
    const totalPage = [1];

    global.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        ok: true,
        json: () => categories,
      })
    );
    global.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        ok: true,
        json: () => trending,
      })
    );
    global.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        ok: true,
        json: () => allCategory,
      })
    );

    const response = await getStaticProps({
      params: { category: 'business', page: '1' },
    });
    expect(response).toEqual({
      props: {
        categories: categories,
        totalPage: totalPage,
        trending: trending,
        category: category,
        page: page,
      },
      revalidate: 300,
    });
    expect(fetch).toHaveBeenCalled();
  });

  test('render category page', () => {
    const category = 'category';
    const page = '1';
    const totalPage = [1, 2];
    const trending = [
      {
        id: 1,
        title: 'title',
        description: 'description',
        category: 'health',
        view: 150,
        images: 'https://i.ibb.co/10hj3h1/health.jpg',
        alt: 'health',
        content: 'content',
      },
    ];
    const categories = [
      {
        id: 1,
        title: 'title',
        description: 'description',
        category: 'PostList',
        view: 150,
        images: 'https://i.ibb.co/10hj3h1/PostList.jpg',
        alt: 'PostList',
        content: 'content',
      },
    ];
    render(
      <Category
        category={category}
        categories={categories}
        trending={trending}
        page={page}
        totalPage={totalPage}
      />
    );
  });
});