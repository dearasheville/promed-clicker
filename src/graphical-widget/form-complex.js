import mouse from '../peripherals/mouse.js';

import SimpleForm from './form-simple.js';

import {
  sleepUntilPointColorMatchesList,
  sleepUntilPointColorUnmatchesList,
} from '../utils/sleep.js';

const pixelsForBorderEndPoint = {
  x: 2,
  y: 236,
};

const option = {
  color: {
    active: 'fbf0d2',
  },
};

const border = {
  color: {
    active: 'bdcbd4',
  },
};

class ComplexForm extends SimpleForm {
  get borderEndPoint() {
    const point = {
      x: this.startPoint.x + pixelsForBorderEndPoint.x,
      y: this.startPoint.y + pixelsForBorderEndPoint.y,
    };

    return point;
  }

  expand() {
    super.expand();

    this.sleep();

    mouse.move(this.firstOptionPoint);

    this.sleepUntilFormExpand();

    return this;
  }

  confirm() {
    this.sleep();

    mouse.move(this.firstOptionPoint);
    this.sleepUntilFormExpand();

    super.confirm();

    return this;
  }

  sleepUntilFormExpand() {
    sleepUntilPointColorMatchesList(this.borderEndPoint, border.color.active);
    sleepUntilPointColorUnmatchesList(this.firstOptionPoint, option.color.active);

    return this;
  }
}

export default ComplexForm;
