import { useState } from "react";

function App() {

  const [quote,setQuote] = useState('Eighty percent of success is showing up.')
  const [author,setAuthor] = useState('Woody Allen')

  const getNewQuote = () => {
    setQuote("Winning isn’t everything, but wanting to win is.")
    setAuthor("Vince lombardi")
  }

  return (
    <>
      <p>{quote}</p>
      <p>{author}</p>
      <button onClick={getNewQuote}>New Quote</button>
      <a title="Tweet this quote!"></a>
    </>
  );
}

export default App;
