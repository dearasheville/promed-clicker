/* eslint-disable linebreak-style */
/* eslint-disable no-undef */

import robot from 'robotjs';
import clipboardy from 'clipboardy';
import populate from 'xlsx-populate';

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

    robot.moveMouseSmooth(robot.getMousePos().x + 60, robot.getMousePos().y - 280);
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

const sleepUntilGetCorrectPixel = (x, y, color, color2 = color) => {
  while ((robot.getPixelColor(x, y) !== color) || (robot.getPixelColor(x, y) !== color2)) {
    toSleep(500);
  }
};

/**
const saveToXlsx = (num, text) => {
  populate.fromFileAsync('spreadsheet.xlsx').then((workbook) => {
    workbook.sheet('My Sheet').cell(`H${num}`).value(text);

    workbook.toFileAsync('spreadsheet.xlsx');
  });

  toSleep(5000);
};
*/

export {
  toSleep, toClick, toCopy, toPaste, sleepUntilGetCorrectPixel,
};
