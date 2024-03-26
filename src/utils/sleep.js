/* eslint-disable linebreak-style */
/* eslint-disable max-len */
/* eslint-disable operator-assignment */
/* eslint-disable import/no-cycle */

import {
  matchRequiredAndPointColors,
} from '../utils';

const toSleep = ms => Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, ms);

const sleepUntilGetCorrectPixel = (point, ...colors) => {
  while (!matchRequiredAndPointColors(point, ...colors)) {
    toSleep(10);
  }
};

/**
const sleepUntilGetCorrectText = (text) => {
  while ()
};
*/

/**
const sleepUntilGetCorrectPixel = (point, ...colors) => {
  toSleep(10);

  return matchRequiredAndPointColors(point, ...colors) ? true : sleepUntilGetCorrectPixel(point, ...colors);
};
*/

export {
  toSleep, sleepUntilGetCorrectPixel,
};
