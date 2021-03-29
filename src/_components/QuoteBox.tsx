import { QuoteText } from "./QuoteText";
import { QuoteAuthor } from "./QuoteAuthor";
import { useState } from "react";
import { getQuote } from "../services/quoteService";
import { Quote } from "../model/quoteInterface";
import { NewQuoteButton, ButtonWrapper } from "./NewQuoteButton";
import { getColor } from "../services/colorService";

interface QuteBoxProps {
  color: string;
  setColor: any;
}

function QuoteBox(props: QuteBoxProps) {
  const [quote, setQuote] = useState<Quote>(getQuote({ text: "", author: "" }));

  const getNewQuote = () => {
    setQuote(getQuote(quote));
    props.setColor(getColor());
  };

  return (
    <>
      <QuoteText title="quote" theme={{ color: props.color }}>
        {quote.text}
      </QuoteText>
      <QuoteAuthor theme={{ color: props.color }}>- {quote.author}</QuoteAuthor>
      <ButtonWrapper>
        <NewQuoteButton theme={{ bgcolor: props.color }} onClick={getNewQuote}>
          New Quote
        </NewQuoteButton>
        <a
          href="https://twitter.com/intent/tweet"
          target="_blank"
          rel="noreferrer"
        >
          Tweet this quote!
        </a>
      </ButtonWrapper>
    </>
  );
}
export default QuoteBox;
