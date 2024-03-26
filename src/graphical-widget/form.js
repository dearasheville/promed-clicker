import mouse from '../input-devices/mouse.js';
import keyboard from '../input-devices/keyboard.js';
import matchPointAndListColors from '../utils/colors-match.js';

const form = {
  color: {
    required: 'cfcfcf',
    active: 'ffffff',
  },
};

class Form {
  constructor(startPoint, width, height) {
    const { x, y } = startPoint;

    this.point1 = startPoint;

    this.point2 = {
      x,
      y: y + height,
    };

    this.point3 = {
      x: x + width,
      y: y + height,
    };

    this.point4 = {
      x: x + width,
      y,
    };
  }

  click() {
    mouse.click(this.point2);
  }

  copy() {
    mouse.click(this.point2);

    keyboard.select();
    keyboard.copy();
  }

  fill(data) {
    mouse.click(this.point2);

    keyboard.paste(data);
  }

  isActive() {
    mouse.click(this.point2);

    const isFormAcitve = !!matchPointAndListColors(this.point2, form.color.active);

    return isFormAcitve;
  }
}

export default Form;
