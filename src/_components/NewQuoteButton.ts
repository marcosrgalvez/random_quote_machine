import styled from "styled-components";
import { colors } from "../ui/GlobalStyles/theme";

export const NewQuoteButton = styled.button`
  margin-top: 2rem;
  padding: 0.7rem;
  border-radius: 0.25rem;
  border: none;

  cursor: pointer;

  font-size: 0.85rem;
  color: white;
  background-color: ${(props) => props.color || colors[0]};

  &:hover {
    transition: opacity 150ms linear;
    opacity: 0.9;
    border: none;
  }

  &:focus {
    outline: 0;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;
