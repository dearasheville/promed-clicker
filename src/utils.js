/* eslint-disable linebreak-style */
/* eslint-disable no-undef */

import robot from 'robotjs';
import clipboardy from 'clipboardy';

const sleep = (ms) => {
  Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, ms);
};

const toClick = (x, y) => {
  robot.moveMouse(x, y);
  robot.mouseClick();
};

const toPaste = {
  lower: (data) => {
    clipboardy.writeSync(data);

    robot.mouseClick();
    robot.mouseClick('right');

    sleep(1000);

    robot.moveMouse(robot.getMousePos().x + 100, robot.getMousePos().y + 190);
    robot.mouseClick();
  },
  upper: (data) => {
    clipboardy.writeSync(data);

    robot.mouseClick();
    robot.mouseClick('right');

    sleep(1000);

    robot.moveMouseSmooth(robot.getMousePos().x + 140, robot.getMousePos().y - 245);
    robot.mouseClick();
  },
};

export { sleep, toClick, toPaste };
