import { render, screen } from '@testing-library/react';
import App from './App';

test('muestra una frase', () => {
  render(<App />);
  const linkElement = screen.getByText(/Eighty percent of success is showing up./i);
  expect(linkElement).toBeInTheDocument();
});
