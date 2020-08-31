/* eslint-disable linebreak-style */
/* eslint-disable no-undef */

import robot from 'robotjs';
import { toClick, sleepUntilGetCorrectPixel } from '../utils';

const tnm = () => {
  sleepUntilGetCorrectPixel(719, 507, '36383c');

  toClick.smooth(990, 635);

  sleepUntilGetCorrectPixel(872, 247, 'ffffff');

  toClick.smooth(1865, 1050);

  sleepUntilGetCorrectPixel(878, 896, '4d5b6e');

  toClick.smooth(130, 1050);
};

// tnm();

export default tnm;
