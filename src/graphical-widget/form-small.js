import ComplexForm from './form-complex.js';

const offsetForFirstOptionPoint = {
  x: 3,
  y: 35,
};

class SmallComplexForm extends ComplexForm {
  get firstOptionPoint() {
    const point = {
      x: this.startPoint.x + offsetForFirstOptionPoint.x,
      y: this.startPoint.y + offsetForFirstOptionPoint.y,
    };

    return point;
  }
}

export default SmallComplexForm;
