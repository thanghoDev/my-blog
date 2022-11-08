import React from 'react';
import { useRouter } from 'next/router';
import { render, screen } from '@testing-library/react';
import Category, {
  getStaticPaths,
  getStaticProps,
} from '@/pages/category/[category]/[page]';
import { Blog } from '@/types/blog';

jest.mock('next/router', () => ({
  __esModule: true,
  useRouter: jest.fn(),
}));

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
    expect(response).toEqual({ paths, fallback: true });
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
  test('testing getStaticProps render empty', async () => {
    const categories: Blog[] = [];
    const trending: Blog[] = [];
    const allCategory: Blog[] = [];
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
      params: { category: 'searchValue', page: '1' },
    });
    expect(response).toEqual({
      notFound: true,
    });
    expect(fetch).toHaveBeenCalled();
  });

  test('render category page', () => {
    const mockRouter = {
      isFallback: false,
    };
    (useRouter as jest.Mock).mockReturnValue(mockRouter);
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
    const { container } = render(
      <Category
        category={category}
        categories={categories}
        trending={trending}
        page={page}
        totalPage={totalPage}
      />
    );
    expect(container).toMatchSnapshot();
    const title = screen.getByRole('heading', {
      name: /category/i,
    });
    expect(title).toBeInTheDocument();
  });
  test('render loading spinner', () => {
    const mockRouter = {
      isFallback: true,
    };
    (useRouter as jest.Mock).mockReturnValue(mockRouter);
    render(
      <Category
        category={''}
        page={''}
        totalPage={[]}
        categories={[]}
        trending={[]}
      />
    );
    const spinner = screen.getByTestId('spinner');
    expect(spinner).toBeInTheDocument();
  });
});
