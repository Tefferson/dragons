import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders login title', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Entrar/i);
  expect(linkElement).toBeInTheDocument();
});
