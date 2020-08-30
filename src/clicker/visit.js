/* eslint-disable linebreak-style */
/* eslint-disable no-undef */

import robot from 'robotjs';
import { sleep, toPaste } from '../utils';

const visit = (diseaseCode, visitCode) => {
  // "Посещение пациентом поликлиники: Добавление", вид обращения
  robot.moveMouse(301, 368);
  robot.mouseClick();
  robot.keyTap(1);

  // "Посещение пациентом поликлиники: Добавление", код посещения
  robot.moveMouse(304, 564);
  robot.mouseClick();

  sleep(1000);

  robot.typeString(visitCode);

  sleep(2500);
  robot.keyTap('enter');

  // "Посещение пациентом поликлиники: Добавление", диагноз
  robot.moveMouse(315, 955);
  robot.mouseClick();

  toPaste.upper(diseaseCode);

  // "Посещение пациентом поликлиники: Добавление", характер
  robot.moveMouse(330, 995);
  robot.mouseClick();
  robot.keyTap(3);

  sleep(5000);

  robot.moveMouse(110, 1050);
  robot.mouseClick();
};

export default visit;
