/* eslint-disable linebreak-style */
/* eslint-disable no-undef */

import robot from 'robotjs';
import clipboardy from 'clipboardy';

const toSleep = (ms) => {
  Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, ms);
};

const toClick = {
  normal: (x, y) => {
    robot.moveMouse(x, y);

    toSleep(1000);

    robot.mouseClick();
  },
  smooth: (x, y) => {
    robot.moveMouseSmooth(x, y);

    toSleep(1000);

    robot.mouseClick();
  },
};


const toPaste = {
  lower: (data) => {
    clipboardy.writeSync(data);

    robot.mouseClick();
    robot.mouseClick('right');

    toSleep(1000);

    robot.moveMouse(robot.getMousePos().x + 100, robot.getMousePos().y + 190);
    robot.mouseClick();
  },
  upper: (data) => {
    clipboardy.writeSync(data);

    robot.mouseClick();
    robot.mouseClick('right');

    toSleep(1000);

    robot.moveMouseSmooth(robot.getMousePos().x + 140, robot.getMousePos().y - 245);
    robot.mouseClick();
  },
};

const sleepUntilGetCorrectPixel = (x, y, color) => {
  while (robot.getPixelColor(x, y) !== color) {
    toSleep(100);
  }
};

export {
  toSleep, toClick, toPaste, sleepUntilGetCorrectPixel,
};
