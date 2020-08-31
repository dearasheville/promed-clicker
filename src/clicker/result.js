/* eslint-disable linebreak-style */
/* eslint-disable no-undef */

import robot from 'robotjs';
import { toClick, sleepUntilGetCorrectPixel } from '../utils';

const result = () => {
  toClick(395, 950);
  robot.keyTap('1');

  robot.keyTap('tab');
  robot.keyTap('tab');

  sleepUntilGetCorrectPixel(360, 1016, 'ccffcc');

  robot.keyTap('3');
};

// result();

export default result;
