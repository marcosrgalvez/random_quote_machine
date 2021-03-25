import { useState } from "react";
import { getQuote } from "./quoteService";
import styled from "styled-components";
import { QuoteText } from "./_components/QuoteText";

const Wrapper = styled.div`
  width: 450px;
  margin: auto;
`;

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
    <Wrapper>
      <QuoteText>{quote.text}</QuoteText>
      <p>{quote.author}</p>
      <button onClick={getNewQuote}>New Quote</button>
    </Wrapper>
  );
}

export default App;
