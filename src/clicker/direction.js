/* eslint-disable linebreak-style */
/* eslint-disable no-undef */

import robot from 'robotjs';
import { sleep, toPaste } from '../utils';

const direction = (department, clinician, diseaseCode) => {
  // "Данные о направлении", кем направлен
  robot.moveMouse(365, 335);
  robot.mouseClick();
  robot.keyTap('1');

  robot.moveMouse(290, 400);
  robot.mouseClick('left', true);
  sleep(5000);

  /**
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
  */

  // "Данные о направлении", врач
  robot.moveMouse(935, 435);
  robot.mouseClick();
  toPaste.lower(clinician.split(' ')[0]);


  sleep(5000);

  robot.moveMouse(robot.getMousePos().x, robot.getMousePos().y + 10);
  robot.mouseClick();

  sleep(2500);

  // "Данные о направлении", диагноз
  robot.moveMouse(365, 500);
  robot.mouseClick();

  sleep(2500);

  toPaste.lower(diseaseCode);
};

export default direction;
