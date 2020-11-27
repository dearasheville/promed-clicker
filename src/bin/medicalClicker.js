/* eslint-disable linebreak-style */
/* eslint-disable no-undef */

import robot from 'robotjs';

import search from '../clicker/search';
// import direction from '../clicker/direction';
import visit from '../clicker/visit';
import service from '../clicker/service';
import surveillance from '../clicker/surveillance';
import result from '../clicker/result';
import tnm from '../clicker/tnm';

import { toSleep, toClick, sleepUntilGetCorrectPixel } from '../utils';

robot.setMouseDelay(100); // 100
robot.setKeyboardDelay(100); // 100

const clicker = (surname, name, pathronymic, birth, department, clinician, diseaseCode, visitCode, medicalService, diagnost, date) => {
  search(surname, name, pathronymic, birth);

  sleepUntilGetCorrectPixel(80, 660, 'fbf0d2');

  // direction(department, clinician, diseaseCode);

  // "Посещения: Добавить"
  toClick.normal(114, 599);

  sleepUntilGetCorrectPixel(800, 507, 'ccffcc');

  surveillance();

  sleepUntilGetCorrectPixel(225, 495, 'ffffff');

  // "Посещение пациентом поликлиники: Добавление", стационар
  if (visit(diseaseCode, visitCode, diagnost, date) === false) {
    toSleep(5000);

    return true;
  }

  sleepUntilGetCorrectPixel(75, 660, 'fbf0d2');
  sleepUntilGetCorrectPixel(75, 825, 'ffffff');

  toClick.smooth(110, 755);
  toClick.smooth(148, 785);

  if (service(medicalService) === false) { // Оптимизация при баге интерфейса посещения.
    toClick.normal(1354, 925); // Закрытие меню услуги.

    toSleep(2500);

    toClick.normal(1860, 1050); // Закрытие талона.

    return false;
  }

  sleepUntilGetCorrectPixel(93, 974, 'ffffff');

  result();

  toClick.normal(130, 1050);

  if ((diseaseCode.slice(0, 1) === 'C') || (diseaseCode.slice(0, 2) === 'D0')) {
    tnm(surname, name, pathronymic);
  }

  // sleepUntilGetCorrectPixel(1424, 195, 'd7d8db');

  return true; // Выполнены все условия, перезабитие талона не требуется.
};

export default clicker;
