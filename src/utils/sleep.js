import matchRequiredAndPointColors from './colors.js';

const toSleep = (ms) => Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, ms);

const sleepUntilGetCorrectPixel = (point, ...colors) => {
  while (!matchRequiredAndPointColors(point, ...colors)) {
    toSleep(10);
  }
};

export {
  toSleep, sleepUntilGetCorrectPixel,
};
