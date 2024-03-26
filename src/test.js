﻿/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */

import robot from 'robotjs';
import clipboardy from 'clipboardy';
import key from 'node-key-sender';
import xlsx from 'node-xlsx';

import departments from './data-lists/departments';
import diagnosts from './data-lists/diagnosts';
import services from './data-lists/services';

import search from './utils/search';

import {
  medicalTicketSpreadsheet,
} from './bin/medicalSpreadsheet';

import mouse from './input-devices/mouse';
import keyboard from './input-devices/keyboard';
import keyboardVirtual from './input-devices/keyboard-virtual';

import {
  matchRequiredAndPointColors, changeNetworkSpeed, isRefillRequired,
} from './utils';

import {
  toSleep, sleepUntilGetCorrectPixel,
} from './utils/sleep';

import errorPopupControl from './utils/popup';
import uniteCsv from './utils/logging';

import test from './clicker/search';

robot.setMouseDelay(100); // 100\250
robot.setKeyboardDelay(100); // 100\250

/**
if (robot.getPixelColor(1500, 500) === 'd7d8db') {
  toClick.normal(990, 610);

  switch (gender) {
    case 'Мужской':
      toClick.normal(370, 935);

      robot.keyTap(4);

      robot.moveMouse(435, 965);
      sleepUntilGetCorrectPixel([435, 965], 'fbf0d2');
      break;
    case 'Женский':
      toClick.normal(370, 970);

      robot.keyTap(4);

      robot.moveMouse(435, 1000);
      sleepUntilGetCorrectPixel([435, 1000], 'fbf0d2'); // В случае затупа сменить 1000 на 935.
      break;
    default:
      break;
  }

  robot.keyTap('tab');

  sleepUntilGetCorrectPixel([1500, 500], 'e4e5e8');
  sleepUntilGetCorrectPixel([1500, 500], 'ffffff');

  // "Посещение пациентом поликлиники: Добавление", кнопка "сохранить"
  toClick.normal(110, 1050);
}
*/

/**
// "Посещение пациентом поликлиники: Добавление", сторона поражения
if (robot.getPixelColor(475, 300) === 'ccffcc') {
  toClick.normal(475, 300);

  robot.keyTap(4);

  robot.moveMouse(375, 330);
  sleepUntilGetCorrectPixel([375, 330], 'fbf0d2');

  robot.keyTap('tab');

  // "Специфика", загрузка формы ожидания
  sleepUntilGetCorrectPixel([1700, 195], 'dcdde0', 'dddee1');
}
*/

/**
const sleepUntilGetCorrectPixel = (point, ...colors) => {
  const x = point[0];
  const y = point[1];

  while (true) {
    toSleep(50);

    const currentPixelColor = robot.getPixelColor(x, y);
    const colorMatch = colors.find(color => color === currentPixelColor);

    if (colorMatch) {
      return currentPixelColor;
    }
  }
};

while (true) {
  toSleep(100);

  console.log(robot.getPixelColor(1300, 305));
}
*/

// console.log(`${getMousePos().x}, ${getMousePos().y}`);
// console.log(robot.getPixelColor(getMousePos().x, getMousePos().y));

// mouse.click(885, 180, 'smooth');
// mouse.click(300, 670);
// mouse.paste('C61'.slice(0, -1), 'upper');


