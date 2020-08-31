/* eslint-disable linebreak-style */
/* eslint-disable no-undef */

import robot from 'robotjs';
import { sleep, toPaste } from '../utils';

const search = (surname, name, pathronymic, birth) => {
  // "Человек: поиск", фамилия
  robot.moveMouse(480, 335);
  toPaste.lower(surname);

  // "Человек: поиск", имя
  robot.moveMouse(805, 335);
  toPaste.lower(name);

  // "Человек: поиск", отчество
  robot.moveMouse(1135, 335);
  toPaste.lower(pathronymic);

  // "Человек: поиск", дата рождения
  robot.moveMouse(480, 395);
  toPaste.lower(birth);

  // "Человек: поиск", подтверждение заполнения формы
  robot.keyTap('enter');

  while (robot.getPixelColor(572, 820) !== 'fbf0d2') {
    sleep(100);
  }

  robot.keyTap('enter');
};

// search('Каргина', 'Елена', 'Геннадьевна', '17.07.1973');

export default search;
