/* eslint-disable linebreak-style */
/* eslint-disable no-undef */

import robot from 'robotjs';
import { sleep, toPaste } from '../utils';

const search = (surname, name, pathronymic, birth) => {
  // "Человек: поиск", фамилия
  robot.moveMouse(480, 335);
  toPaste.lower(surname);
  sleep(1000);

  // "Человек: поиск", имя
  robot.moveMouse(805, 335);
  toPaste.lower(name);
  sleep(1000);

  // "Человек: поиск", отчество
  robot.moveMouse(1135, 335);
  toPaste.lower(pathronymic);
  sleep(1000);

  // "Человек: поиск", дата рождения
  robot.moveMouse(480, 395);
  toPaste.lower(birth);
  sleep(1000);

  // "Человек: поиск", подтверждение заполнения формы
  robot.keyTap('enter');
  sleep(2500);

  robot.keyTap('enter');
};

export default search;
