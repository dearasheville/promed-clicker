import robot from 'robotjs';

const mouseStandartDelay = 250;
const mouseSelectDelay = 100;

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
  selectField: ({ x, y }, style = 'standart', delay = mouseSelectDelay) => {
    robot.setMouseDelay(delay);

    const button = 'left';

    switch (style) {
      case 'standart':
        robot.moveMouse(x, y);
        robot.mouseClick(button);
        robot.mouseClick(button);
        robot.mouseClick(button);
        break;
      case 'smooth':
        robot.moveMouseSmooth(x, y);
        robot.mouseClick(button);
        robot.mouseClick(button);
        robot.mouseClick(button);
        break;
      default:
        break;
    }

    robot.setMouseDelay(mouseStandartDelay);
  },
};

export default mouse;
