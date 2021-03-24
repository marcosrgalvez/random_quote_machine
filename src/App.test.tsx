import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
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
    const newQuoteElement = screen.getByRole('button', { name: /New Quote/i});
    expect(newQuoteElement).toBeInTheDocument();
  });

  it('muestra un elemento con titulo Tweet this quote', () => {
    render(<App />);
    const tweetElement = screen.getByTitle(/Tweet this quote!/i);
    expect(tweetElement).toBeInTheDocument();
  });
})

describe("Funcionalidad de los elementos de Random Quote Machine", () => {
  it('al hacer click en new quote, muestra una nueva frase', () => {
    render(<App />);
    const quoteTextElement = screen.getByTitle('quote-text');
    const quoteText = quoteTextElement.textContent === null ? '' : quoteTextElement.textContent  
    const newQuoteElement = screen.getByRole('button', { name: /New Quote/i});
    userEvent.click(newQuoteElement)
    expect(screen.queryByText(quoteText)).not.toBeInTheDocument();
    expect(screen.getByTitle('quote-text')).toBeInTheDocument();
  });
  
  it('al hacer click en new quote, muestra un nuevo autor', () => {
    render(<App />);
    const newQuoteElement = screen.getByRole('button', { name: /New Quote/i});
    userEvent.click(newQuoteElement)
    const authorElement = screen.getByText(/Vince Lombardi/i);
    expect(authorElement).toBeInTheDocument();
  });

})