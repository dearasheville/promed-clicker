import {
  saveButtonData,
  mainDataField,
} from '../data-forms/result.js';

import result1 from './results/result1.js';
import result2 from './results/result2.js';
import result3 from './results/result3.js';
import result4 from './results/result4.js';

import popupControl from './popup/popup-control.js';

import keyboard from '../../peripherals/keyboard.js';
import mouse from '../../peripherals/mouse.js';

import Button from '../../graphical-widget/button.js';

import {
  sleepForMs,
  sleepUntilPointColorUnmatchesList,
} from '../../utils/sleep.js';

const msToDelay = 5000;

const saveButton = new Button(saveButtonData);

const result = (diagnost, service) => {
  sleepUntilPointColorUnmatchesList(mainDataField.point, mainDataField.color.normal);

  sleepForMs(msToDelay); // ??

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

  popupControl.result();
};

export default result;
