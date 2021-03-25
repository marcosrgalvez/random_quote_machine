import { useState } from "react";
import { getQuote } from "./quoteService";
import styled from "styled-components";
import { QuoteText } from "./_components/QuoteText";
import { QuoteAuthor } from "./_components/QuoteAuthor";
import { NewQuoteButton, ButtonWrapper } from "./_components/NewQuoteButton";

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
      <QuoteAuthor>{quote.author}</QuoteAuthor>
      <ButtonWrapper>
        <NewQuoteButton onClick={getNewQuote}>New Quote</NewQuoteButton>
      </ButtonWrapper>
    </Wrapper>
  );
}

export default App;
