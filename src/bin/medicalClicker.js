/* eslint-disable linebreak-style */
/* eslint-disable no-undef */

import robot from 'robotjs';
import clipboardy from 'clipboardy';

import sleep from '../utils';

const toPaste = (data) => {
  clipboardy.writeSync(data);

  robot.keyToggle('v', 'down', 'control');
  robot.keyToggle('v', 'up', 'control');
};

const clicker = (surname, name, path, birth) => {
  moveMouse(100, 100);
  mouseClick();
  toPaste(surname);

  moveMouse(200, 200);
  mouseClick();
  toPaste(name);
};

export default clicker;
