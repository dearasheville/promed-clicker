/* eslint-disable linebreak-style */
/* eslint-disable no-undef */

import robot from 'robotjs';
import { sleep } from '../utils';

const result = () => {
  robot.moveMouse(395, 950);
  robot.mouseClick();
  robot.keyTap('1');

  robot.keyTap('tab');

  robot.keyTap('tab');

  while (robot.getPixelColor(360, 1016) !== 'ccffcc') {
    sleep(100);
  }

  robot.keyTap('3');
};

// result();

export default result;
