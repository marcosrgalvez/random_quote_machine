import { useState } from "react";

function App() {
  interface Quote {
    quote: string,
    author: string
  }

  const [quote,setQuote] = useState<Quote>({
    quote:'Eighty percent of success is showing up.',
    author:'Woody Allen'
  })

  const getNewQuote = () => {
    setQuote({
      quote: "Winning isn’t everything, but wanting to win is.",
      author: "Vince lombardi"
      })
  }


  return (
    <>
      <p>{quote.quote}</p>
      <p>{quote.author}</p>
      <button onClick={getNewQuote}>New Quote</button>
      <a title="Tweet this quote!"></a>
    </>
  );
}

export default App;
