import React from 'react';
import { render, screen } from '@testing-library/react';
import { useRouter } from 'next/router';
import Detail, { getStaticPaths, getStaticProps } from '@/pages/detail/[id]';

jest.mock('next/router', () => ({
  __esModule: true,
  useRouter: jest.fn(),
}));

describe('testing Detail page', () => {
  test('check on getStaticPaths', async () => {
    const data = [
      {
        id: 1,
        title: 'title',
        description: 'description',
        category: 'category',
        view: 111,
        alt: 'alt',
        images: 'https://i.ibb.co/10hj3h1/carousel.jpg',
        content: 'content',
      },
    ];
    global.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        ok: true,
        json: () => data,
      })
    );

    const response = await (getStaticPaths as jest.Mock)();

    const paths = [{ params: { id: 1 } }];
    expect(response).toEqual({ paths, fallback: true });
    expect(fetch).toHaveBeenCalledTimes(1);
  });
  test('check on getStaticProps', async () => {
    const data = {
      id: 1,
      title: 'title',
      description: 'description',
      category: 'category',
      view: 111,
      alt: 'alt',
      images: 'https://i.ibb.co/10hj3h1/carousel.jpg',
      content: 'content',
    };
    global.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        ok: true,
        json: () => ({ data: data }),
      })
    );
    const response = await getStaticProps({ params: { id: '1' } });

    expect(response).toEqual({
      props: { data: { data: data } },
      revalidate: 300,
    });
    expect(fetch).toHaveBeenCalledTimes(1);
  });

  test('check on getStaticProps notFound true', async () => {
    global.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        status: 500,
        json: () => 'Error handing fail to fetch',
      })
    );
    const response = await getStaticProps({ params: { id: '1' } });
    expect(response).toEqual({
      notFound: true,
    });
    expect(fetch).toHaveBeenCalled();
  });
  test('render Detail page', () => {
    const data = {
      id: 1,
      title: 'title',
      description: 'description',
      category: 'category',
      view: 111,
      alt: 'alt',
      images: 'https://i.ibb.co/10hj3h1/carousel.jpg',
      content: 'content',
    };
    const mockRouter = {
      isFallback: false,
    };
    (useRouter as jest.Mock).mockReturnValue(mockRouter);
    render(<Detail data={data} />);

    const title = screen.getByRole('heading', {
      name: /title/i,
    });
    expect(title).toBeInTheDocument();
    const content = screen.getByText('content');
    expect(content).toBeInTheDocument();
    const images = screen.getByRole('img', {
      name: /alt/i,
    });
    expect(images).toBeInTheDocument();
  });

  test('render spinner', () => {
    const data = {
      id: 0,
      title: 'title',
      description: 'description',
      category: 'category',
      view: 111,
      alt: 'alt',
      images: 'https://i.ibb.co/10hj3h1/carousel.jpg',
      content: 'content',
    };
    const mockRouter = {
      isFallback: true,
    };
    (useRouter as jest.Mock).mockReturnValue(mockRouter);
    render(<Detail data={data} />);
    const spinner = screen.getByTestId('spinner');
    expect(spinner).toBeInTheDocument();
  });
});
