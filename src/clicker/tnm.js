/* eslint-disable linebreak-style */
/* eslint-disable no-undef */
/* eslint-disable max-len */

import robot from 'robotjs';

import {
  toSleep, sleepUntilGetCorrectPixel, toClick,
} from '../utils';

const tnm = (surname, name, pathronymic) => {
  // "Специфика: ошибка!"
  sleepUntilGetCorrectPixel(630, 520, 'eceef0');

  // "Специфика", кнопка "окей"
  toClick.normal(990, 635);

  // "Специфика", белый фон карточки пациента
  sleepUntilGetCorrectPixel(872, 247, 'ffffff');

  // "Специфика", кнопка "закрыть"
  toClick.normal(1865, 1050);

  sleepUntilGetCorrectPixel(1805, 192, '556677');

  // "Посещение пациентом поликлиники: Добавление", кнопка "сохранить"
  toClick.normal(110, 1050);

  // "Посещение пациентом поликлиники: Добавление", фон статусбара
  // sleepUntilGetCorrectPixel(1865, 195, '8f98a4');

  // toSleep(5000); // Вынужденная мера для стабилизации на низких скоростях, иначе нижняя проверка не успевает сработать.

  // "Специфика: ошибка!" или "Человек: поиск"
  sleepUntilGetCorrectPixel(630, 520, 'eceef0', 'ffffff');

  // "Специфика: ошибка!"
  // if (robot.getPixelColor(719, 507) === '36383c') {
  if (robot.getPixelColor(630, 520) === 'eceef0') {
    toClick.normal(1350, 500);

    console.log(`Незаполненная специфика: ${surname} ${name} ${pathronymic}`);

    return false;
  }

  return true;
};

export default tnm;
