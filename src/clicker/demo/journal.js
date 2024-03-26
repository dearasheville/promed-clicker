/* eslint-disable linebreak-style */
/* eslint-disable max-len */

import robot from 'robotjs';

import {
  sleepUntilGetCorrectPixel,
} from '../../utils/sleep';

import mouse from '../../input-devices/mouse';

while (true) {
  mouse.click(240, 395);

  sleepUntilGetCorrectPixel([240, 395], 'fbf0d2', 'ffcccc');

  mouse.click(995, 305);

  sleepUntilGetCorrectPixel([725, 545], 'ccffcc');

  mouse.click(900, 540);

  robot.moveMouseSmooth(900, 675);

  sleepUntilGetCorrectPixel([900, 675], 'fbf0d2');

  mouse.click(900, 675);

  mouse.click(740, 730);

  // sleepUntilGetCorrectPixel([160, 989], 'e4e5e8');

  sleepUntilGetCorrectPixel([160, 989], 'ffffff');

  // toClick.normal(180, 370);
}
