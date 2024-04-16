import robot from 'robotjs';

const doPointColorAndListColorMatch = (point, ...colors) => {
  const { x, y } = point;
  const normalizedColors = colors.flat(Infinity);

  const pointColor = robot.getPixelColor(x, y);
  const doColorsMatch = normalizedColors.includes(pointColor);

  return doColorsMatch;
};

export default doPointColorAndListColorMatch;
