/* eslint-disable linebreak-style */
/* eslint-disable no-undef */

import robot from 'robotjs';
import { sleep, toPaste } from '../utils';

const service = () => {
  robot.moveMouse(750, 800);
  robot.mouseClick();

  sleep(2500);

  toPaste.upper('A');
  robot.typeString('06.09.005');

  sleep(2500);

  robot.keyTap('enter');

  robot.moveMouse(640, 920);
  robot.mouseClick();
};

export default service;
