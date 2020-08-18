/* eslint-disable linebreak-style */
/* eslint-disable no-undef */

const sleep = (ms) => {
  Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, ms);
};

export default sleep;
