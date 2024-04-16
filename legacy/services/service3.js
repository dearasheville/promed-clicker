import robot from 'robotjs';

import mouse from '../../src/input-devices/mouse.js';
import keyboard from '../../src/input-devices/keyboard.js';

import {
  sleepForMs,
  sleepUntilPointColorUnmatchesList,
} from '../../src/utils/sleep.js';

const service3 = (diagnostData) => {
  const researchDate = diagnostData[0];
  const diagnostCode = diagnostData[1];
  const medicalVisitCode = diagnostData[2];
  const medicalServiceCode = diagnostData[3];

  keyboard.tap('pageup');

  // "Результат выполнения услуги: Основные данные", "Код посещения"
  sleepUntilPointColorUnmatchesList([235, 318], 'ccffcc');

  // "Результат выполнения услуги: Основные данные", "Услуга: Поиск"
  mouse.click(722, 326);
  sleepUntilPointColorUnmatchesList([1745, 380], 'd6d8da');

  sleepForMs(1000); // ?

  keyboard.type(medicalVisitCode);
  keyboard.tap('enter');

  sleepForMs(2000); // ??
  keyboard.tap('enter', 2);

  // "Результат выполнения услуги: Основные данные", "Дата исследования"
  mouse.click(235, 352);
  keyboard.type(researchDate);

  // "Результат выполнения услуги: Основные данные", "№ услуги из журнала"
  mouse.click(235, 380);
  keyboard.type('0');

  // "Результат выполнения услуги: Основные данные", "Врач"
  mouse.click(235, 500);
  sleepForMs(1000); // ??
  keyboard.type(diagnostCode);
  mouse.move(240, 540);
  sleepUntilPointColorUnmatchesList([238, 540], 'fbf0d2');
  keyboard.tap('enter');

  // "Результат выполнения услуги: Основные данные", "Лучевая нагрузка"
  if (robot.getPixelColor(235, 600) === 'ccffcc') {
    mouse.click(235, 600);
    keyboard.type('0');
  }

  // "Результат выполнения рентгенологического исследования", "анатомическая область"
  mouse.click(235, 900);

  switch (medicalServiceCode) {
    case 'A06.01.001':
      keyboard.type('159');
      break;
    case 'A06.30.005.002':
      keyboard.type('11');
      break;
    default:
      break;
  }

  mouse.move(235, 915);
  sleepUntilPointColorUnmatchesList([235, 915], 'fbf0d2');
  keyboard.tap('enter');
};

export default service3;
