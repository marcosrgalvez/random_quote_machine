import { useState } from "react";

function App() {

  const [quote,setQuote] = useState('Eighty percent of success is showing up.')

  const getNewQuote = () => {
    setQuote("Winning isn’t everything, but wanting to win is.") 
  }

  return (
    <>
      <p>{quote}</p>
      <p>Woody Allen</p>
      <button onClick={getNewQuote}>New Quote</button>
      <a title="Tweet this quote!"></a>
    </>
  );
}

export default App;
