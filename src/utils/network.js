import robot from 'robotjs';

import mouse from '../input-devices/mouse.js';
import keyboard from '../input-devices/keyboard.js';
import keyboardVirtual from '../input-devices/keyboard-virtual.js';

import {
  sleepUntilGetCorrectPixel,
} from './sleep.js';

const changeNetworkSpeed = (speed) => {
  robot.keyToggle('control', 'down', 'shift');
  keyboardVirtual.type('ш');
  robot.keyToggle('control', 'up', 'shift');

  sleepUntilGetCorrectPixel([450, 62], 'efefef');

  if (robot.getPixelColor(80, 70) === 'dc362e') {
    mouse.click(80, 70);
    mouse.click(110, 70);
  }

  mouse.click(450, 62);

  switch (speed) {
    case 'toHigh':
      mouse.move(450, 115);
      sleepUntilGetCorrectPixel([450, 115], '767676');
      break;
    case 'toMedium':
      mouse.move(450, 150);
      sleepUntilGetCorrectPixel([450, 150], '767676');
      break;
    case 'toLow':
      mouse.move(450, 165);
      sleepUntilGetCorrectPixel([450, 165], '767676');
      break;
    case 'toOffline':
      mouse.move(450, 180);
      sleepUntilGetCorrectPixel([450, 180], '767676');
      break;
    default:
      break;
  }

  keyboard.tap('enter');

  mouse.click(30, 155);
};

export default changeNetworkSpeed;
