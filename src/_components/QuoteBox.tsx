import { QuoteText } from "./styles/QuoteText";
import { QuoteAuthor } from "./styles/QuoteAuthor";
import { useState } from "react";
import { getQuote } from "../services/quoteService";
import { Quote } from "../model/quoteInterface";
import { NewQuoteButton, ButtonWrapper } from "./styles/NewQuoteButton";
import { getColor } from "../services/colorService";

interface QuteBoxProps {
  color: string;
  setColor: any;
}

function QuoteBox(props: QuteBoxProps) {
  const [quote, setQuote] = useState<Quote>(getQuote({ text: "", author: "" }));

  const getNewQuote = () => {
    setQuote(getQuote(quote));
    props.setColor(getColor(props.color));
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
      </ButtonWrapper>
    </>
  );
}
export default QuoteBox;
