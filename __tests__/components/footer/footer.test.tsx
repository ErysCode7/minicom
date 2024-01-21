import { configure, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Footer from '@/components/footer/footer';

jest.mock('next/router', () => ({
  useRouter() {
    return {
      route: '/',
      pathname: '',
      query: '',
      asPath: '',
      push: jest.fn(),
      events: {
        on: jest.fn(),
        off: jest.fn(),
      },
      beforePopState: jest.fn(() => null),
      prefetch: jest.fn(() => null),
    };
  },
}));

describe('Footer Component Test', () => {
  beforeEach(() => {
    configure({
      throwSuggestions: true,
    });
    render(<Footer />);
  });

  it('should mount the component correctly', () => {
    const useRouter = jest.spyOn(require('next/router'), 'useRouter');

    useRouter.mockImplementation(() => ({
      route: '/',
      pathname: '',
      query: '',
      asPath: '',
      push: jest.fn(),
      events: {
        on: jest.fn(),
        off: jest.fn(),
      },
      beforePopState: jest.fn(() => null),
      prefetch: jest.fn(() => null),
    }));

    // Element Retrieval
    const labelElement = screen.getByRole('heading', {
      name: /minicom ©2024\. all rights reserved/i,
    });

    // Assertions
    expect(labelElement).toBeInTheDocument();
  });
});
