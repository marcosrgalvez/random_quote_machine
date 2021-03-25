import { useState } from "react";
import { getQuote } from "./quoteService";

function App() {
  interface Quote {
    text: string;
    author: string;
  }

  const [quote, setQuote] = useState<Quote>(getQuote());

  const getNewQuote = () => {
    setQuote(getQuote());
  };

  return (
    <>
      <p>{quote.text}</p>
      <p>{quote.author}</p>
      <button onClick={getNewQuote}>New Quote</button>
    </>
  );
}

export default App;
