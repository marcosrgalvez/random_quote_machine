import { QuoteText } from "./QuoteText";
import { QuoteAuthor } from "./QuoteAuthor";
import { useState } from "react";
import { getQuote } from "../services/quoteService";
import { Quote } from "../model/quoteInterface";
import { NewQuoteButton, ButtonWrapper } from "./NewQuoteButton";
import { TwitterLink } from "./TwitterLink";
import { getColor } from "../services/colorService";

interface QuteBoxProps {
  color: string;
  setColor: any;
}

function QuoteBox(props: QuteBoxProps) {
  const [quote, setQuote] = useState<Quote>(getQuote({ text: "", author: "" }));
  const [twitterLink, setTwitterLink] = useState<string>(
    "https://twitter.com/intent/tweet?text=" +
      (quote.text + " " + quote.author).replaceAll(" ", "%20")
  );

  const getNewQuote = () => {
    setQuote(getQuote(quote));
    props.setColor(getColor());
  };

  const updateTweetLink = (quote: Quote) => {
    let url = "https://twitter.com/intent/tweet?text=";
    url += (quote.text + " " + quote.author).replaceAll(" ", "%20");
    setTwitterLink(url);
  };

  return (
    <>
      <QuoteText title="quote" theme={{ color: props.color }}>
        {quote.text}
      </QuoteText>
      <QuoteAuthor theme={{ color: props.color }}>- {quote.author}</QuoteAuthor>
      <ButtonWrapper>
        <NewQuoteButton
          theme={{ bgcolor: props.color }}
          onClick={() => {
            getNewQuote();
            updateTweetLink(quote);
          }}
        >
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
