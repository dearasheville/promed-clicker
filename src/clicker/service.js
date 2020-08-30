/* eslint-disable linebreak-style */
/* eslint-disable no-undef */

import robot from 'robotjs';
import { sleep, toPaste } from '../utils';

const service = (medicalService) => {
  robot.moveMouse(755, 805);
  robot.mouseClick();

  sleep(2500);

  toPaste.upper('A');
  robot.typeString(medicalService);

  sleep(2500);

  robot.keyTap('enter');

  robot.moveMouse(640, 920);
  robot.mouseClick();
};

export default service;
