import React from 'react';
import Politics from '../Politics';

import { render, screen } from '@testing-library/react';

describe('testing Politics section', () => {
  const politics = [
    {
      id: 1,
      title: 'title',
      description: 'description',
      category: 'politics',
      view: 150,
      images: 'https://i.ibb.co/10hj3h1/politics.jpg',
      alt: 'Politics',
    },
  ];
  test('render section', () => {
    const { container } = render(<Politics politics={politics} />);
    expect(container.firstChild).toMatchSnapshot();
    const heading = screen.getByRole('heading', {
      name: /politics/i,
    });
    expect(heading).toBeInTheDocument();

    const image = screen.getByRole('img', {
      name: /politics/i,
    });
    expect(image).toBeInTheDocument();

    const title = screen.getByRole('heading', {
      name: 'title',
    });
    expect(title).toBeInTheDocument();
  });
});
