/* eslint-disable linebreak-style */
/* eslint-disable no-undef */
/* eslint-disable max-len */
/* eslint-disable operator-assignment */

import robot from 'robotjs';
import clipboardy from 'clipboardy';
import key from 'node-key-sender';

const toSleep = (ms) => {
  Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, ms);
};

const sleepUntilGetCorrectPixel = (x, y, firstColor, secondColor) => {
  while (!(robot.getPixelColor(x, y) === firstColor || robot.getPixelColor(x, y) === secondColor)) {
    toSleep(250);
  }
};

const toClick = {
  normal: (x, y) => {
    robot.moveMouse(x, y);

    // toSleep(250);

    robot.mouseClick();
  },
  smooth: (x, y) => {
    robot.moveMouseSmooth(x, y);

    // toSleep(250);

    robot.mouseClick();
  },
};

const toPaste = {
  lower: (data) => {
    clipboardy.writeSync(data);

    robot.mouseClick('right');

    robot.moveMouse(robot.getMousePos().x + 300, robot.getMousePos().y + 200);

    // toSleep(250);
    sleepUntilGetCorrectPixel(robot.getMousePos().x, robot.getMousePos().y, 'eeeeee');

    robot.mouseClick();
  },
  upper: (data) => {
    clipboardy.writeSync(data);

    robot.mouseClick('right');

    // robot.moveMouseSmooth(robot.getMousePos().x + 60, robot.getMousePos().y - 260);
    robot.moveMouse(robot.getMousePos().x + 60, robot.getMousePos().y - 260);

    // toSleep(250);
    sleepUntilGetCorrectPixel(robot.getMousePos().x, robot.getMousePos().y, 'eeeeee');

    robot.mouseClick();
  },
};

const toCopy = {
  lower: () => {
    robot.mouseClick('right');

    robot.moveMouse(robot.getMousePos().x + 70, robot.getMousePos().y + 20);

    // toSleep(250);
    sleepUntilGetCorrectPixel(robot.getMousePos().x, robot.getMousePos().y, 'eeeeee');

    robot.mouseClick();
  },
  test: () => {
    toClick.normal(729, 545);
    robot.mouseClick('left', true);

    robot.mouseClick('right');

    robot.moveMouse(robot.getMousePos().x + 200, robot.getMousePos().y + 20);

    // toSleep(250);
    sleepUntilGetCorrectPixel(robot.getMousePos().x, robot.getMousePos().y, 'eeeeee');

    robot.mouseClick();
  },
  upper: () => {
    robot.mouseClick('right');

    robot.moveMouse(robot.getMousePos().x + 70, robot.getMousePos().y - 400);

    // toSleep(250);
    sleepUntilGetCorrectPixel(robot.getMousePos().x, robot.getMousePos().y, 'eeeeee');

    robot.mouseClick();
  },
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

/**
const testCorrectData = (correctData) => {
  robot.keyTap('tab');
  robot.keyTap('tab', 'shift');

  const copy = () => {
    return key.sendCombination(['control', 'c']);
  };

  copy();

  return clipboardy.readSync().indexOf(correctData) !== -1;
};
*/

const changeNetworkSpeed = (speed) => {
  toClick.normal(30, 225);

  sleepUntilGetCorrectPixel(577, 77, 'efefef');
  toClick.normal(577, 77);

  switch (speed) {
    case 'toHigh':
      robot.moveMouse(589, 120);
      sleepUntilGetCorrectPixel(589, 120, 'cecece');
      break;
    case 'toLow':
      robot.moveMouse(589, 173);
      sleepUntilGetCorrectPixel(589, 173, 'cecece');
      break;
    default:
      break;
  }

  robot.keyTap('enter');

  toClick.normal(30, 175);
};

/**
const toPasteByKeyboardJava = (arg) => {
  clipboardy.writeSync(String(arg));

  return key.sendCombination(['control', 'v']);
};
*/

export {
  toSleep, toClick, toCopy, toPaste, sleepUntilGetCorrectPixel, multipleTap, toCopyByKeyboard, toPasteByKeyboard, changeNetworkSpeed,
};
