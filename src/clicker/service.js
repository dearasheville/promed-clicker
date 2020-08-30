/* eslint-disable linebreak-style */
/* eslint-disable no-undef */

import robot from 'robotjs';
import { sleep, toPaste } from '../utils';

const service = () => {
  robot.moveMouseSmooth(750, 800);
  robot.mouseClick();

  sleep(5000);

  toPaste.upper('A');

  robot.typeString('06.09.005');

  sleep(5000);

  robot.keyTap('enter');
};

export default service;
