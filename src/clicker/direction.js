/* eslint-disable linebreak-style */
/* eslint-disable no-undef */

import robot from 'robotjs';
import { sleep, toPaste } from '../utils';

const direction = () => {
  sleep(5000);

  // "Данные о направлении", кем направлен
  robot.moveMouseSmooth(365, 335);
  robot.mouseClick();
  robot.keyTap('1');

  sleep(5000);

  robot.moveMouseSmooth(290, 435);
  robot.mouseClick();

  // "Данные о направлении", отделение
  robot.moveMouse(365, 400);
  robot.mouseClick();
  robot.typeString('1');

  sleep(2000);

  robot.moveMouse(365, 610);
  robot.mouseClick();

  sleep(2000);

  // "Данные о направлении", врач
  robot.moveMouse(365, 435);
  robot.mouseClick();
  robot.typeString('16009');

  sleep(2000);

  robot.moveMouse(robot.getMousePos().x, robot.getMousePos().y + 50);
  robot.mouseClick();

  sleep(2000);

  // "Данные о направлении", диагноз
  robot.moveMouseSmooth(365, 500);
  robot.mouseClick();

  sleep(500);

  toPaste('C44.3');
  robot.mouseClick();

  sleep(2000);
};

export default direction;
