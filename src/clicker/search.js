/* eslint-disable linebreak-style */
/* eslint-disable no-undef */

import robot from 'robotjs';
import { sleep, toPaste } from '../utils';

const search = () => {
  // "Человек: поиск", фамилия
  robot.moveMouse(480, 335);
  toPaste.lower('Серов');
  sleep(1000);

  // "Человек: поиск", имя
  robot.moveMouse(805, 335);
  toPaste.lower('Денис');
  sleep(1000);

  // "Человек: поиск", отчество
  robot.moveMouse(1135, 335);
  toPaste.lower('Оскарович');
  sleep(1000);

  // "Человек: поиск", дата рождения
  robot.moveMouse(480, 395);
  toPaste.lower('23.05.1995');
  sleep(1000);

  // "Человек: поиск", подтверждение заполнения формы
  robot.keyTap('enter');
  sleep(2500);

  robot.keyTap('enter');
};

export default search;
