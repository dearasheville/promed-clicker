/* eslint-disable linebreak-style */
/* eslint-disable no-undef */
/* eslint-disable max-len */

import {
  sleepUntilGetCorrectPixel, toClick,
} from '../utils';

const surveillance = () => {
  // "Наблюдение за пациентом: Добавление", поле "ЧДД в мин" доступно для ввода
  sleepUntilGetCorrectPixel(800, 507, 'ccffcc');

  // "Наблюдение за пациентом: Добавление", кнопка "отмена"
  toClick.normal(1405, 1010);
};

export default surveillance;
