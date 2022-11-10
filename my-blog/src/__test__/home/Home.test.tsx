import React from 'react';
import { render, screen } from '@testing-library/react';

import Home, { getStaticProps } from '@/pages/index';

describe('render home page', () => {
  const health = [
    {
      id: 1,
      title: 'title health',
      description: 'health description',
      category: 'health',
      view: 111,
      alt: 'alt health',
      images: 'https://i.ibb.co/10hj3h1/images.jpg',
      content: 'content',
    },
    {
      id: 2,
      title: 'title health2',
      description: 'description health2',
      category: 'health',
      view: 111,
      alt: 'alt health2',
      images: 'https://i.ibb.co/10hj3h1/images.jpg',
      content: 'content health2',
    },
  ];
  const trending = [
    {
      id: 1,
      title: 'title trending',
      description: 'description trending',
      category: 'trending',
      view: 111,
      alt: 'alt trending',
      images: 'https://i.ibb.co/10hj3h1/images.jpg',
      content: 'content trending',
    },
    {
      id: 2,
      title: 'title trending2',
      description: 'description trending2',
      category: 'category',
      view: 111,
      alt: 'alt trending2',
      images: 'https://i.ibb.co/10hj3h1/images.jpg',
      content: 'content trending2',
    },
  ];
  const business = [
    {
      id: 1,
      title: 'title business',
      description: 'description business',
      category: 'business',
      view: 111,
      alt: 'alt business',
      images: 'https://i.ibb.co/10hj3h1/images.jpg',
      content: 'content business',
    },
    {
      id: 2,
      title: 'title business2',
      description: 'description business2',
      category: 'business',
      view: 111,
      alt: 'alt business2',
      images: 'https://i.ibb.co/10hj3h1/images.jpg',
      content: 'content business2',
    },
  ];
  const politics = [
    {
      id: 1,
      title: 'title politics',
      description: 'description politics',
      category: 'politics',
      view: 111,
      alt: 'alt politics',
      images: 'https://i.ibb.co/10hj3h1/images.jpg',
      content: 'content politics',
    },
    {
      id: 2,
      title: 'title politics2',
      description: 'description politics2',
      category: 'politics',
      view: 111,
      alt: 'alt politics2',
      images: 'https://i.ibb.co/10hj3h1/images.jpg',
      content: 'content politics2',
    },
  ];
  const carousel = [
    {
      id: 1,
      title: 'title carousel',
      description: 'description carousel',
      category: 'carousel',
      view: 111,
      alt: 'alt carousel',
      images: 'https://i.ibb.co/10hj3h1/images.jpg',
      content: 'content carousel',
    },
    {
      id: 2,
      title: 'title carousel2',
      description: 'description carousel2',
      category: 'carousel',
      view: 111,
      alt: 'alt carousel2',
      images: 'https://i.ibb.co/10hj3h1/images.jpg',
      content: 'content carousel2',
    },
  ];
  test('test getStaticProps', async () => {
    global.fetch = jest
      .fn()
      .mockImplementationOnce(() =>
        Promise.resolve({
          ok: true,
          json: () => carousel,
        })
      )
      .mockImplementationOnce(() =>
        Promise.resolve({
          ok: true,
          json: () => health,
        })
      )
      .mockImplementationOnce(() =>
        Promise.resolve({
          ok: true,
          json: () => trending,
        })
      )
      .mockImplementationOnce(() =>
        Promise.resolve({
          ok: true,
          json: () => business,
        })
      )
      .mockImplementationOnce(() =>
        Promise.resolve({
          ok: true,
          json: () => politics,
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
    health.forEach((item) => {
      expect(screen.getByText(item.title)).toBeInTheDocument();
      expect(screen.getByRole('img', { name: item.alt })).toBeInTheDocument();
    });
    trending.forEach((item) => {
      expect(screen.getByText(item.title)).toBeInTheDocument();
    });
    business.forEach((item) => {
      expect(screen.getByText(item.title)).toBeInTheDocument();
      expect(screen.getByRole('img', { name: item.alt })).toBeInTheDocument();
      expect(screen.getByText(item.description)).toBeInTheDocument();
    });
    politics.forEach((item) => {
      expect(screen.getByText(item.title)).toBeInTheDocument();
      expect(screen.getByRole('img', { name: item.alt })).toBeInTheDocument();
      expect(screen.getByText(item.description)).toBeInTheDocument();
    });
    carousel.forEach((item) => {
      expect(screen.getByText(item.title)).toBeInTheDocument();
      expect(screen.getByRole('img', { name: item.alt })).toBeInTheDocument();
    });
  });
});
