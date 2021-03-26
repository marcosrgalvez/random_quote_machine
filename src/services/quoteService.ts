import { Quote } from "../model/quoteInterface";

const quotes = [
  {
    text: "Eighty percent of success is showing up.",
    author: "Woody Allen",
  },
  {
    text:
      "Twenty years from now you will be more disappointed by the things that you didn’t do than by the ones you did do, so throw off the bowlines, sail away from safe harbor, catch the trade winds in your sails. Explore, Dream, Discover.",
    author: "Vince lombardi",
  },
];

export const getQuote = (oldQuote: Quote) => {
  let newQuote = quotes[Math.floor(Math.random() * quotes.length)];
  while (oldQuote === newQuote) {
    newQuote = quotes[Math.floor(Math.random() * quotes.length)];
  }
  return newQuote;
};
