import screen from '../peripherals/screen.js';

const doPointColorAndListColorMatch = (point, ...colors) => {
  const normalizedColors = colors.flat(Infinity);

  const color = screen.pointColor(point);
  const doColorsMatch = normalizedColors.includes(color);

  return doColorsMatch;
};

const getFirstPointMatchesListColor = (point1, point2, ...colors) => {
  const { width, height } = screen.size();

  const startPoint = point1 || {
    x: 0,
    y: 0,
  };

  const endPoint = point2 || {
    x: width,
    y: height,
  };

  for (let { y } = startPoint; y < endPoint.y; y += 1) {
    for (let { x } = startPoint; x < endPoint.x; x += 1) {
      const point = { x, y };

      if (doPointColorAndListColorMatch(point, colors)) {
        return point;
      }
    }
  }

  return false;
};

export {
  doPointColorAndListColorMatch,
  getFirstPointMatchesListColor,
};
