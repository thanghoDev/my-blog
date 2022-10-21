import { render, screen } from '@testing-library/react';
import Header from '../Header';

describe('Header', () => {
  it('renders a Header', () => {
    render(<Header />);
    const textLogo = screen.getByRole('link', {
      name: /meranda/i,
    });
    expect(textLogo).toBeInTheDocument();

    const searchInput = screen.getByRole('searchbox', {
      name: /search/i,
    });
    expect(searchInput).toBeInTheDocument();
  });
});
