import { colors } from "../ui/GlobalStyles/theme";

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

export const getQuote = () => quotes[Math.floor(Math.random() * quotes.length)];
export const getColor = () => colors[Math.floor(Math.random() * colors.length)];
