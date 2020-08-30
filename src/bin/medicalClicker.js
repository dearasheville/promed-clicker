/* eslint-disable linebreak-style */
/* eslint-disable no-undef */

import robot from 'robotjs';

import search from '../clicker/search';
import direction from '../clicker/direction';
import visit from '../clicker/visit';
import service from '../clicker/service';
import surveillance from '../clicker/surveillance';
import result from '../clicker/result';

import { sleep } from '../utils';

robot.setMouseDelay(50);

const clicker = (surname, name, pathronymic, birth, department, clinician, diseaseCode, visitCode, medicalService) => {
  search(surname, name, pathronymic, birth);

  sleep(5000);

  // direction(department, clinician, diseaseCode);

  robot.moveMouse(114, 599);
  robot.mouseClick();

  sleep(5000);

  surveillance();

  visit(diseaseCode, visitCode);

  sleep(5000);

  robot.moveMouse(135, 765);
  robot.mouseClick();

  sleep(2000);

  robot.moveMouse(135, 795);
  robot.mouseClick();

  service(medicalService);

  sleep(5000);

  result();

  robot.moveMouse(130, 1050);
  robot.mouseClick();

  if (diseaseCode.slice(0, 1) === 'C') {
    robot.moveMouseSmooth(990, 635);
    robot.mouseClick();

    sleep(5000);

    robot.moveMouse(1865, 1050);
    robot.mouseClick();

    sleep(2500);

    robot.moveMouse(130, 1050);
    robot.mouseClick();
  }
};

export default clicker;
