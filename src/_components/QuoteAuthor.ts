import styled from "styled-components";

export const QuoteAuthor = styled.p`
  margin-top: 1.25rem;
  text-align: right;

  color: ${(props) => props.theme.color};
  transition: color 300ms linear;

  font-weight: 500;
  font-size: 1rem;
`;
