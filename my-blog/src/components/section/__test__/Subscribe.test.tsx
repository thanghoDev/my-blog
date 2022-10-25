import React from 'react';
import { render, screen } from '@testing-library/react';

import Subscribe from '../Subscribe';

describe('testing Subscribe section', () => {
  test('render Subscribe section', () => {
    const { container } = render(<Subscribe />);
    expect(container.firstChild).toMatchSnapshot();
    const heading = screen.getByText(/newsletter subscribe/i);
    expect(heading).toBeInTheDocument();

    const input = screen.getByRole('textbox');
    expect(input).toBeInTheDocument();
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
  });
});
