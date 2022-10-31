import React from 'react';
import { render, screen } from '@testing-library/react';

import PostList from '../PostList';

describe('testing PostList section', () => {
  const politics = [
    {
      id: 1,
      title: 'title',
      description: 'description',
      category: 'postList',
      view: 150,
      images: 'https://i.ibb.co/10hj3h1/PostList.jpg',
      alt: 'postList',
      content: 'content',
    },
  ];
  const HeadingTitle = 'headingTitle';
  test('render section', () => {
    const { container } = render(
      <PostList title={HeadingTitle} data={politics} />
    );
    expect(container.firstChild).toMatchSnapshot();
    const heading = screen.getByRole('heading', {
      name: /headingTitle/i,
    });
    expect(heading).toBeInTheDocument();

    const image = screen.getByRole('img', {
      name: /postList/i,
    });
    expect(image).toBeInTheDocument();

    const title = screen.getByRole('heading', {
      name: 'headingTitle',
    });
    expect(title).toBeInTheDocument();
  });
});
