/* eslint-disable linebreak-style */
/* eslint-disable no-undef */

import robot from 'robotjs';
import { toClick, toPaste, sleepUntilGetCorrectPixel, toSleep } from '../utils';

const service = (medicalService) => {
  sleepUntilGetCorrectPixel(1562, 385, 'd7d8db');
  sleepUntilGetCorrectPixel(1305, 800, 'ccffcc');
  sleepUntilGetCorrectPixel(1226, 315, 'f0f0f0');

  if (robot.getPixelColor(1280, 455) === 'ccffcc') {
    return false;
  }

  toClick.normal(1305, 800);

  toSleep(1000);

  toPaste.upper(medicalService.slice(0, 1));

  toSleep(1000);

  robot.typeString(medicalService.slice(1));

  switch (medicalService) {
    case 'A05.23.009':
      robot.moveMouse(1500, 450);
      sleepUntilGetCorrectPixel(1400, 450, 'fbf0d2');
      break;
    case 'A06.23.004':
      robot.moveMouse(1500, 570);
      sleepUntilGetCorrectPixel(1500, 570, 'fbf0d2');
      break;
    case 'A06.20.002':
      robot.moveMouse(1500, 540);
      sleepUntilGetCorrectPixel(1500, 540, 'fbf0d2');
      break;
    default:
      robot.moveMouse(1500, 860);
      sleepUntilGetCorrectPixel(1500, 860, 'fbf0d2');
      break;
  }

  robot.keyTap('enter');

  toClick.normal(640, 920);
};

// service('A06.09.005');

export default service;
