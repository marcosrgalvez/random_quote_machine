import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import App from './App';


describe("Random quote machine", () => {
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

  it('actualiza la frase', () => {
    render(<App />);
    const newQuoteElement = screen.getByRole('button', { name: /New Quote/i});
    userEvent.click(newQuoteElement)
    const quoteElement = screen.getByText(/Winning isn’t everything, but wanting to win is./i);
    expect(quoteElement).toBeInTheDocument();
  });

  it('actualiza el autor de la frase', () => {
    render(<App />);
    const newQuoteElement = screen.getByRole('button', { name: /New Quote/i});
    userEvent.click(newQuoteElement)
    const authorElement = screen.getByText(/Vince Lombardi/i);
    expect(authorElement).toBeInTheDocument();
  });
})
