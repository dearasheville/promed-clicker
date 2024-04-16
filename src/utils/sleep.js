import doPointColorAndListColorMatch from './colors-match.js';

const sleepForMs = (ms) => Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, ms);

const sleepUntilPointColorMatchesList = (point, ...colors) => {
  while (doPointColorAndListColorMatch(point, colors)) {
    sleepForMs(10);
  }
};

const sleepUntilPointColorUnmatchesList = (point, ...colors) => {
  while (!doPointColorAndListColorMatch(point, colors)) {
    sleepForMs(10);
  }
};

export {
  sleepForMs,
  sleepUntilPointColorMatchesList,
  sleepUntilPointColorUnmatchesList,
};
