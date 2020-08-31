/* eslint-disable linebreak-style */
/* eslint-disable no-undef */

import robot from 'robotjs';
import { toSleep, toClick, toPaste } from '../utils';

const direction = (department, clinician, diseaseCode) => {
  // "Данные о направлении", кем направлен
  toClick.normal(365, 335);

  robot.keyTap('1');

  toClick.normal(290, 400);

  toSleep(5000);

  /**
  // "Данные о направлении", отделение
  toClick.normal(365, 400);

  robot.typeString('10');
  robot.keyTap('backspace');
  robot.keyTap('backspace');
  robot.typeString('1');

  toSleep(2500);

  toClick.normal(365, 610);

  toSleep(2500);
  */

  // "Данные о направлении", врач
  toClick.normal(935, 435);
  toPaste.lower(clinician.split(' ')[0]);

  toSleep(5000);

  toClick.normal(robot.getMousePos().x, robot.getMousePos().y + 10);

  toSleep(2500);

  // "Данные о направлении", диагноз
  toClick.normal(365, 500);

  toSleep(2500);

  toPaste.lower(diseaseCode);
};

export default direction;
