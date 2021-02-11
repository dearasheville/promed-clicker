/* eslint-disable linebreak-style */
/* eslint-disable no-undef */
/* eslint-disable max-len */

import robot from 'robotjs';

import {
  sleepUntilGetCorrectPixel, toClick, toPaste,
} from '../utils';

const service = (medicalService) => {
  // "Данные о направлении", фон при прогрузке интерфейса
  sleepUntilGetCorrectPixel(1562, 385, 'd7d8db');
  // "Выполнение общей услуги: Добавление", фон блока
  sleepUntilGetCorrectPixel(1226, 315, 'f0f0f0');
  // "Выполнение общей услуги: Добавление", поле "услуга" доступно для ввода
  sleepUntilGetCorrectPixel(1305, 800, 'ccffcc');

  // "Выполнение общей услуги: Добавление", поле "место выполнения" доступно для ввода
  if (robot.getPixelColor(1280, 455) === 'ccffcc') {
    return false;
  }

  // "Выполнение общей услуги: Добавление", заполнение поля "услуга"
  toClick.normal(1305, 800);

  toPaste.upper(medicalService.slice(0, -1));
  robot.typeString(medicalService.substr(-1));

  // "Выполнение общей услуги: Добавление", желтый ховер при наведении мыши на услугу
  switch (medicalService) {
    // Наименование: "Магнитно-резонансная томография головного мозга"
    case 'A05.23.009':
      robot.moveMouse(1500, 450);
      sleepUntilGetCorrectPixel(1400, 450, 'fbf0d2');
      break;
    // Наименование: "Компьютерная томография головного мозга"
    case 'A06.23.004':
      robot.moveMouse(1500, 570);
      sleepUntilGetCorrectPixel(1500, 570, 'fbf0d2');
      break;
    // Наименование: "Компьютерная томография органов малого таза у женщин"
    case 'A06.20.002':
      robot.moveMouse(1500, 540);
      sleepUntilGetCorrectPixel(1500, 540, 'fbf0d2');
      break;
    default:
      robot.moveMouse(1500, 860);
      sleepUntilGetCorrectPixel(1500, 860, 'fbf0d2');
      break;
  }

  robot.keyTap('enter');

  // "Выполнение общей услуги: Добавление", кнопка "сохранить"
  toClick.normal(640, 920);

  return true;
};

export default service;
