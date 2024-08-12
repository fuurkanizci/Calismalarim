import { render, screen } from '@testing-library/react';
import App from './App';
import Index from './components/odev-2';


test('renders learn react link', () => {
  render(<Index />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
