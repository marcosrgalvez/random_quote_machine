const colors = [
  "#16A085",
  "#27AE60",
  "#2C3E50",
  "#F39C12",
  "#E74C3C",
  "#9B59B6",
  "#FB6964",
  "#342224",
  "#472E32",
  "#BDBB99",
  "#77B1A9",
  "#73A857",
];

export const getColor = (oldColor: string) => {
  let mewColor = colors[Math.floor(Math.random() * colors.length)];
  while (oldColor === mewColor) {
    mewColor = colors[Math.floor(Math.random() * colors.length)];
  }
  return mewColor;
};
