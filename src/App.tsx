import { useState } from "react";
import { getQuote } from "./services/quoteService";
import { QuoteText } from "./_components/QuoteText";
import { QuoteAuthor } from "./_components/QuoteAuthor";
import { NewQuoteButton, ButtonWrapper } from "./_components/NewQuoteButton";
import { getColor } from "./services/colorService";
import { createGlobalStyle } from "styled-components";
import { Wrapper } from "./_components/Wrapper";
import { Quote } from "./model/quoteInterface";

function App() {
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
