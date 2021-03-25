import styled from "styled-components";
import { colors } from "../ui/GlobalStyles/theme";

export const QuoteText = styled.p`
  text-align: center;
  letter-spacing: 0.1rem;

  font-weight: 500;
  font-size: 1.7rem;
  color: ${(props) => props.color || colors[0]};
`;
