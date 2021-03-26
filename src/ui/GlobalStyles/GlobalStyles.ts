import { createGlobalStyle } from "styled-components";
import { reboot } from "./reboot";
import { reset } from "./reset";

export const GlobalStyles = createGlobalStyle`
    ${reset}
    ${reboot}
    
    body{
        font-family: 'Raleway', sans-serif;
        transition: background-color 300ms linear;
    }
`;
