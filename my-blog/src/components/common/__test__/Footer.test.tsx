import Footer from '../Footer';
import { render, screen } from '@testing-library/react';

describe('Footer', () => {
  test('renders a footer', () => {
    render(<Footer />);
    const contentInfo = screen.getByRole('contentinfo');
    expect(contentInfo).toBeInTheDocument();
  });
});
