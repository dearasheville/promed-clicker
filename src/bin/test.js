/* eslint-disable linebreak-style */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

import robot from 'robotjs';
import xlsx from 'node-xlsx';
import clipboardy from 'clipboardy';

import {
  toClick, toSleep, toPaste, toCopy, multipleTap, toPasteByKeyboard, testCorrectData, toCopyByKeyboardTest
} from '../utils';

console.log(robot.getMousePos());
console.log(robot.getPixelColor(robot.getMousePos().x, robot.getMousePos().y));

// multipleTap(robot.keyTap, 'tab', 2);
