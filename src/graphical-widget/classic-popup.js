import mouse from '../peripherals/mouse.js';

import Button from './button.js';

const pixelsForPointConfirmButton = {
  x: 102,
  y: 74,
};

class ClassicPopup {
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

  get pointConfirmButton() {
    const width = 75;
    const height = 21;

    const confirmButtonData = {
      point: {
        x: this.startPoint.x + pixelsForPointConfirmButton.x,
        y: this.startPoint.y + pixelsForPointConfirmButton.y,
      },
      width,
      height,
    };

    const confirmButton = new Button(confirmButtonData);

    const point = confirmButton.pointCenter;

    return point;
  }

  confirm() {
    mouse.click(this.pointConfirmButton);

    return this;
  }
}

export default ClassicPopup;
