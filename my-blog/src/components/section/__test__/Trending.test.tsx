import React from 'react';
import { render } from '@testing-library/react';

import Trending from '../Trending';

describe('testing Trending section', () => {
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
  test('render Trending section', () => {
    const { container } = render(<Trending trending={trending} />);
    expect(container.firstChild).toMatchSnapshot();
  });
  test('render fail section', () => {
    render(<Trending trending={undefined} />);
  });
});
