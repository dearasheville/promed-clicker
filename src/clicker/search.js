/* eslint-disable linebreak-style */
/* eslint-disable no-undef */

import robot from 'robotjs';
import { toClick, toPaste, sleepUntilGetCorrectPixel, toSleep } from '../utils';

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

  // sleepUntilGetCorrectPixel(677, 820, 'fbf0d2');

  toSleep(1000);

  robot.keyTap('enter');
};

// search('Каргина', 'Елена', 'Геннадьевна', '17.07.1973');

export default search;
