enum Color {
  "Red",
  "Green",
  "Blue",
}

const messageColor = (color: Color): string => {
  return `The color is ${color}`;
}

console.log(messageColor(0));