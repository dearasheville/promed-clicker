/* eslint-disable linebreak-style */
/* eslint-disable no-undef */

import robot from 'robotjs';
import { sleep } from '../utils';

const visit = () => {
  // "Посещение пациентом поликлиники: Добавление", вид обращения
  robot.moveMouse(301, 368);
  robot.mouseClick();
  robot.keyTap(1);

  // "Посещение пациентом поликлиники: Добавление", код посещения
  robot.moveMouse(304, 564);
  robot.mouseClick();
  sleep(2000);
  robot.typeString('874737');
  sleep(3000);
  robot.keyTap('enter');

  // "Посещение пациентом поликлиники: Добавление", характер
  robot.moveMouse(301, 959);
  robot.mouseClick();
  robot.keyTap(3);

  robot.moveMouse(110, 1050);
  robot.mouseClick();
};

export default visit;
