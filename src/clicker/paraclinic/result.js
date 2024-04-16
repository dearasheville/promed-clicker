import keyboard from '../../input-devices/keyboard.js';
import mouse from '../../input-devices/mouse.js';

import Button from '../../graphical-widget/button.js';

import result1 from './results/result1.js';
import result2 from './results/result2.js';
import result3 from './results/result3.js';
import result4 from './results/result4.js';

import {
  sleepUntilPointColorUnmatchesList,
} from '../../utils/sleep.js';

const saveButtonData = {
  point: {
    x: 75,
    y: 1050,
  },
  width: 77,
  height: 21,
};

const saveButton = new Button(saveButtonData);

const mainDataField = {
  point: {
    x: 1650,
    y: 300,
  },
  color: {
    normal: 'ffffff',
    covered: 'e3e5e7',
    popup: 'd6d8da',
  },
};

const result = (diagnost, service) => {
  sleepUntilPointColorUnmatchesList(mainDataField.point, mainDataField.color.normal);

  mouse.click(mainDataField.point);
  keyboard.scroll('top');

  switch (service.rms) {
    case 'A05.01.002':
      result2(diagnost, service);
      break;
    case 'A06.09.005':
      result2(diagnost, service);
      break;
    case 'A06.03.021.001':
      result2(diagnost, service);
      break;
    case 'A06.03.036.001':
      result2(diagnost, service);
      break;
    case 'A06.20.002':
      result2(diagnost, service);
      break;
    case 'A06.03.002':
      result2(diagnost, service);
      break;
    case 'A06.01.001':
      result3(diagnost, service);
      break;
    case 'A06.30.005.002':
      result3(diagnost, service);
      break;
    case 'A07.30.019':
      result4(diagnost, service);
      break;
    default:
      result1(diagnost, service);
      break;
  }

  saveButton.press();
};

export default result;
