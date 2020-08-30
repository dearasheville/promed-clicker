/* eslint-disable linebreak-style */
/* eslint-disable no-undef */

import robot from 'robotjs';

const result = () => {
  robot.moveMouseSmooth(395, 950);
  robot.mouseClick();
  robot.keyTap('1');

  robot.keyTap('tab');

  robot.keyTap('tab');
  robot.keyTap('3');
};

export default result;
