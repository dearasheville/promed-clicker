/* eslint-disable linebreak-style */
/* eslint-disable max-len */
/* eslint-disable import/no-cycle */

import robot from 'robotjs';

import mouse from './input-devices/mouse';
import keyboard from './input-devices/keyboard';
import keyboardVirtual from './input-devices/keyboard-virtual';


import {
  sleepUntilGetCorrectPixel,
} from './utils/sleep';

const matchRequiredAndPointColors = (point, ...colors) => {
  const x = point[0];
  const y = point[1];

  const pointColor = robot.getPixelColor(x, y);
  const colorMatch = colors.find(color => color === pointColor);

  return colorMatch !== undefined;
};

const changeNetworkSpeed = (speed) => {
  // mouse.click(30, 200);
  robot.keyToggle('control', 'down', 'shift');
  keyboardVirtual.type('ш');
  robot.keyToggle('control', 'up', 'shift');

  sleepUntilGetCorrectPixel([450, 62], 'efefef');
  mouse.click(450, 62);

  switch (speed) {
    case 'toHigh':
      mouse.move(450, 115);
      sleepUntilGetCorrectPixel([450, 115], '767676');
      break;
    case 'toMedium':
      mouse.move(450, 150);
      sleepUntilGetCorrectPixel([450, 150], '767676');
      break;
    case 'toLow':
      mouse.move(450, 165);
      sleepUntilGetCorrectPixel([450, 165], '767676');
      break;
    default:
      break;
  }

  keyboard.tap('enter');

  mouse.click(30, 155);
};

const isRefillRequired = (result) => {
  const resultBoolean = result[0];
  const resultMessage = result[1];

  switch (true) {
    case !resultBoolean && resultMessage !== null:
      // "Талон амбулаторного пациента: Добавление", повторное заполнение не требуется
      return [true, resultMessage];
    case !resultBoolean && resultMessage === null:

      // "Талон амбулаторного пациента: Добавление", талон требует повторного заполнения
      return [false, resultMessage];
    default:
      return [true, resultMessage];
  }
};

export {
  matchRequiredAndPointColors, changeNetworkSpeed, isRefillRequired,
};
