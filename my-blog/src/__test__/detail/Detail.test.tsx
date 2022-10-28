import React from 'react';
import { render, screen } from '@testing-library/react';

import Detail, { getStaticPaths, getStaticProps } from '@/pages/detail/[id]';

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
    expect(response).toEqual({ paths, fallback: false });
    expect(fetch).toHaveBeenCalledTimes(1);
  });
  test('check on getStaticProps', async () => {
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
    global.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        ok: true,
        json: () => ({ data: data }),
      })
    );
    const response = await getStaticProps({ params: { id: '1' } });

    expect(response).toEqual({ props: { data: { data: data } } });
    expect(fetch).toHaveBeenCalledTimes(1);
  });

  test('render Detail page', () => {
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
    render(<Detail data={data} />);

    const images = screen.getByRole('img', {
      name: /alt/i,
    });
    expect(images).toBeInTheDocument();
  });
});
