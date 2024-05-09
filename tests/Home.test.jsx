import { render, screen } from '@testing-library/react';

import Home from '../src/Home.jsx';

describe('Home component', () => {
  it('renders main heading', () => {
    render(<Home />);
    expect(screen.getByRole('heading').textContent).toMatch(/shopping cart/i);
  });
});


