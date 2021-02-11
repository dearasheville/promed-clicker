/* eslint-disable linebreak-style */
/* eslint-disable no-undef */
/* eslint-disable max-len */

import robot from 'robotjs';

import {
  sleepUntilGetCorrectPixel, toClick, toPaste, 
} from '../utils';

const search = (surname, name, pathronymic, birth) => {
  // "Человек: поиск", фамилия
  toClick.normal(480, 335);
  toPaste.lower(surname);

  // "Человек: поиск", имя
  toClick.normal(805, 335);
  toPaste.lower(name);

  // "Человек: поиск", отчество
  toClick.normal(1135, 335);
  toPaste.lower(pathronymic);

  // "Человек: поиск", дата рождения
  toClick.normal(555, 395);
  toPaste.lower(birth);

  // "Человек: поиск", подтверждение заполнения формы
  robot.keyTap('enter');

  sleepUntilGetCorrectPixel(440, 820, 'fbf0d2', 'ffcccc');

  robot.keyTap('enter');
  // robot.keyTap('enter');
};

export default search;
