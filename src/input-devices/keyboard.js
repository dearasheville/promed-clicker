import robot from 'robotjs';
import clipboardy from 'clipboardy';

const keyboardStandartDelay = 10;

const keyboard = {
  tap: (key, modifier, count = 1) => {
    let acc = count;

    while (acc > 0) {
      robot.keyTap(key, modifier);

      acc -= 1;
    }
  },
  type: (text, delay = keyboardStandartDelay) => {
    robot.setKeyboardDelay(delay);

    text.split('').forEach((letter) => robot.keyTap(letter));

    robot.setKeyboardDelay(keyboardStandartDelay);
  },
  copy: () => {
    robot.keyTap('c', 'control');

    return clipboardy.readSync();
  },
  paste: (data = '') => {
    clipboardy.writeSync(data);

    robot.keyTap('v', 'control');
  },
  select: () => {
    robot.keyTap('a', 'control');
  },
};

export default keyboard;
