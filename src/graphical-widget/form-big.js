import ComplexForm from './form-complex.js';

const offsetForFirstOptionPoint = {
  x: 5,
  y: 50,
};

class BigComplexForm extends ComplexForm {
  get firstOptionPoint() {
    const point = {
      x: this.startPoint.x + offsetForFirstOptionPoint.x,
      y: this.startPoint.y + offsetForFirstOptionPoint.y,
    };

    return point;
  }
}

export default BigComplexForm;
