import React from 'react';
import { render, screen } from '@testing-library/react';
import { Loading } from '@/components';

// Mocking framer-motion's useAnimate hook
jest.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...rest }) => <div {...rest}>{children}</div>,
    span: ({ children, ...rest }) => <span {...rest}>{children}</span>,
  },
  useAnimate: jest.fn(() => {
    const scope = { current: {} };
    const animate = jest.fn();
    return [scope, animate];
  }),
}));

test('renders loading animation', () => {
  render(<Loading />);

  // Use screen.getByLabelText since the text is inside an aria-label
  expect(
    screen.getByLabelText('Loading o9 Solutions Agenda')
  ).toBeInTheDocument();
});
