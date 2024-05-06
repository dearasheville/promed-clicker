import {
  doPointColorAndListColorMatch,
} from './colors.js';

const msToDelay = 1000;

const sleepForMs = (ms) => Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, ms);

const sleepUntilPointColorMatchesList = (point, ...colors) => {
  while (doPointColorAndListColorMatch(point, colors)) {
    sleepForMs(msToDelay);
  }
};

const sleepUntilPointColorUnmatchesList = (point, ...colors) => {
  while (!doPointColorAndListColorMatch(point, colors)) {
    sleepForMs(msToDelay);
  }
};

export {
  sleepForMs,
  sleepUntilPointColorMatchesList,
  sleepUntilPointColorUnmatchesList,
};
