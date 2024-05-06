import mouse from '../peripherals/mouse.js';
import keyboard from '../peripherals/keyboard.js';

import {
  sleepUntilPointColorUnmatchesList,
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

  sleepUntilPointColorUnmatchesList(devTools.point.activate, devTools.color.active);

  mouse.click(networkMenu.point.activate);

  switch (speed) {
    case 'high':
      mouse.move(networkMenu.point.highSpeed);
      sleepUntilPointColorUnmatchesList(networkMenu.point.highSpeed, networkMenu.color.active);
      break;
    case 'medium':
      mouse.move(networkMenu.point.medSpeed);
      sleepUntilPointColorUnmatchesList(networkMenu.point.medSpeed, networkMenu.color.active);
      break;
    case 'low':
      mouse.move(networkMenu.point.lowSpeed);
      sleepUntilPointColorUnmatchesList(networkMenu.point.lowSpeed, networkMenu.color.active);
      break;
    default:
      break;
  }

  keyboard.tap('enter');

  switchActiveAppToEdge();
};

export default changeNetworkSpeed;
