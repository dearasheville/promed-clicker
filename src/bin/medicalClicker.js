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

export default data => toPaste(data);
