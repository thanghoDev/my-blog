import React, { ReactNode } from 'react';
import { render } from '@testing-library/react';
import { useRouter } from 'next/router';

import Layout from '..';
jest.mock('next/router', () => ({
  __esModule: true,
  useRouter: jest.fn(),
}));

describe('testing layout components', () => {
  const mockRouter = {
    isFallback: false,
    isReady: true,
    query: { search: 'search' },
  };
  (useRouter as jest.Mock).mockReturnValue(mockRouter);
  test('render layout component', () => {
    const children: ReactNode = (
      <div>
        <h1>this is header</h1>
        <h2>this title</h2>
      </div>
    );
    const { container } = render(<Layout>{children} </Layout>);
    expect(container).toMatchSnapshot();
  });
});
