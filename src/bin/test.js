/* eslint-disable linebreak-style */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

import robot from 'robotjs';
import xlsx from 'node-xlsx';
import clipboardy from 'clipboardy';

import { toClick, toSleep, toPaste, toCopy } from '../utils';

// toSleep(5000);

console.log(robot.getMousePos());
console.log(robot.getPixelColor(robot.getMousePos().x, robot.getMousePos().y));
// console.log(robot.getPixelColor(103, 842));

// const test = clipboardy.readSync();
// console.log(test.indexOf('874737'));

// const spreadsheet = xlsx.parse('./spreadsheet.xlsx')[0];

/**
populate.fromFileAsync('./spreadsheet.xlsx').then((workbook) => {
  workbook.sheet('My Sheet').cell('A1').value();

  return workbook.toFileAsync('./spreadsheet.xlsx');
});
*/

// console.log(spreadsheet.data.slice(1));
