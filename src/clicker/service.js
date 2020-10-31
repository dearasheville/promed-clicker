/* eslint-disable linebreak-style */
/* eslint-disable no-undef */

import robot from 'robotjs';
import { toClick, toPaste, sleepUntilGetCorrectPixel, toSleep } from '../utils';

const service = (medicalService) => {
  sleepUntilGetCorrectPixel(1562, 385, 'd7d8db');
  sleepUntilGetCorrectPixel(1305, 803, 'ccffcc');
  sleepUntilGetCorrectPixel(1226, 315, 'f0f0f0');

  if (robot.getPixelColor(1280, 455) === 'ccffcc') {
    return false;
  }

  toClick.normal(1305, 803);

  toSleep(1000);

  toPaste.upper(medicalService.slice(0, 1));

  toSleep(1000);

  robot.typeString(medicalService.slice(1));

  sleepUntilGetCorrectPixel(1400, 850, 'fbf0d2');

  robot.keyTap('enter');

  toClick.normal(640, 920);
};

// service('A06.09.005');

export default service;
