import { useState } from "react";
import { getQuote } from "./quoteService";
import styled, { createGlobalStyle } from "styled-components";
import { QuoteText } from "./_components/QuoteText";
import { QuoteAuthor } from "./_components/QuoteAuthor";
import { NewQuoteButton, ButtonWrapper } from "./_components/NewQuoteButton";
import { getColor } from "./colorService";

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
  const [color, setColor] = useState(getColor());

  const getNewQuote = () => {
    setColor(getColor());
    setQuote(getQuote());
  };

  const BodyBgColor = createGlobalStyle`
    body {
      background-color: ${color}
    }
  `;

  return (
    <Wrapper>
      <QuoteText theme={{ color: color }}>{quote.text}</QuoteText>
      <QuoteAuthor theme={{ color: color }}>- {quote.author}</QuoteAuthor>
      <ButtonWrapper>
        <NewQuoteButton theme={{ bgcolor: color }} onClick={getNewQuote}>
          New Quote
        </NewQuoteButton>
      </ButtonWrapper>
      <BodyBgColor />
    </Wrapper>
  );
}
export default App;
