/* eslint-disable linebreak-style */

import {
  sleepUntilGetCorrectPixel,
} from '../utils/sleep';

import mouse from '../input-devices/mouse';

const surveillance = () => {
  // "Наблюдение за пациентом: Добавление", поле "ЧДД в мин" доступно для ввода
  sleepUntilGetCorrectPixel([800, 507], 'ccffcc');

  // "Наблюдение за пациентом: Добавление", крестик
  mouse.click(1473, 189);
};

export default surveillance;
