import { Button } from '@/components/button';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

const mockProps = {
  text: 'test',
  backgroundColor: expect.any(String),
  onClick: jest.fn(),
};

describe('Button Component Test', () => {
  beforeEach(() => {
    const { rerender } = render(<Button {...mockProps} />);
  });

  it('should mount the component correctly', () => {
    // Element Retrieval
    const buttonElement = screen.getByRole('button');

    // Assertions
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveTextContent('test');
  });
});
