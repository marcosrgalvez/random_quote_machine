import styled from "styled-components";

export const NewQuoteButton = styled.button`
  margin-top: 2rem;
  padding: 0.7rem;
  border-radius: 0.25rem;

  cursor: pointer;

  font-size: 0.85rem;
  color: white;
  background-color: ${(props) => props.theme.background_color};

  :hover {
    transition: opacity 150ms linear;
    opacity: 0.9;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;
