import React from 'react';
import { render, screen } from '@testing-library/react';
import Search from '@/pages/search/[search]/[page]';
import useSWR from 'swr';
import { useRouter } from 'next/router';

jest.mock('next/router', () => ({
  __esModule: true,
  useRouter: jest.fn(),
}));

const data = [
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
  {
    id: 2,
    title: 'title2',
    description: 'description2',
    category: 'business',
    view: 111,
    alt: 'alt2',
    images: 'https://i.ibb.co/10hj3h1/carousel.jpg',
    content: 'content2',
  },
];

jest.mock('swr');
(useSWR as jest.Mock).mockReturnValue({ data: data, error: true });

describe('testing search page', () => {
  test('render search page', () => {
    const mockRouter = {
      query: { search: 'search', page: '1' },
    };
    (useRouter as jest.Mock).mockReturnValue(mockRouter);
    (useSWR as jest.Mock).mockReturnValue({ data: data, error: null });
    render(<Search />);
    const SearchTitle = screen.getByRole('heading', {
      name: /search/i,
    });
    expect(SearchTitle).toBeInTheDocument();
  });

  test('render search data empty', () => {
    const mockRouter = {
      query: { search: 'search', page: '1' },
    };
    (useRouter as jest.Mock).mockReturnValue(mockRouter);
    (useSWR as jest.Mock).mockReturnValue({ data: [], error: null });
    render(<Search />);
    const SearchTitle = screen.getByRole('heading', {
      name: /search/i,
    });
    expect(SearchTitle).toBeInTheDocument();

    const result = screen.getByText(/there is no result for/i);
    expect(result).toBeInTheDocument();
  });

  test('loading page', async () => {
    const mockRouter = {
      query: { search: 'search', page: '1' },
    };
    (useRouter as jest.Mock).mockReturnValue(mockRouter);
    (useSWR as jest.Mock).mockReturnValue({ data: undefined });
    render(<Search />);
    const loading = screen.getByTestId('spinner');
    expect(loading).toBeInTheDocument();
  });

  test('page error', async () => {
    const mockRouter = {
      query: { search: 'search', page: '1' },
    };
    (useRouter as jest.Mock).mockReturnValue(mockRouter);
    (useSWR as jest.Mock).mockReturnValue({
      data: [],
      error: true,
    });
    render(<Search />);
  });
});
