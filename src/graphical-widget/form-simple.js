import mouse from '../input-devices/mouse.js';
import keyboard from '../input-devices/keyboard.js';

import Button from './button.js';

import {
  sleepUntilPointColorUnmatchesList,
} from '../utils/sleep.js';

const pixelsForPointControlButton = {
  x: 7,
};

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

  get pointExpandButton() {
    const width = 17;
    const height = 22;

    const expandButtonData = {
      point: {
        x: this.point4.x - width,
        y: this.point4.y,
      },
      width,
      height,
    };

    const expandButton = new Button(expandButtonData);

    const point = {
      x: expandButton.startPoint.x + pixelsForPointControlButton.x,
      y: expandButton.pointCenter.y,
    };

    return point;
  }

  activate() {
    mouse.click(this.pointLeftCenter);
    this.sleepUntilFormBecomeActive();

    return this;
  }

  expand() {
    this.activate();
    mouse.click(this.pointExpandButton);

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

  tap(data) {
    this.activate();
    keyboard.tap(data);

    return this;
  }

  type(data) {
    this.activate();
    keyboard.type(data);

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

  sleepUntilFormBecomeActive() {
    sleepUntilPointColorUnmatchesList(this.startPoint, outline.color.active);

    return this;
  }
}

export default SimpleForm;
