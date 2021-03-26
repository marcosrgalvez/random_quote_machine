import { colors } from "../ui/GlobalStyles/theme";
export const getColor = () => colors[Math.floor(Math.random() * colors.length)];
