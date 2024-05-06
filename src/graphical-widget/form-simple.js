import mouse from '../peripherals/mouse.js';
import keyboard from '../peripherals/keyboard.js';
import screen from '../peripherals/screen.js';

import Button from './button.js';

import {
  doPointColorAndListColorMatch,
} from '../utils/colors.js';

import {
  sleepForMs,
  sleepUntilPointColorUnmatchesList,
} from '../utils/sleep.js';

const pixelsForPointLeftCenter = {
  x: 2,
};

const outline = {
  color: {
    active: ['0000ff', '99bce8', '99aabb'],
    required: '7bdf73',
    unavalible: '9caabd',
  },
};

class SimpleForm {
  constructor(data) {
    this.startPoint = data.point;
    this.width = data.width;
    this.height = data.height;

    const { x, y } = this.startPoint;

    this.point2 = {
      x,
      y: y + this.height,
    };

    this.point3 = {
      x: x + this.width,
      y: y + this.height,
    };

    this.point4 = {
      x: x + this.width,
      y,
    };
  }

  get pointLeftCenter() {
    const point = {
      x: this.startPoint.x + pixelsForPointLeftCenter.x,
      y: (this.startPoint.y + this.point2.y) / 2,
    };

    return point;
  }

  get pointCenter() {
    const point = {
      x: (this.startPoint.x + this.point4.x) / 2,
      y: (this.startPoint.y + this.point2.y) / 2,
    };

    return point;
  }

  get pointOptionButton() {
    const width = 17;
    const height = 22;

    const optionButtonData = {
      point: {
        x: this.point4.x - width,
        y: this.point4.y,
      },
      width,
      height,
    };

    const optionButton = new Button(optionButtonData);

    const point = optionButton.pointCenter;

    return point;
  }

  activate() {
    mouse.click(this.pointLeftCenter);
    this.sleepUntilFormBecomeActive();

    return this;
  }

  sleep(ms = 2500) {
    this.activate();

    sleepForMs(ms);

    return this;
  }

  option() {
    this.activate();
    mouse.click(this.pointOptionButton);

    return this;
  }

  expand() {
    this.option();

    return this;
  }

  select(type) {
    this.activate();

    switch (type) {
      case 'ultrasound':
        keyboard.tap('down', [], 8);
        break;
      case 'mri':
        keyboard.tap('down', [], 3);
        break;
      case 'ct':
        keyboard.tap('down', [], 5);
        break;
      case 'spect':
        keyboard.tap('down', [], 5);
        break;
      default:
        break;
    }

    keyboard.tap('enter');

    return this;
  }

  clear() {
    this.activate();
    keyboard.selectAll();
    keyboard.tap('delete');

    return this;
  }

  tap(key, modifier, count, delay) {
    this.activate();
    keyboard.tap(key, modifier, count, delay);

    return this;
  }

  type(text, delay) {
    this.activate();
    keyboard.type(text, delay);

    return this;
  }

  copy() {
    this.activate();
    keyboard.selectAll();
    const data = keyboard.copy();

    return data;
  }

  paste(data) {
    this.activate();
    keyboard.selectAll();
    keyboard.paste(data);

    return this;
  }

  confirm() {
    this.activate();
    keyboard.tap('enter');

    return this;
  }

  isActive() {
    const isFormActive = doPointColorAndListColorMatch(
      this.startPoint,
      outline.color.active,
    );

    return isFormActive;
  }

  isRequired() {
    const isFormRequired = doPointColorAndListColorMatch(
      this.startPoint,
      outline.color.required,
    );

    return isFormRequired;
  }

  sleepUntilFormBecomeActive() {
    sleepUntilPointColorUnmatchesList(this.startPoint, outline.color.active);

    return this;
  }
}

export default SimpleForm;
