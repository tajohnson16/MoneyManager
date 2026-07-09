import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

beforeEach(() => {
  window.history.pushState({}, '', '/MoneyManager/');
  sessionStorage.clear();
});

test('renders the assessment entry point', () => {
  const { getByText } = render(<App />);

  expect(getByText('Take the assessment now!')).toBeInTheDocument();
});
