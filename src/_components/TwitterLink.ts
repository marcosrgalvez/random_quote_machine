import styled from "styled-components";

export const TwitterLink = styled.a`
  margin-top: 2rem;
  padding: 0.7rem;
  border-radius: 0.25rem;
  border: none;

  font-size: 0.85rem;
  color: white;

  background-color: ${(props) => props.theme.bgcolor};
  transition: background-color 300ms linear;
`;
