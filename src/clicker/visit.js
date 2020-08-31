/* eslint-disable linebreak-style */
/* eslint-disable no-undef */

import robot from 'robotjs';
import { toSleep, toClick, toPaste, sleepUntilGetCorrectPixel } from '../utils';

const visit = (diseaseCode, visitCode) => {
  // "Посещение пациентом поликлиники: Добавление", вид обращения
  sleepUntilGetCorrectPixel(321, 371, 'ccffcc');

  toClick.normal(301, 368);
  robot.keyTap(1);

  // "Посещение пациентом поликлиники: Добавление", код посещения
  sleepUntilGetCorrectPixel(663, 561, 'ccffcc');

  toClick.normal(304, 564);
  robot.typeString(visitCode);

  sleepUntilGetCorrectPixel(319, 611, 'fbf0d2');

  robot.keyTap('enter');

  // "Посещение пациентом поликлиники: Добавление", диагноз
  toClick.normal(315, 955);
  toPaste.upper(diseaseCode.slice(0, 1));
  robot.typeString(diseaseCode);
  robot.keyTap('enter');

  toClick.normal(900, 955);

  toSleep(5000);

  // "Посещение пациентом поликлиники: Добавление", характер
  sleepUntilGetCorrectPixel(330, 995, 'ccffcc');

  toClick.normal(330, 995);
  robot.keyTap(3);

  sleepUntilGetCorrectPixel(110, 1050, '92a4b4');

  toClick.normal(110, 1050);
};

// visit('C44.3', 874737);

export default visit;
