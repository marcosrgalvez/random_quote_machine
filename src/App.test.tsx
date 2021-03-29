import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";
import { Quote } from "./model/quoteInterface";
import * as quoteService from "./services/quoteService";
import { getQuote } from "./services/quoteService";
import QuoteBox from "./_components/QuoteBox";

describe("Funcionamiento correcto de los servicios", () => {
  it("devuelve siempre una frase distinta a la anterior", () => {
    let oneQuote: Quote = getQuote({ text: "", author: "" });
    let nextQuote: Quote = getQuote(oneQuote);

    for (let i = 0; i < 15; i++) {
      oneQuote = nextQuote;
      nextQuote = getQuote(oneQuote);
      expect(oneQuote).not.toBe(nextQuote);
    }
  });
});

describe("Random quote machine", () => {
  it("muestra siempre una frase distinta", () => {
    render(<App />);
    const newQuoteElement = screen.getByRole("button", { name: /New Quote/i });
    let oldText: string = "";
    let newText: string = "";
    for (let i = 0; i < 15; i++) {
      oldText = screen.getByTitle("quote").innerHTML;
      userEvent.click(newQuoteElement);
      newText = screen.getByTitle("quote").innerHTML;
      expect(oldText).not.toBe(newText);
    }
  });

  it("muestra una frase", () => {
    jest.spyOn(quoteService, "getQuote").mockReturnValue({
      text: "Eighty percent of success is showing up.",
      author: "Woody Allen",
    });

    render(<App />);
    const quoteElement = screen.getByText(
      /Eighty percent of success is showing up./i
    );
    expect(quoteElement).toBeInTheDocument();
  });

  it("muestra el autor de la frase", () => {
    jest.spyOn(quoteService, "getQuote").mockReturnValue({
      text: "Eighty percent of success is showing up.",
      author: "Woody Allen",
    });

    render(<App />);
    const authorElement = screen.getByText(/Woody Allen/i);
    expect(authorElement).toBeInTheDocument();
  });

  it("actualiza la frase", () => {
    jest
      .spyOn(quoteService, "getQuote")
      .mockReturnValueOnce({
        text: "Eighty percent of success is showing up.",
        author: "Woody Allen",
      })
      .mockReturnValueOnce({
        text:
          "Twenty years from now you will be more disappointed by the things that you didn’t do than by the ones you did do, so throw off the bowlines, sail away from safe harbor, catch the trade winds in your sails. Explore, Dream, Discover.",
        author: "Vince Lombardi",
      });

    render(<App />);
    expect(
      screen.getByText(/Eighty percent of success is showing up./i)
    ).toBeInTheDocument();
    const newQuoteElement = screen.getByRole("button", { name: /New Quote/i });
    userEvent.click(newQuoteElement);
    const quoteElement = screen.getByText(
      /Twenty years from now you will be more disappointed by the things that you didn’t do than by the ones you did do, so throw off the bowlines, sail away from safe harbor, catch the trade winds in your sails. Explore, Dream, Discover./i
    );
    expect(quoteElement).toBeInTheDocument();
  });

  it("actualiza el autor de la frase", () => {
    jest
      .spyOn(quoteService, "getQuote")
      .mockReturnValueOnce({
        text: "Eighty percent of success is showing up.",
        author: "Woody Allen",
      })
      .mockReturnValueOnce({
        text:
          "Twenty years from now you will be more disappointed by the things that you didn’t do than by the ones you did do, so throw off the bowlines, sail away from safe harbor, catch the trade winds in your sails. Explore, Dream, Discover.",
        author: "Vince Lombardi",
      });

    render(<App />);
    expect(screen.getByText(/Woody Allen/i)).toBeInTheDocument();
    const newQuoteElement = screen.getByRole("button", { name: /New Quote/i });
    userEvent.click(newQuoteElement);
    const authorElement = screen.getByText(/Vince Lombardi/i);
    expect(authorElement).toBeInTheDocument();
  });

  it("twittea la cita", () => {
    jest.spyOn(quoteService, "getQuote").mockReturnValueOnce({
      text: "Eighty percent of success is showing up.",
      author: "Woody Allen",
    });
    render(<App />);
    const linkElement = screen.getByRole("link", { name: /Tweet this quote/i });
    expect(linkElement).toHaveAttribute(
      "href",
      "https://twitter.com/intent/tweet?text=Eighty%20percent%20of%20success%20is%20showing%20up.%20Woody%20Allen"
    );
  });
});
