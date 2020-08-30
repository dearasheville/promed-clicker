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

const clicker = (surname, name, pathronymic, birth) => {
  search(surname, name, pathronymic, birth);

  sleep(5000);

  /*
  direction();

  robot.moveMouse(114, 599);
  robot.mouseClick();

  sleep(5000);

  surveillance();

  visit();

  sleep(5000);

  robot.moveMouse(135, 765);
  robot.mouseClick();

  sleep(2000);

  robot.moveMouse(135, 795);
  robot.mouseClick();

  service();

  sleep(5000);

  result();

  robot.moveMouseSmooth(130, 1050);
  robot.mouseClick();
  */
};

export default clicker;
