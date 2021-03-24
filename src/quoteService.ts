const quotes = [
    {
      text:'Eighty percent of success is showing up.',
      author:'Woody Allen'
    },
    {
      text: "Winning isn't everything, but wanting to win is.",
      author: "Vince lombardi"
    }
]

export const getQuote = () => quotes[Math.floor(Math.random() * quotes.length)]
