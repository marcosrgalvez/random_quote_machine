import { render, screen } from '@testing-library/react';
import App from './App';

test('muestra una frase', () => {
  render(<App />);
  const quoteElement = screen.getByText(/Eighty percent of success is showing up./i);
  expect(quoteElement).toBeInTheDocument();
});

test('muestra el autor de la frase', () => {
  render(<App />);
  const authorElement = screen.getByText(/Woody Allen/i);
  expect(authorElement).toBeInTheDocument();
});

test('muestra un "boton" con la frase New quote', () => {
  render(<App />);
  const newQuoteButton = screen.getByRole('button', { name: /New Quote/i});
  expect(newQuoteButton).toBeInTheDocument();
});