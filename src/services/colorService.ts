import { colors } from "../ui/GlobalStyles/theme";

export const getColor = (oldColor: string) => {
  let mewColor = colors[Math.floor(Math.random() * colors.length)];
  while (oldColor === mewColor) {
    mewColor = colors[Math.floor(Math.random() * colors.length)];
  }
  return mewColor;
};
