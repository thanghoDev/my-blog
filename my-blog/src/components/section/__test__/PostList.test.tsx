import React from 'react';
import { render, screen } from '@testing-library/react';

import PostList from '../PostList';

describe('testing Politics section', () => {
  const politics = [
    {
      id: 1,
      title: 'title',
      description: 'description',
      category: 'PostList',
      view: 150,
      images: 'https://i.ibb.co/10hj3h1/PostList.jpg',
      alt: 'PostList',
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
      name: /PostList/i,
    });
    expect(image).toBeInTheDocument();

    const title = screen.getByRole('heading', {
      name: 'title',
    });
    expect(title).toBeInTheDocument();
  });
});
