import { colors } from "./ui/GlobalStyles/theme";

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
  {
    text: "I attribute my success to this: I never gave or took any excuse.",
    author: "Florence Nightingale",
  },
  {
    text: "You miss 100% of the shots you don’t take.",
    author: "Wayne Gretzky",
  },
  {
    text:
      "I’ve missed more than 9000 shots in my career. I’ve lost almost 300 games. 26 times I’ve been trusted to take the game winning shot and missed. I’ve failed over and over and over again in my life. And that is why I succeed.",
    author: "Michael Jordan",
  },
];

export const getQuote = () => quotes[Math.floor(Math.random() * quotes.length)];
export const getColor = () => colors[Math.floor(Math.random() * colors.length)];
