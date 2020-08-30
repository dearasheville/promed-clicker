/* eslint-disable linebreak-style */
/* eslint-disable no-undef */

import robot from 'robotjs';

import search from '../clicker/search';
import direction from '../clicker/direction';
import visit from '../clicker/visit';
import service from '../clicker/service';

import { sleep } from '../utils';

robot.setMouseDelay(50);

// const clicker = (surname, name, path, birth) => sleep(5000);

sleep(2500);

// search();
// direction();


robot.moveMouse(114, 599);
robot.mouseClick();

sleep(5000);

robot.moveMouse(1405, 1010);
robot.mouseClick();

visit();

/**




sleep(5000);

robot.moveMouse(135, 765);
robot.mouseClick();

sleep(2000);

robot.moveMouse(135, 795);
robot.mouseClick();

sleep(5000);





robot.moveMouseSmooth(640, 920);
robot.mouseClick();


robot.moveMouseSmooth(395, 950);
robot.mouseClick();
robot.keyTap('1');
robot.keyTap('tab');
robot.keyTap('tab');
robot.keyTap('3');
sleep(1000);
robot.moveMouseSmooth(130, 1050);
robot.mouseClick();

export default clicker;

 */