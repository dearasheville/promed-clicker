/* eslint-disable linebreak-style */
/* eslint-disable no-undef */

import robot from 'robotjs';
import { sleep, toPaste } from '../utils';

const direction = () => {
  // "Данные о направлении", кем направлен
  robot.moveMouse(365, 335);
  robot.mouseClick();
  robot.keyTap('1');

  robot.moveMouse(290, 400);
  robot.mouseClick('left', true);
  sleep(5000);

  // "Данные о направлении", отделение
  robot.moveMouse(365, 400);
  robot.mouseClick();
  robot.typeString('10');
  robot.keyTap('backspace');
  robot.keyTap('backspace');
  robot.typeString('1');

  sleep(2500);

  robot.moveMouse(365, 610);
  robot.mouseClick();

  sleep(2500);

  // "Данные о направлении", врач
  robot.moveMouse(365, 435);
  robot.mouseClick();
  robot.typeString('16009');

  sleep(2500);

  robot.moveMouse(robot.getMousePos().x, robot.getMousePos().y + 50);
  robot.mouseClick();

  sleep(2500);

  // "Данные о направлении", диагноз
  robot.moveMouseSmooth(365, 500);
  robot.mouseClick();

  sleep(2500);

  toPaste.lower('C44.3');
};

export default direction;
