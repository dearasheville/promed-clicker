/* eslint-disable linebreak-style */

import robot from 'robotjs';

import mouse from '../input-devices/mouse';
import keyboard from '../input-devices/keyboard';

import {
  sleepUntilGetCorrectPixel, toSleep,
} from '../utils/sleep';

import errorPopupControl from '../utils/popup';

const service = (diagnostData) => {
  const medicalServiceCode = diagnostData[3];

  // "Данные о направлении", фон при прогрузке интерфейса
  sleepUntilGetCorrectPixel([1562, 385], 'd7d8db');

  // "Выполнение общей услуги: Добавление", фон блока
  sleepUntilGetCorrectPixel([1226, 315], 'f0f0f0');

  // "Выполнение общей услуги: Добавление", поле "услуга" доступно для ввода
  sleepUntilGetCorrectPixel([1305, 800], 'ccffcc');

  // "Выполнение общей услуги: Добавление", поле "место выполнения" доступно для ввода
  const visitWasNotComplete = robot.getPixelColor(1280, 455) === 'ccffcc';

  if (visitWasNotComplete) {
    // "Выполнение общей услуги: Добавление", кнопка "отмена"
    mouse.click(1411, 283);

    sleepUntilGetCorrectPixel([315, 337], 'ccffcc');

    mouse.click(1860, 1050);

    // "Талон амбулаторного пациента: Добавление", выделенное желтым посещение
    sleepUntilGetCorrectPixel([75, 660], 'fbf0d2');

    mouse.click(1860, 1050);

    return [false, null];
  }

  // "Выполнение общей услуги: Добавление", заполнение поля "услуга"
  mouse.click(1305, 800);

  toSleep(2500); // ?

  mouse.paste(medicalServiceCode.slice(0, -1), 'upper');
  keyboard.type(medicalServiceCode.substr(-1));

  // "Выполнение общей услуги: Добавление", желтый ховер при наведении мыши на услугу
  switch (medicalServiceCode) {
    // Наименование: "Магнитно-резонансная томография головного мозга"
    case 'A05.23.009':
      mouse.move(1500, 450);
      sleepUntilGetCorrectPixel([1400, 450], 'fbf0d2');
      break;
    // Наименование: "Компьютерная томография головного мозга"
    case 'A06.23.004':
      mouse.move(1500, 570);
      sleepUntilGetCorrectPixel([1500, 570], 'fbf0d2');
      break;
    // Наименование: "Компьютерная томография органов малого таза у женщин"
    case 'A06.20.002':
      mouse.move(1500, 540);
      sleepUntilGetCorrectPixel([1500, 540], 'fbf0d2');
      break;
    default:
      mouse.move(1500, 860);
      sleepUntilGetCorrectPixel([1500, 860], 'fbf0d2');
      break;
  }

  keyboard.tap('enter');

  // "Выполнение общей услуги: Добавление", кнопка "сохранить"
  mouse.click(640, 920);

  sleepUntilGetCorrectPixel([1300, 305], 'dcdde0', 'dddee1');
  sleepUntilGetCorrectPixel([1300, 305], 'd0d1d4', 'ffffff');

  return errorPopupControl('medicalService', [1300, 305], 'd0d1d4');
};

export default service;

// service([0, 1, 2, 'A06.09.005']);
