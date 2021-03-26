import { QuoteText } from "./QuoteText";
import { QuoteAuthor } from "./QuoteAuthor";
import { useState } from "react";
import { getQuote, quotes } from "../services/quoteService";
import { Quote } from "../model/quoteInterface";
import { NewQuoteButton, ButtonWrapper } from "./NewQuoteButton";
import { getColor } from "../services/colorService";

interface QuteBoxProps {
  color: string;
  setColor: any;
}

function QuoteBox(props: QuteBoxProps) {
  const [quote, setQuote] = useState<Quote>(getQuote(quotes));

  const getNewQuote = () => {
    setQuote(getQuote(quotes));
    props.setColor(getColor());
  };

  return (
    <>
      <QuoteText theme={{ color: props.color }}>{quote.text}</QuoteText>
      <QuoteAuthor theme={{ color: props.color }}>- {quote.author}</QuoteAuthor>
      <ButtonWrapper>
        <NewQuoteButton theme={{ bgcolor: props.color }} onClick={getNewQuote}>
          New Quote
        </NewQuoteButton>
      </ButtonWrapper>
    </>
  );
}
export default QuoteBox;
