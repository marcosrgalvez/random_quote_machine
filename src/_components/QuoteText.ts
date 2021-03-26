import styled from "styled-components";

export const QuoteText = styled.p`
  text-align: center;
  letter-spacing: 0.1rem;

  color: ${(props) => props.theme.color};
  transition: color 300ms linear;

  font-weight: 500;
  font-size: 1.7rem;
`;
