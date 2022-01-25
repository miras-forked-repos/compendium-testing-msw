import { render, screen } from '@testing-library/react';
import Pokemon from '../../views/Pokemon';

test.skip('pokemon should search by query', async () => {
  render(<Pokemon />);
  // search textbox returns user input
  // search button returns query match -> filter
});
