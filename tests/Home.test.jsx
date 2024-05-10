import { render, screen } from '@testing-library/react';

import Home from '../src/routes/home.jsx';

describe('Home component', () => {
  it('renders main heading', () => {
    render(<Home />);
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
});

describe('Home component', () => {
  it('renders image with src', () => {
    render(<Home />);
    expect(screen.getByRole('img')).toBeInTheDocument();
    expect(screen.getByRole('img')).toHaveAttribute('src');
  });
});


