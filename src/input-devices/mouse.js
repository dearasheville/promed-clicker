import robot from 'robotjs';
import clipboardy from 'clipboardy';

import {
  sleepUntilGetCorrectPixel, toSleep,
} from '../utils/sleep.js';

const mouse = {
  move: (x, y, style = 'standart') => {
    switch (style) {
      case 'standart':
        robot.moveMouse(x, y);
        break;
      case 'smooth':
        robot.setMouseDelay(1000);
        robot.moveMouse(x, y);
        break;
      default:
        break;
    }
  },
  click: (x, y, style = 'standart') => {
    switch (style) {
      case 'standart':
        robot.moveMouse(x, y);
        robot.mouseClick();
        break;
      case 'smooth':
        robot.moveMouseSmooth(x, y);
        robot.mouseClick();
        break;
      default:
        break;
    }
  },
  copy: (style = 'lower') => {
    switch (style) {
      case 'lower':
        robot.mouseClick('right');

        robot.moveMouseSmooth(robot.getMousePos().x + 70, robot.getMousePos().y + 20);
        sleepUntilGetCorrectPixel([robot.getMousePos().x, robot.getMousePos().y], 'd3dfe9');

        robot.mouseClick();
        break;
      case 'upper':
        robot.mouseClick('right');

        robot.moveMouseSmooth(robot.getMousePos().x + 70, robot.getMousePos().y - 445);
        sleepUntilGetCorrectPixel([robot.getMousePos().x, robot.getMousePos().y], 'd3dfe9');

        robot.mouseClick();
        break;
      case 'test':
        robot.mouseClick('left', true);
        robot.mouseClick('left', true);

        robot.mouseClick('right');

        robot.moveMouse(robot.getMousePos().x + 200, robot.getMousePos().y + 20);
        sleepUntilGetCorrectPixel([robot.getMousePos().x, robot.getMousePos().y], 'd3dfe9');

        robot.mouseClick();
        break;
      case 'diagnost':
        robot.mouseClick('left', true);
        robot.mouseClick('left', true);

        toSleep(500); // ??

        robot.mouseClick('right');

        toSleep(500); // ??

        robot.moveMouse(robot.getMousePos().x + 200, robot.getMousePos().y + 85);
        sleepUntilGetCorrectPixel([robot.getMousePos().x, robot.getMousePos().y], 'd3dfe9');

        robot.mouseClick();
        break;
      default:
        break;
    }

    return clipboardy.readSync();
  },
  paste: (text, style = 'lower') => {
    switch (style) {
      case 'lower':
        clipboardy.writeSync(text);

        robot.mouseClick('right');

        robot.moveMouse(robot.getMousePos().x + 300, robot.getMousePos().y + 190);
        sleepUntilGetCorrectPixel([robot.getMousePos().x, robot.getMousePos().y], 'd3dfe9');

        robot.mouseClick();
        break;
      case 'upper':
        clipboardy.writeSync(text);

        robot.mouseClick('right');

        robot.moveMouse(robot.getMousePos().x + 10, robot.getMousePos().y - 300);
        sleepUntilGetCorrectPixel([robot.getMousePos().x, robot.getMousePos().y], 'd3dfe9');

        robot.mouseClick();
        break;
      default:
        break;
    }
  },
};

export default mouse;
