import { useState } from "react";

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

function App() {
  interface Quote {
    text: string,
    author: string
  }

  const [quote,setQuote] = useState<Quote>(quotes[0])

  const getNewQuote = () => {
    setQuote(quotes[1])
  }


  return (
    <>
      <p>{quote.text}</p>
      <p>{quote.author}</p>
      <button onClick={getNewQuote}>New Quote</button>
    </>
  );
}

export default App;
