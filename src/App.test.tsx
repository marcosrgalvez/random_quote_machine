import { render, screen } from '@testing-library/react';
import App from './App';


describe("muestra los elementos de Random Quote Machine", () => {
  it('muestra una frase', () => {
    render(<App />);
    const quoteElement = screen.getByText(/Eighty percent of success is showing up./i);
    expect(quoteElement).toBeInTheDocument();
  });

  it('muestra el autor de la frase', () => {
    render(<App />);
    const authorElement = screen.getByText(/Woody Allen/i);
    expect(authorElement).toBeInTheDocument();
  });

  it('muestra un "boton" con la frase New quote', () => {
    render(<App />);
    const newQuoteButton = screen.getByRole('button', { name: /New Quote/i});
    expect(newQuoteButton).toBeInTheDocument();
  });

  it('muestra un elemento con titulo Tweet this quote', () => {
    render(<App />);
    const tweetElement = screen.getByTitle(/Tweet this quote!/i);
    expect(tweetElement).toBeInTheDocument();
  });
})