/* eslint-disable operator-assignment */
/* eslint-disable linebreak-style */
/* eslint-disable no-undef */

import robot from 'robotjs';
import clipboardy, { readSync } from 'clipboardy';

const toSleep = (ms) => {
  Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, ms);
};

const toClick = {
  normal: (x, y) => {
    robot.moveMouse(x, y);

    toSleep(250);

    robot.mouseClick();
  },
  smooth: (x, y) => {
    robot.moveMouseSmooth(x, y);

    toSleep(250);

    robot.mouseClick();
  },
};

const toPaste = {
  lower: (data) => {
    clipboardy.writeSync(data);

    robot.mouseClick('right');

    toSleep(250);

    robot.moveMouse(robot.getMousePos().x + 100, robot.getMousePos().y + 190);
    robot.mouseClick();
  },
  upper: (data) => {
    clipboardy.writeSync(data);

    robot.mouseClick('right');

    toSleep(250);

    robot.moveMouseSmooth(robot.getMousePos().x + 60, robot.getMousePos().y - 260);
    robot.mouseClick();
  },
};

const toCopy = {
  lower: () => {
    robot.mouseClick('right');

    toSleep(250);

    robot.moveMouse(robot.getMousePos().x + 70, robot.getMousePos().y + 20);
    robot.mouseClick();
  },
  test: () => {
    toClick.normal(729, 545);
    robot.mouseClick('left', true);

    robot.mouseClick('right');

    toSleep(250);

    robot.moveMouse(robot.getMousePos().x + 70, robot.getMousePos().y + 20);
    robot.mouseClick();
  },
  upper: () => {
    robot.mouseClick('right');

    toSleep(250);

    robot.moveMouse(robot.getMousePos().x + 70, robot.getMousePos().y - 400);
    robot.mouseClick();
  },
};

const sleepUntilGetCorrectPixel = (x, y, firstColor, secondColor) => {
  while (!(robot.getPixelColor(x, y) === firstColor || robot.getPixelColor(x, y) === secondColor)) {
    toSleep(10);
  }
};

const multipleTap = (func, arg, count) => {
  let acc = count;

  while (acc > 0) {
    func(arg);

    acc = acc - 1;
  }
};

const toPasteByKeyboard = (data) => {
  clipboardy.writeSync(data);

  robot.keyTap('f10', 'shift');

  multipleTap(robot.keyTap, 'down', 2);

  robot.keyTap('enter');
};

const toCopyByKeyboard = () => {
  robot.keyTap('f10', 'shift');

  robot.keyTap('enter');
};

const testCorrectData = (correctData) => {
  robot.keyTap('tab');
  robot.keyTap('tab', 'shift');

  const toCopyByKeyboardTest = () => {
    robot.keyTap('f10', 'shift');

    robot.keyTap('down');

    robot.keyTap('enter');
  };

  toCopyByKeyboardTest();

  const initialData = clipboardy.readSync();

  return initialData.includes(correctData);
};

export {
  toSleep, toClick, toCopy, toPaste, sleepUntilGetCorrectPixel, multipleTap, toPasteByKeyboard, toCopyByKeyboard, testCorrectData,
};
