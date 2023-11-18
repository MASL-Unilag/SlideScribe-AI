




// import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElements = screen.getAllByText(/learn react/i);
  expect(linkElements.length).toBeGreaterThanOrEqual(1);
});
