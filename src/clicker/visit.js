/* eslint-disable linebreak-style */
/* eslint-disable no-undef */

import robot from 'robotjs';
import { sleep, toPaste } from '../utils';

const visit = (diseaseCode, visitCode) => {
  // "Посещение пациентом поликлиники: Добавление", вид обращения
  while (robot.getPixelColor(321, 371) !== 'ccffcc') {
    sleep(100);
  }

  robot.moveMouse(301, 368);
  robot.mouseClick();
  robot.keyTap(1);

  // "Посещение пациентом поликлиники: Добавление", код посещения
  while (robot.getPixelColor(663, 561) !== 'ccffcc') {
    sleep(100);
  }

  robot.moveMouse(304, 564);
  robot.mouseClick();

  robot.typeString(visitCode);

  while (robot.getPixelColor(319, 611) !== 'fbf0d2') {
    sleep(100);
  }

  robot.keyTap('enter');

  // "Посещение пациентом поликлиники: Добавление", диагноз
  robot.moveMouse(315, 955);
  robot.mouseClick();

  toPaste.upper(diseaseCode.slice(0, 1));
  robot.typeString(diseaseCode);

  robot.moveMouse(900, 955);
  robot.mouseClick();

  sleep(5000);

  // "Посещение пациентом поликлиники: Добавление", характер
  while (robot.getPixelColor(330, 995) !== 'ccffcc') {
    sleep(100);
  }

  robot.moveMouse(330, 995);
  robot.mouseClick();

  robot.keyTap(3);

  while (robot.getPixelColor(110, 1050) !== '92a4b4') {
    sleep(100);
  }

  robot.moveMouse(110, 1050);
  robot.mouseClick();
};

// visit('C44.3', 874737);

export default visit;
