import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";
import * as quoteService from "./services/quoteService";

describe("Random quote machine", () => {
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
});
