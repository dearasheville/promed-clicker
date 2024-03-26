import robot from 'robotjs';

const doPointColorAndListColorMatch = (point, ...colors) => {
  const { x, y } = point;

  const pointColor = robot.getPixelColor(x, y);
  const doColorsMatch = !!colors.find((color) => color === pointColor);

  return doColorsMatch;
};

export default doPointColorAndListColorMatch;
