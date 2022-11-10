import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import SearchPosts from '..';
import { useRouter } from 'next/router';

jest.mock('next/router', () => ({
  __esModule: true,
  useRouter: jest.fn(),
}));

describe('testing searchPosts', () => {
  const searchValue = 'search title';
  const mockOnSearchValueChange = jest.fn();

  test('render search post', () => {
    const mockRouter = {
      push: jest.fn(),
    };
    (useRouter as jest.Mock).mockReturnValue(mockRouter);
    render(
      <SearchPosts
        searchValue={searchValue}
        onSearchValueChange={mockOnSearchValueChange}
      />
    );
    const searchInput = screen.getByRole('textbox', {
      name: /search/i,
    });
    fireEvent.change(searchInput, { target: { value: 'dolor' } });
    expect(mockOnSearchValueChange).toHaveBeenCalledWith('dolor');

    const searchButton = screen.getByRole('button');
    fireEvent.click(searchButton);
    expect(mockRouter.push).toHaveBeenCalledWith(
      '/search/search title',
      undefined,
      { shallow: true }
    );
    expect(searchButton).toBeInTheDocument();
  });
});
