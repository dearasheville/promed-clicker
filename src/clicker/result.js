/* eslint-disable linebreak-style */
/* eslint-disable no-undef */
/* eslint-disable max-len */

import robot from 'robotjs';

import {
  sleepUntilGetCorrectPixel, toClick, multipleTap,
} from '../utils';

const result = () => {
  // "Результат: случай закончен"
  toClick.normal(395, 950);
  robot.keyTap('1');

  multipleTap(robot.keyTap, 'tab', 2);

  // "Результат: результат лечения", поле доступно для ввода
  sleepUntilGetCorrectPixel(360, 1016, 'ccffcc');

  // "Результат: результат лечения"
  robot.keyTap('3');
};

export default result;
