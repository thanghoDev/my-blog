import React from 'react';
import { render, screen } from '@testing-library/react';

import Carousels from '../Carousels';

describe('testing Carousels', () => {
  const carousel = [
    {
      id: 1,
      title: 'title',
      description: 'description',
      category: 'carousel',
      view: 150,
      images: 'https://i.ibb.co/10hj3h1/carousel.jpg',
      alt: 'carousel',
    },
  ];
  test('render Carousels', () => {
    const { container } = render(<Carousels carousel={carousel} />);
    expect(container.firstChild).toMatchSnapshot();

    const title = screen.getByText(/title/i);
    expect(title).toBeInTheDocument();

    const image = screen.getByRole('img', {
      name: /carousel/i,
    });
    expect(image).toBeInTheDocument();
  });
});
