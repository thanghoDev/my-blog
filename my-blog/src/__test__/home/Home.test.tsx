import React from 'react';
import { render } from '@testing-library/react';

import Home, { getStaticProps } from '@/pages/index';

describe('render home page', () => {
  const health = [
    {
      id: 1,
      title: 'title',
      description: 'description',
      category: 'category',
      view: 111,
      alt: 'alt',
      images: 'https://i.ibb.co/10hj3h1/images.jpg',
      content: 'content',
    },
    {
      id: 2,
      title: 'title2',
      description: 'description',
      category: 'category2',
      view: 111,
      alt: 'alt',
      images: 'https://i.ibb.co/10hj3h1/images.jpg',
      content: 'content2',
    },
  ];
  const trending = [
    {
      id: 1,
      title: 'title',
      description: 'description',
      category: 'category',
      view: 111,
      alt: 'alt',
      images: 'https://i.ibb.co/10hj3h1/images.jpg',
      content: 'content',
    },
    {
      id: 2,
      title: 'title2',
      description: 'description',
      category: 'category2',
      view: 111,
      alt: 'alt',
      images: 'https://i.ibb.co/10hj3h1/images.jpg',
      content: 'content2',
    },
  ];
  const business = [
    {
      id: 1,
      title: 'title',
      description: 'description',
      category: 'category',
      view: 111,
      alt: 'alt',
      images: 'https://i.ibb.co/10hj3h1/images.jpg',
      content: 'content',
    },
    {
      id: 2,
      title: 'title2',
      description: 'description',
      category: 'category2',
      view: 111,
      alt: 'alt',
      images: 'https://i.ibb.co/10hj3h1/images.jpg',
      content: 'content2',
    },
  ];
  const politics = [
    {
      id: 1,
      title: 'title',
      description: 'description',
      category: 'category',
      view: 111,
      alt: 'alt',
      images: 'https://i.ibb.co/10hj3h1/images.jpg',
      content: 'content',
    },
    {
      id: 2,
      title: 'title2',
      description: 'description',
      category: 'category2',
      view: 111,
      alt: 'alt',
      images: 'https://i.ibb.co/10hj3h1/images.jpg',
      content: 'content2',
    },
  ];
  const carousel = [
    {
      id: 1,
      title: 'title',
      description: 'description',
      category: 'category',
      view: 111,
      alt: 'alt',
      images: 'https://i.ibb.co/10hj3h1/images.jpg',
      content: 'content',
    },
    {
      id: 2,
      title: 'title2',
      description: 'description',
      category: 'category2',
      view: 111,
      alt: 'alt',
      images: 'https://i.ibb.co/10hj3h1/images.jpg',
      content: 'content2',
    },
  ];
  test('test getStaticProps', async () => {
    global.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        ok: true,
        json: () => carousel,
      })
    );
    global.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        ok: true,
        json: () => health,
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
        json: () => business,
      })
    );

    global.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        ok: true,
        json: () => carousel,
      })
    );
    const response = await getStaticProps();
    expect(response).toEqual({
      props: {
        carousel: carousel,
        health: health,
        trending: trending,
        business: business,
        politics: politics,
      },
      revalidate: 300,
    });
    expect(fetch).toHaveBeenCalled();
  });
  test('testing home page', () => {
    const { container } = render(
      <Home
        health={health}
        trending={trending}
        business={business}
        politics={politics}
        carousel={carousel}
      />
    );
    expect(container).toMatchSnapshot();
  });
});
