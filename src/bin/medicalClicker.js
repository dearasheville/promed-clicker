/* eslint-disable linebreak-style */
/* eslint-disable no-undef */
/* eslint-disable max-len */

import robot from 'robotjs';

import search from '../clicker/search';
// import direction from '../clicker/direction';
import surveillance from '../clicker/surveillance';
import visit from '../clicker/visit';
import service from '../clicker/service';
import result from '../clicker/result';
import tnm from '../clicker/tnm';

import {
  toClick, sleepUntilGetCorrectPixel, changeNetworkSpeed,
} from '../utils';

robot.setMouseDelay(100); // 100\250
robot.setKeyboardDelay(100); // 100\250

const clicker = (surname, name, pathronymic, birth, department, clinician, diseaseCode, visitCode, medicalService, diagnost, date) => {
  search(surname, name, pathronymic, birth);

  sleepUntilGetCorrectPixel(80, 660, 'fbf0d2');

  // direction(department, clinician, diseaseCode);

  // "Посещения: Добавить"
  robot.keyTap('insert');

  surveillance();

  // "Талон амбулаторного пациента: Добавление", белый фон
  sleepUntilGetCorrectPixel(225, 495, 'ffffff');

  // "Посещение пациентом поликлиники: Добавление", стационар
  if (!visit(diseaseCode, visitCode, diagnost, date)) {
    console.log(`Стационарный случай: ${surname} ${name} ${pathronymic}`);

    // "Талон амбулаторного пациента: Добавление", выделенное желтым посещение
    sleepUntilGetCorrectPixel(75, 660, 'fbf0d2');

    changeNetworkSpeed('toHigh');

    // "Талон амбулаторного пациента: Добавление", кнопка "отмена"
    toClick.normal(1860, 1050);

    // "Талон амбулаторного пациента: Добавление", талон заполнен корректно
    return true;
  }

  // "Талон амбулаторного пациента: Добавление", выделенное желтым посещение
  sleepUntilGetCorrectPixel(75, 660, 'fbf0d2');

  changeNetworkSpeed('toHigh');

  // "Талон амбулаторного пациента: Добавление", выделенная белым услуга
  sleepUntilGetCorrectPixel(75, 825, 'ffffff');

  // "Талон амбулаторного пациента: Добавление", "Услуги: добавить"
  toClick.normal(110, 755);
  // "Талон амбулаторного пациента: Добавление", "Добавить общую услугу"
  toClick.normal(148, 785);

  // "Выполнение общей услуги: Добавление", незаполненное посещение
  if (!service(medicalService)) {
    // "Выполнение общей услуги: Добавление", кнопка "отмена"
    toClick.normal(1354, 925);

    // "Талон амбулаторного пациента: Добавление", выделенное желтым посещение
    sleepUntilGetCorrectPixel(75, 660, 'fbf0d2'); // Сменить на другую проверку?

    // "Талон амбулаторного пациента: Добавление", кнопка "отмена"
    toClick.normal(1860, 1050);

    // "Талон амбулаторного пациента: Добавление", талон заполнен некорректно
    return false;
  }

  // "Талон амбулаторного пациента: Добавление", выделенный белым результат
  sleepUntilGetCorrectPixel(93, 974, 'ffffff');

  result();

  // "Талон амбулаторного пациента: Добавление", кнопка "сохранить"
  toClick.normal(130, 1050);

  if (diseaseCode.slice(0, 1) === 'C' || diseaseCode.slice(0, 2) === 'D0') {
    if (!tnm(surname, name, pathronymic)) {
      sleepUntilGetCorrectPixel(1805, 192, '556677');

      // "Талон амбулаторного пациента: Добавление", кнопка "отмена"
      toClick.normal(1860, 1050);
    }

    // "Талон амбулаторного пациента: Добавление", талон заполнен корректно
    return true;
  }

  // "Талон амбулаторного пациента: Добавление", талон заполнен корректно
  return true;
};

export default clicker;
