import React from 'react';
import { render } from '@testing-library/react';
import App from '../App';

it('testing', () => {
  const { container } = render(<App />);
  expect(container.textContent).toMatch(/hello snowpack/i);
});
