import robot from 'robotjs';

const matchRequiredAndPointColors = (point, ...colors) => {
  const [x, y] = point;

  const pointColor = robot.getPixelColor(x, y);
  const colorMatch = colors.find((color) => color === pointColor);

  return colorMatch !== undefined;
};

export default matchRequiredAndPointColors;
