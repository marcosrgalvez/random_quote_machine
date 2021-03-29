import styled from "styled-components";

export const TwitterLink = styled.a`
  margin-top: 2rem;
  padding: 0.7rem;
  border-radius: 0.25rem;
  border: none;

  font-size: 0.85rem;
  color: white;
  text-decoration: none;

  background-color: ${(props) => props.theme.bgcolor};
  transition: background-color 300ms linear;

  &:hover {
    transition: opacity 150ms linear;
    opacity: 0.9;
    border: none;
  }

  &:focus {
    outline: 0;
  }
`;
