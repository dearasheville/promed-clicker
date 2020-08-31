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

robot.setMouseDelay(100);
robot.setKeyboardDelay(100);

const clicker = (surname, name, pathronymic, birth, department, clinician, diseaseCode, visitCode, medicalService) => {
  search(surname, name, pathronymic, birth);

  // direction(department, clinician, diseaseCode);

  while (robot.getPixelColor(225, 495) !== 'ffffff') {
    sleep(100);
  }

  robot.moveMouse(114, 599);
  robot.mouseClick();

  while (robot.getPixelColor(966, 197) !== '36383c') {
    sleep(100);
  }

  surveillance();

  while (robot.getPixelColor(225, 495) !== 'ffffff') {
    sleep(100);
  }

  visit(diseaseCode, visitCode);

  sleep(10000);

  robot.moveMouseSmooth(110, 755);
  robot.mouseClick();

  robot.moveMouseSmooth(148, 785);
  robot.mouseClick();

  if (service(medicalService) === false) {
    robot.moveMouse(1354, 925);
    robot.mouseClick();

    while (robot.getPixelColor(339, 720) !== '505e72') {
      sleep(100);
    }

    robot.moveMouse(135, 765);
    robot.mouseClick();

    robot.moveMouse(135, 795);
    robot.mouseClick();

    service(medicalService);
  }

  while (robot.getPixelColor(93, 974) !== 'ffffff') {
    sleep(100);
  }

  result();

  robot.moveMouse(130, 1050);
  robot.mouseClick();

  if (diseaseCode.slice(0, 1) === 'C') {
    while (robot.getPixelColor(719, 507) !== '36383c') {
      sleep(100);
    }

    robot.moveMouseSmooth(990, 635);
    robot.mouseClick();

    while (robot.getPixelColor(872, 247) !== 'ffffff') {
      sleep(100);
    }

    robot.moveMouseSmooth(1865, 1050);
    robot.mouseClick();

    while (robot.getPixelColor(878, 896) !== '4d5b6e') {
      sleep(100);
    }

    robot.moveMouse(130, 1050);
    robot.mouseClick();
  }

  sleep(10000);
};

export default clicker;
