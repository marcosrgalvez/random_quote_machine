import { QuoteText } from "./styles/QuoteText";
import { QuoteAuthor } from "./styles/QuoteAuthor";
import { useEffect, useState } from "react";
import { getQuote } from "../services/quoteService";
import { Quote } from "../model/quoteInterface";
import { NewQuoteButton, ButtonWrapper } from "./styles/NewQuoteButton";
import { TwitterLink } from "./styles/TwitterLink";
import { getColor } from "../services/colorService";

interface QuoteBoxProps {
  color: string;
  setColor: any;
}

function QuoteBox(props: QuoteBoxProps) {
  const [quote, setQuote] = useState<Quote>(getQuote({ text: "", author: "" }));
  const [twitterLink, setTwitterLink] = useState<string>(
    "https://twitter.com/intent/tweet?text=" +
      (quote.text + " " + quote.author).replaceAll(" ", "%20")
  );

  useEffect(() => {
    setTwitterLink(
      "https://twitter.com/intent/tweet?text=" +
        (quote.text + " " + quote.author).replaceAll(" ", "%20")
    );
  }, [quote]);

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
        <TwitterLink
          href={twitterLink}
          target="_blank"
          rel="noreferrer"
          theme={{ bgcolor: props.color }}
        >
          Tweet this quote!
        </TwitterLink>
      </ButtonWrapper>
    </>
  );
}
export default QuoteBox;
