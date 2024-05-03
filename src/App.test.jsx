import { render, screen } from '@testing-library/react';

import App from '../src/App.jsx';

describe('App', () => {
  it('renders Hello', () => {
    render(<App />);
    expect(screen.getByRole('p').textContent).toMatch(/hello/i);
  });
});
