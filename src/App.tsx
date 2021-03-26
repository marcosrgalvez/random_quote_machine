import { useState } from "react";
import { createGlobalStyle } from "styled-components";
import { Wrapper } from "./_components/Wrapper";
import QuoteBox from "./_components/QuoteBox";
import { getColor } from "./services/colorService";

function App(this: any) {
  const [color, setColor] = useState(getColor());

  const BodyBgColor = createGlobalStyle`
    body {
      background-color: ${color}
    }
  `;

  return (
    <Wrapper>
      <QuoteBox color={color} setColor={setColor} />
      <BodyBgColor />
    </Wrapper>
  );
}
export default App;
