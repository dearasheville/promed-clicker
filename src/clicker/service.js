/* eslint-disable linebreak-style */
/* eslint-disable no-undef */

import robot from 'robotjs';
import { sleep, toPaste } from '../utils';

const service = (medicalService) => {
  while (robot.getPixelColor(1068, 807) !== 'ccffcc') {
    sleep(100);
  }

  robot.moveMouse(755, 805);
  robot.mouseClick();

  toPaste.upper('A');
  robot.typeString(medicalService);

  while (robot.getPixelColor(747, 854) !== 'fbf0d2') {
    sleep(100);
  }

  robot.keyTap('enter');

  robot.moveMouse(640, 920);
  robot.mouseClick();
};

export default service;
