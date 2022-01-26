import { render, screen } from '@testing-library/react';
import App from './App';

test('renders app', async () => {
  render(<App />);
  const linkElement = await screen.findByText(/search:/i);
  expect(linkElement).toBeInTheDocument();
});
