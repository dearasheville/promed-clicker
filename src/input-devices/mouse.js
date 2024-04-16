import robot from 'robotjs';

const mouseStandartDelay = 250;

const mouse = {
  move: ({ x, y }, style = 'standart', delay = mouseStandartDelay) => {
    robot.setMouseDelay(delay);

    switch (style) {
      case 'standart':
        robot.moveMouse(x, y);
        break;
      case 'smooth':
        robot.moveMouseSmooth(x, y);
        break;
      default:
        break;
    }

    robot.setMouseDelay(mouseStandartDelay);
  },
  click: ({ x, y }, button = 'left', style = 'standart', delay = mouseStandartDelay) => {
    robot.setMouseDelay(delay);

    switch (style) {
      case 'standart':
        robot.moveMouse(x, y);
        robot.mouseClick(button);
        break;
      case 'smooth':
        robot.moveMouseSmooth(x, y);
        robot.mouseClick(button);
        break;
      default:
        break;
    }

    robot.setMouseDelay(mouseStandartDelay);
  },
};

export default mouse;
