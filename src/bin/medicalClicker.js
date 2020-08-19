/* eslint-disable linebreak-style */
/* eslint-disable no-undef */

import robot from 'robotjs';
import clipboardy from 'clipboardy';

import sleep from '../utils';

const toPaste = (data) => {
  clipboardy.writeSync(data);

  robot.keyToggle('v', 'down', 'control');
  robot.keyToggle('v', 'up', 'control');

  robot.typeString(data);
};

const clicker = (surname, name, path, birth) => {
  robot.moveMouse(32, 230);
  robot.mouseClick();

  sleep(5000);

  toPaste(name);
};

toPaste('1234');
// clicker('a', 'c', 'c', 'd');

export default clicker;
