import doPointColorAndListColorMatch from './colors-match.js';

const sleepForMs = (ms) => Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, ms);

const sleepUntilPointColorMatchesList = (point, ...colors) => {
  const doTheColorsMatch = doPointColorAndListColorMatch(point, ...colors);

  while (!doTheColorsMatch) {
    sleepForMs(10);
  }
};

export {
  sleepForMs, sleepUntilPointColorMatchesList,
};
