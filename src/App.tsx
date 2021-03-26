import { useState } from "react";
import { getColor, getQuote } from "./quoteService";
import styled from "styled-components";
import { QuoteText } from "./_components/QuoteText";
import { QuoteAuthor } from "./_components/QuoteAuthor";
import { NewQuoteButton, ButtonWrapper } from "./_components/NewQuoteButton";

const Wrapper = styled.div`
  width: 450px;
  margin: auto;
  margin-top: 10%;

  padding: 2rem 3rem;

  background-color: white;

  border-radius: 3px;
`;

function App() {
  interface Quote {
    text: string;
    author: string;
  }

  const [quote, setQuote] = useState<Quote>(getQuote());
  const [color, setColor] = useState<string>(getColor());

  const getNewQuote = () => {
    setQuote(getQuote());
  };

  const getNewColor = () => {
    setColor(getColor());
  };

  return (
    <Wrapper>
      <QuoteText color={color}>{quote.text}</QuoteText>
      <QuoteAuthor color={color}>- {quote.author}</QuoteAuthor>
      <ButtonWrapper>
        <NewQuoteButton
          onClick={() => {
            getNewColor();
            getNewQuote();
          }}
          color={color}
        >
          New Quote
        </NewQuoteButton>
      </ButtonWrapper>
    </Wrapper>
  );
}

export default App;