const listOfDepartmentIdsAndDepartmentNames = [
  /**
  [13, 'ПРИЕМНОЕ ОТДЕЛЕНИЕ'],
  [14, 'ПРИЕМНОЕ ОТДЕЛЕНИЕ. дневной стационар при поликлинике'],
  [20, 'ПРИЕМНОЕ ОТДЕЛЕНИЕ. дневной стационар при стационаре'],

  [17, 'Отделение дежурных врачей'],
  */

  [22370, 'Амбулаторное отделение противоопухолевой лекарственной терапии'],
  [22101, 'Онкологическое отделение противоопухолевой лекарственной терапии'],

  [22100, 'Хируругическое отделение № 1'],
  [22108, 'РАДИОТЕРАПИЯ, радиологическое отделение № 2'],
  [22102, 'ПРОКТОЛОГИЧЕСКОЕ, хирургическое отделение № 3'],
  [22109, 'РАДИОГИНЕКОЛОГИЯ, радиологическое отделение № 3'],
  [22392, 'Хирургическое торакальное отделение'],
  [22104, 'МАММОЛОГИЧЕСКОЕ, хирургическое отделение № 5'],
  [22105, 'ГОЛОВА-ШЕЯ, хирургическое отделение № 6'],
  [22106, 'УРОЛОГИЧЕСКОЕ, хирургическое отделение № 7'],
  [22107, 'ГИНЕКОЛОГИЧЕСКОЕ, хирургическое отделение № 8'],

  [22413, 'ООПЛТ (химиотерапия) г Кумертау'],
  [22424, 'ООПЛТ (химиотерапия) г Нефтекамск'],
  [22425, 'ООПЛТ (химиотерпия) г Октябрьский'],
  [22434, 'ООПЛТ (химиотерапия) г.Салават'],
  [22627, 'ООПЛТ (химиотерапия) г Стерлитамак'],

  [22410, 'ООПЛТ (химиотерапия) дневной стационар Кумертау'],
  [22411, 'ООПЛТ (химиотерапия) дневной стационар Бирск'],
  [22412, 'ООПЛТ (химиотерапия) дневной стационар Белорецк'],
  [22426, 'ООПЛТ (химиотерапия) дневной стационар Октябрьский'],
  [22427, 'ООПЛТ (химиотерапия) дневной стационар Нефтекамск'],
  [22428, 'ООПЛТ (химиотерапия) дневной стационар Белебей'],
  [22429, 'ООПЛТ (химиотерапия) дневной стационар Сибай'],
  [22430, 'ООПЛТ (химиотерапия) дневной стационар Месягутово'],
  [22433, 'ООПЛТ (химиотерапия) дневной стационар Салават'],

  [22405, 'Онкологическое-дн.стац.на дому'],
  [22628, 'Дневной стационар химиотерапия Стерлитамак'],
  [22385, 'Дневной стационар по радиотерапии'],
  [22414, 'Дневной стационар при ООПЛТ'],
  [22415, 'Дневной стационар при ООПЛТ 2'],
  [22416, 'Дневной стационар при радиологическом отделении № 2'],
  [22417, 'Дневной стационар при радиологическом отделении № 3'],

  [22384, 'ОТДЕЛЕНИЕ ОБЩЕЙ ОНКОЛОГИИ'],
  [22141, 'Отделение анестезиологии-реанимации'],
  // [15, 'Операционный блок'],

  // [12, '1.ПАЛЛИАТИВНАЯ ПОМОЩЬ'],
  [22319, 'ОТДЕЛЕНИЕ ПАЛЛИАТИВНОЙ ПОМОЩИ'],
  [22103, 'ООПЛТ № 2'],

  /**
  [1, 'Врач-онколог (радиолог)'],
  [10, 'Врач-онколог'],
  [11, 'ОНКО-ПРОКТОЛОГ'],
  [13, 'ОНКО-ПУЛЬМОНОЛОГ'],
  [14, 'ПРОЦЕДУРНЫЙ КАБИНЕТ. пол-ка'],
  [15, 'Химиотерапия Стерлитамак'],
  [2, 'ОНКО-МАММОЛОГ (1 пол)'],
  [3, 'РАДИОТЕРАПЕВТ'],
  [4, 'ЛОР (ГОЛОВА-ШЕЯ)'],
  [5, 'ОНКО-ХИМИОТЕРАПЕВТ (1 пол)'],
  [6, 'ОНКО-ГИНЕКОЛОГ (1 пол)'],
  [7, 'СТОМАТОЛОГ'],
  [8, 'ОНКО-УРОЛОГ'],
  [9, 'ОБЩИЙ ОНКОЛОГ (1 пол)'],
  [70, 'Скрининг КРР'],
  [17, 'Врач-нейрохирург'],
  [16, 'Догоспитальный прием (приемный покой)'],

  [6, '2.ПАЛЛИАТИВНАЯ ПОМОЩЬ'],

  [1, 'ОНКО-ГИНЕКОЛОГ (2 пол)'],
  [2, 'ОНКО-МАММОЛОГ (2 пол)'],
  [3, 'ОБЩИЙ ОНКОЛОГ (2 пол)'],
  [4, 'ОНКО-ХИМИОТЕРАПЕВТ (2 пол)'],
  [41, 'ХИМИОТЕРАПИЯ РОД (2 пол)'],
  [7, 'Пункт забора крови'],
  */
];

changeNetworkSpeed('toHigh');
changeNetworkSpeed('toMedium');
changeNetworkSpeed('toLow');
changeNetworkSpeed('toHigh');
