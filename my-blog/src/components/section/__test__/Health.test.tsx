import React from 'react';
import { render, screen } from '@testing-library/react';

import Health from '../Health';

describe('testing Health section', () => {
  const health = [
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
    {
      id: 2,
      title: 'title2',
      description: 'description',
      category: 'resHeath',
      view: 150,
      images: 'https://i.ibb.co/10hj3h1/health.jpg',
      alt: 'resHeath',
      content: 'content',
    },
  ];
  test('render Health section', () => {
    const { container } = render(<Health health={health} />);
    expect(container.firstChild).toMatchSnapshot();

    const heading = screen.getByRole('heading', {
      name: /health/i,
    });
    expect(heading).toBeInTheDocument();

    const image = screen.getByRole('img', {
      name: /health/i,
    });
    expect(image).toBeInTheDocument();

    const description = screen.getByText(/description/i);
    expect(description).toBeInTheDocument();
  });
});
