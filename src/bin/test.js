/* eslint-disable linebreak-style */
/* eslint-disable no-undef */

import robot from 'robotjs';
import clipboardy from 'clipboardy';

import { toSleep, toPaste } from '../utils';

// toSleep(5000);

// console.log(robot.getMousePos());
// console.log(robot.getPixelColor(robot.getMousePos().x, robot.getMousePos().y));
// console.log(robot.getPixelColor(103, 842));

const test = clipboardy.readSync();


console.log(test.indexOf('874737'));

