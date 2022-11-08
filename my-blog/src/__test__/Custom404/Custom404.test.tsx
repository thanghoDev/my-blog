import React from 'react';
import { render, screen } from '@testing-library/react';

import Custom404 from '@/pages/404';

describe('testing custom 404 page', () => {
  test('render custom 404 page', () => {
    const { container } = render(<Custom404 />);
    expect(container).toMatchSnapshot();
    const heading = screen.getByText(/Oooops.../i);
    expect(heading).toBeInTheDocument();
    const title = screen.getByText(/that page cannot be found/i);
    expect(title).toBeInTheDocument();
  });
});
