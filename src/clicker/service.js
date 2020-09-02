/* eslint-disable linebreak-style */
/* eslint-disable no-undef */

import robot from 'robotjs';
import { toClick, toPaste, sleepUntilGetCorrectPixel, toSleep } from '../utils';

const service = (medicalService) => {
  sleepUntilGetCorrectPixel(1068, 807, 'ccffcc');

  if (robot.getPixelColor(1280, 455) === 'ccffcc') {
    return false;
  }

  toClick.normal(1305, 803);

  toPaste.upper(medicalService.slice(0, 1));

  toSleep(2500);

  robot.typeString(medicalService.slice(1));

  sleepUntilGetCorrectPixel(747, 854, 'fbf0d2');

  robot.keyTap('enter');
  toClick.normal(640, 920);
};

// service('A06.09.005');

export default service;
