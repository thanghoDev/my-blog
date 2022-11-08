import { render, screen } from '@testing-library/react';
import Header from '../Header';
import { useRouter } from 'next/router';

jest.mock('next/router', () => ({
  __esModule: true,
  useRouter: jest.fn(),
}));

describe('Header', () => {
  test('renders a Header', () => {
    const mockRouter = {
      isReady: true,
      query: { search: 'search' },
    };
    (useRouter as jest.Mock).mockReturnValue(mockRouter);
    render(<Header />);
    const textLogo = screen.getByRole('link', {
      name: /meranda/i,
    });
    expect(textLogo).toBeInTheDocument();

    const searchInput = screen.getByRole('textbox', {
      name: /search/i,
    });
    expect(searchInput).toBeInTheDocument();
  });
});
