/* eslint-disable linebreak-style */
/* eslint-disable no-undef */

import robot from 'robotjs';
import { sleep, toPaste } from '../utils';

sleep(2500);

console.log(robot.getMousePos());
console.log(robot.getPixelColor(robot.getMousePos().x, robot.getMousePos().y));
// console.log(robot.getPixelColor(141, 781));
