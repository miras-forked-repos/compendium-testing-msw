import { render, screen } from '@testing-library/react';
import Pokemon from './Pokemon';

test('should render a list of pokemon', async () => {
  render(<Pokemon />);
  // loading state comes first
  const loading = screen.getByText(/loading/i);
  expect(loading).toBeInTheDocument();
  // rendering pokemon name, async so getByRole()
  const pokemons = await screen.findAllByRole('listitem');
  // rendering search text box
  const textBox = screen.getByRole('textbox');
  // rendering search button
  const button = screen.getByRole('button', {
    name: /search/i,
  });

  expect(pokemons).toHaveLength(20);
  expect(textBox).toBeInTheDocument();
  expect(button).toBeInTheDocument();
});
