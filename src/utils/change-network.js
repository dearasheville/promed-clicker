import mouse from '../input-devices/mouse.js';
import keyboard from '../input-devices/keyboard.js';

import {
  sleepUntilPointColorMatchesList,
} from './sleep.js';

const switchActiveAppToDevTools = () => {
  keyboard.tap('i', ['control', 'shift']);
  keyboard.tap('e', ['control'], 2);
};

const switchActiveAppToEdge = () => {
  const x = 30;
  const y = 155;

  mouse.click({ x, y });
};

const devTools = {
  point: {
    activate: {
      x: 450,
      y: 62,
    },
  },
  color: {
    active: 'efefef',
  },
};

const networkMenu = {
  point: {
    activate: {
      x: 462,
      y: 70,
    },
    highSpeed: {
      x: 462,
      y: 115,
    },
    medSpeed: {
      x: 462,
      y: 150,
    },
    lowSpeed: {
      x: 462,
      y: 165,
    },
  },
  color: {
    active: '767676',
  },
};

const changeNetworkSpeed = (speed) => {
  switchActiveAppToDevTools();

  sleepUntilPointColorMatchesList(devTools.point.activate, devTools.color.active);

  mouse.click(networkMenu.point.activate);

  switch (speed) {
    case 'high':
      mouse.move(networkMenu.point.highSpeed);
      sleepUntilPointColorMatchesList(networkMenu.point.highSpeed, networkMenu.color.active);
      break;
    case 'medium':
      mouse.move(networkMenu.point.medSpeed);
      sleepUntilPointColorMatchesList(networkMenu.point.medSpeed, networkMenu.color.active);
      break;
    case 'low':
      mouse.move(networkMenu.point.lowSpeed);
      sleepUntilPointColorMatchesList(networkMenu.point.lowSpeed, networkMenu.color.active);
      break;
    default:
      break;
  }

  keyboard.tap('enter');

  switchActiveAppToEdge();
};

export default changeNetworkSpeed;
