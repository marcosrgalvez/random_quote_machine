import { createGlobalStyle } from "styled-components";
import { reboot } from "./reboot";
import { reset } from "./reset";
import { color } from "./theme";

export const GlobalStyles = createGlobalStyle`
    ${reset}
    ${reboot}
    
    body{
        font-family: 'Raleway', sans-serif;
        
        background-color: ${color}
    }
`;
