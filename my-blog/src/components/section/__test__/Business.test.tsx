import React from 'react';
import Business from '../Business';

import { render, screen } from '@testing-library/react';

describe('testing business section', () => {
  const business = [
    {
      id: 1,
      title: 'title',
      description: 'description',
      category: 'business',
      view: 150,
      images: 'https://i.ibb.co/10hj3h1/business.jpg',
      alt: 'business',
    },
  ];
  test('render section', () => {
    const { container } = render(<Business business={business} />);
    expect(container.firstChild).toMatchSnapshot();
    const heading = screen.getByRole('heading', {
      name: /business/i,
    });
    expect(heading).toBeInTheDocument();

    const image = screen.getByRole('img', {
      name: 'business',
    });
    expect(image).toBeInTheDocument();

    const title = screen.getByRole('heading', {
      name: 'title',
    });
    expect(title).toBeInTheDocument();
  });
});
