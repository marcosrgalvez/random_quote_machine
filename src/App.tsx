import { useState } from "react";
import { Wrapper } from "./_components/styles//Wrapper";
import QuoteBox from "./_components/QuoteBox";
import { getColor } from "./services/colorService";

function App(this: any) {
  const [color, setColor] = useState(getColor(""));
  document.body.style.backgroundColor = color;

  return (
    <Wrapper>
      <QuoteBox color={color} setColor={setColor} />
    </Wrapper>
  );
}
export default App;
