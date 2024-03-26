/* eslint-disable linebreak-style */

import {
  sleepUntilGetCorrectPixel,
} from '../utils/sleep';

import mouse from '../input-devices/mouse';
import keyboard from '../input-devices/keyboard';

const result = () => {
  // "Результат: случай закончен"
  mouse.click(395, 950);
  keyboard.tap('1');

  keyboard.tap('tab', 2);

  // "Результат: результат лечения", поле доступно для ввода
  sleepUntilGetCorrectPixel([360, 1016], 'ccffcc');

  // "Результат: результат лечения"
  keyboard.tap('3');
};

// result();

export default result;
