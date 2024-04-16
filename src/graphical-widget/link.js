import mouse from '../input-devices/mouse.js';

const pixelsForPointLeftCenter = {
  x: 5,
};

class Link {
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

  click() {
    mouse.click(this.pointLeftCenter);
  }
}

export default Link;
