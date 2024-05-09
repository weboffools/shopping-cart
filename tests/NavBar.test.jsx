import { render, screen } from '@testing-library/react';

import NavBar from '../src/NavBar.jsx';

describe('NavBar component', () => {
  it('renders a list', () => {
    render(<NavBar />);
    expect(screen.getByRole('list')).toBeInTheDocument();
  });
});
