/* eslint-disable linebreak-style */
/* eslint-disable max-len */

import robot from 'robotjs';

import {
  sleepUntilGetCorrectPixel, toClick,
} from '../utils';

while (true) {
  toClick.normal(240, 395);

  sleepUntilGetCorrectPixel(240, 395, 'fbf0d2', 'ffcccc');

  toClick.normal(995, 305);

  sleepUntilGetCorrectPixel(725, 545, 'ccffcc');

  toClick.normal(900, 540);

  robot.moveMouse(900, 675);

  sleepUntilGetCorrectPixel(900, 675, 'fbf0d2');

  toClick.normal(900, 675);

  toClick.normal(740, 730);

  sleepUntilGetCorrectPixel(160, 800, 'e4e5e8');

  sleepUntilGetCorrectPixel(160, 800, 'ffffff');

  toClick.normal(180, 370);
}
