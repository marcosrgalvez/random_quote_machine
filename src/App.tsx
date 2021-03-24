import { useState } from "react";

function App() {

  const [quote,setQuote] = useState(['Eighty percent of success is showing up.','Woody Allen'])

  const getNewQuote = () => {
    setQuote(["Winning isn’t everything, but wanting to win is.","Vince lombardi"])
  }

  return (
    <>
      <p>{quote[0]}</p>
      <p>{quote[1]}</p>
      <button onClick={getNewQuote}>New Quote</button>
      <a title="Tweet this quote!"></a>
    </>
  );
}

export default App;
