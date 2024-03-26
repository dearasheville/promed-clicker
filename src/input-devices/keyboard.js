import robot from 'robotjs';
import clipboardy from 'clipboardy';

const keyboard = {
  tap: (key = 'tab', count = 1) => {
    let acc = count;

    while (acc > 0) {
      robot.keyTap(key);

      acc -= 1;
    }
  },
  type: (text, delay) => {
    if (delay !== undefined) {
      robot.setKeyboardDelay(delay);
    }

    robot.typeString(text);
  },
  copy: () => {
    robot.keyTap('f10', 'shift');

    robot.keyTap('enter');

    return clipboardy.readSync();
  },
  paste: (data) => {
    clipboardy.writeSync(data);

    robot.keyTap('f10', 'shift');

    robot.keyTap('down');
    robot.keyTap('down');

    robot.keyTap('enter');
  },
};

export default keyboard;
