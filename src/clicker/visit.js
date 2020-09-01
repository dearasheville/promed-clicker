/* eslint-disable linebreak-style */
/* eslint-disable no-undef */

import robot from 'robotjs';
import clipboardy from 'clipboardy';

import { toSleep, toClick, toCopy, toPaste, sleepUntilGetCorrectPixel } from '../utils';

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
  const gender = robot.getPixelColor(315, 925) === 'ccffcc' ? 'Мужской' : 'Женский';

  console.log(gender);

  switch (gender) {
    case 'Мужской':
      toClick.normal(315, 925);
      break;
    case 'Женский':
      toClick.normal(315, 955);
      break;
    default:
      break;
  }

  toPaste.upper(diseaseCode.slice(0, 1));
  robot.typeString(diseaseCode);
  robot.keyTap('enter');

  toClick.normal(900, 955);

  toSleep(5000);

  // "Посещение пациентом поликлиники: Добавление", характер
  switch (gender) {
    case 'Мужской':
      sleepUntilGetCorrectPixel(330, 960, 'ccffcc');

      toClick.normal(330, 960);
      break;
    case 'Женский':
      sleepUntilGetCorrectPixel(330, 995, 'ccffcc');

      toClick.normal(330, 995);
      break;
    default:
      break;
  }

  robot.keyTap(3);

  sleepUntilGetCorrectPixel(110, 1050, '92a4b4');

  toClick.normal(110, 1050);

  toSleep(5000);

  if (robot.getPixelColor(1199, 486) === 'd7d8db') {
    toClick.normal(1040, 620);
    toSleep(5000);
    toClick.normal(1860, 1050);
    toSleep(5000);
    toClick.normal(1860, 1050);

    return false;
  }
};

// visit('C44.3', 874737);

export default visit;
