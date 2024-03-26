import robot from 'robotjs';
import clipboardy from 'clipboardy';

import mouse from '../input-devices/mouse.js';

import {
  sleepUntilPointColorMatchesList,
} from '../utils/sleep.js';

const contextMenuPoint = {
  copy: {
    lower: {
      x: robot.getMousePos().x + 10,
      y: robot.getMousePos().y + 20,
    },
    upper: {
      x: robot.getMousePos().x + 10,
      y: robot.getMousePos().y - 445,
    },
  },
  paste: {
    lower: {
      x: robot.getMousePos().x + 10,
      y: robot.getMousePos().y + 190,
    },
    upper: {
      x: robot.getMousePos().x + 10,
      y: robot.getMousePos().y - 300,
    },
  },
};

const contextMenuColor = {
  highlighted: 'd3dfe9',
};

class ContextMenu {
  constructor(startPoint) {
    this.startPoint = startPoint;
  }

  copy(style = 'lower') {
    switch (style) {
      case 'lower':
        mouse.click(this.startPoint, 'right');

        mouse.move(contextMenuPoint.copy.lower);
        sleepUntilPointColorMatchesList(contextMenuPoint.copy.lower, contextMenuColor.highlighted);

        mouse.click(contextMenuPoint.copy.lower);
        break;
      case 'upper':
        mouse.click(this.startPoint, 'right');

        mouse.move(contextMenuPoint.copy.upper);
        sleepUntilPointColorMatchesList(contextMenuPoint.copy.upper, contextMenuColor.highlighted);

        mouse.click(contextMenuPoint.copy.upper);
        break;
      default:
        break;
    }

    return clipboardy.readSync();
  }

  paste(text, style = 'lower') {
    switch (style) {
      case 'lower':
        clipboardy.writeSync(text);

        mouse.click(this.startPoint, 'right');

        mouse.move(contextMenuPoint.paste.lower);
        sleepUntilPointColorMatchesList(contextMenuPoint.paste.lower, contextMenuColor.highlighted);

        mouse.click(contextMenuPoint.paste.lower);
        break;
      case 'upper':
        clipboardy.writeSync(text);

        mouse.click(this.startPoint, 'right');

        mouse.move(contextMenuPoint.paste.upper);
        sleepUntilPointColorMatchesList(contextMenuPoint.paste.upper, contextMenuColor.highlighted);

        mouse.click(contextMenuPoint.paste.upper);
        break;
      default:
        break;
    }
  }
}

export default ContextMenu;
