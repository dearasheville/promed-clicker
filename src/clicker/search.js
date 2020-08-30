/* eslint-disable linebreak-style */
/* eslint-disable no-undef */

import robot from 'robotjs';
import { sleep, toPaste } from '../utils';

const search = () => {
  sleep(7000);

  // "Человек: поиск", фамилия
  robot.moveMouse(480, 335);
  toPaste.lower('Серов');

  // "Человек: поиск", имя
  robot.moveMouse(805, 335);
  toPaste.lower('Денис');

  // "Человек: поиск", отчество
  robot.moveMouse(1135, 335);
  toPaste.lower('Оскарович');

  // "Человек: поиск", дата рождения
  robot.moveMouse(480, 395);
  toPaste.lower('23.05.1995');

  sleep(5000);

  // "Человек: поиск", подтверждение заполнения формы
  robot.keyTap('enter');

  sleep(5000);

  robot.keyTap('enter');
};

export default search;
