import Button from './button.js';

import ClassicPopup from './classic-popup.js';

const pixelsForPointConfirmButton = {
  x: 297,
  y: 212,
};

class ModernPopup extends ClassicPopup {
  get pointConfirmButton() {
    const width = 109;
    const height = 26;

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
}

export default ModernPopup;
