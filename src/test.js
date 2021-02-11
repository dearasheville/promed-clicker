/* eslint-disable linebreak-style */
/* eslint-disable no-undef */
/* eslint-disable max-len */
/* eslint-disable no-unused-vars */

import robot from 'robotjs';
import xlsx from 'node-xlsx';
import clipboardy from 'clipboardy';
import key from 'node-key-sender';

import {
  toClick, toSleep, toPaste, toCopy, multipleTap, toPasteByKeyboard,
} from './utils';

console.log(robot.getPixelColor(1865, 195) === '8f98a4');
