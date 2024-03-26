import robot from 'robotjs';
import clipboardy from 'clipboardy';

import mouse from '../input-devices/mouse.js';
import keyboard from '../input-devices/keyboard.js';

import service1 from './services/service1.js';
import service2 from './services/service2.js';
import service3 from './services/service3.js';

import {
  toSleep, sleepUntilGetCorrectPixel,
} from '../utils/sleep.js';

const service = (diagnostData) => {
  const researchDate = diagnostData[0];
  const diagnostCode = diagnostData[1];
  const medicalVisitCode = diagnostData[2];
  const medicalServiceCode = diagnostData[3];
  const medicalDenominationCode = diagnostData[4];

  // "Результат выполнения услуги: Основные данные", серый блок
  sleepUntilGetCorrectPixel([1500, 287], 'e3e5e7');
  sleepUntilGetCorrectPixel([1500, 287], 'ffffff');

  toSleep(5000);

  mouse.click(1775, 180);
  keyboard.tap('pageup');
  keyboard.tap('pageup');

  if (medicalDenominationCode !== '') {
    mouse.click(280, 260);
    keyboard.tap('delete');

    mouse.click(1000, 310);

    sleepUntilGetCorrectPixel([280, 260], 'ccffcc');
    toSleep(1000); // ??

    mouse.click(235, 260);
    keyboard.type(medicalDenominationCode);
    mouse.move(235, 276);
    sleepUntilGetCorrectPixel([235, 276], 'fbf0d2');
    keyboard.tap('enter');
  }

  switch (medicalServiceCode) {
    case 'A05.01.002':
      service2(diagnostData);
      break;
    case 'A06.09.005':
      service2(diagnostData);
      break;
    case 'A06.03.021.001':
      service2(diagnostData);
      break;
    case 'A06.03.036.001':
      service2(diagnostData);
      break;
    case 'A06.20.002':
      service2(diagnostData);
      break;
    case 'A06.03.002':
      service2(diagnostData);
      break;
    case 'A06.01.001':
      service3(diagnostData);
      break;
    case 'A06.30.005.002':
      service3(diagnostData);
      break;
    default:
      service1(diagnostData);
      break;
  }

  // "Заявка на исследование: Назначенные услуги", кнопка "Сохранить"
  mouse.click(85, 1055);

  // "Заявка на исследование: Назначенные услуги", "Сохранение...": фон серого цвета
  // sleepUntilGetCorrectPixel([1780, 285], 'e3e5e7', 'd6d8da', 'dfe8f6'); // test

  sleepUntilGetCorrectPixel([1780, 285], 'e3e5e7');
  sleepUntilGetCorrectPixel([1780, 285], 'd6d8da', 'dfe8f6');

  if (robot.getPixelColor(1780, 285) === 'd6d8da') {
    robot.moveMouse(910, 555);

    const test = mouse.copy('test');

    if (test.includes('АКиНЕО')) {
      mouse.click(950, 600);
    } else {
      mouse.click(992, 600);

      // "Результат выполнения услуги: Основные данные", "Врач"
      mouse.click(235, 434);
      toSleep(1000); // ??
      keyboard.type(diagnostCode);
      sleepUntilGetCorrectPixel([238, 453], 'fbf0d2');
      keyboard.tap('enter');

      mouse.click(85, 1055);
    }
  }
};

export default service;
