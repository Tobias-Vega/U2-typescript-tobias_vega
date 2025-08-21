enum Color {
  "Red",
  "Green",
  "Blue",
}

const messageColor = (color: Color): string => {
  return `The color is ${Color[color]}`;
}

console.log(messageColor(0));