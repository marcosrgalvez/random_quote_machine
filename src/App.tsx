import { useState } from "react";

function App() {
  interface Quote {
    text: string,
    author: string
  }

  const [quote,setQuote] = useState<Quote>({
    text:'Eighty percent of success is showing up.',
    author:'Woody Allen'
  })

  const getNewQuote = () => {
    setQuote({
      text: "Winning isn’t everything, but wanting to win is.",
      author: "Vince lombardi"
      })
  }


  return (
    <>
      <p title="quote-text">{quote.text}</p>
      <p>{quote.author}</p>
      <button onClick={getNewQuote}>New Quote</button>
      <a title="Tweet this quote!"></a>
    </>
  );
}

export default App;
