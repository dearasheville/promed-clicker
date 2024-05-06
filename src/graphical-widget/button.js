import mouse from '../peripherals/mouse.js';

class Button {
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

  get pointCenter() {
    const point = {
      x: (this.startPoint.x + this.point4.x) / 2,
      y: (this.startPoint.y + this.point2.y) / 2,
    };

    return point;
  }

  press() {
    mouse.click(this.pointCenter);
  }
}

export default Button;
