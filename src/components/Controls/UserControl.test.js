import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Pokemon from '../../views/Pokemon';

test('pokemon should search by query', async () => {
  render(<Pokemon />);
  // loading
  const loading = await screen.getByText(/loading/i);
  expect(loading).toBeInTheDocument();
  // search textbox
  const searchBar = await screen.findByRole('textbox');
  // search button
  const button = screen.getByRole('button');
  userEvent.click(button);
  // Search butterfree with type then click
  const pokeName = 'butterfree';
  userEvent.type(searchBar, pokeName);
  //
  const poke = await screen.findAllByText(pokeName, { exact: false });
  const result = poke.map((item) => item.textContent);
  const handleName = (name) => name.toLowerCase().includes(pokeName);

  const checkName = result.every(handleName);
  expect(checkName).toBe(true);
});
