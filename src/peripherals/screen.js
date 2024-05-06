import robot from 'robotjs';

const screen = {
  mousePosition: () => {
    const point = robot.getMousePos();

    return point;
  },
  pointColor: (point = screen.mousePosition()) => {
    const { x, y } = point;

    const color = robot.getPixelColor(x, y);

    return color;
  },
  size: () => {
    const size = robot.getScreenSize();

    return size;
  },
};

export default screen;
