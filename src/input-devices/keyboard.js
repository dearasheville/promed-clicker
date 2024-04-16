import robot from 'robotjs';
import clipboardy from 'clipboardy';

const keyboardStandartDelay = 10;

const keyboard = {
  tap: (key = '', modifier = [], count = 1, delay = keyboardStandartDelay) => {
    robot.setKeyboardDelay(delay);

    const normalizedKey = String(key);

    let acc = count;

    while (acc > 0) {
      robot.keyTap(normalizedKey, modifier);

      acc -= 1;
    }

    robot.setKeyboardDelay(keyboardStandartDelay);
  },
  type: (text = '', delay = keyboardStandartDelay) => {
    robot.setKeyboardDelay(delay);

    const normalizaedText = String(text);

    // normalizaedText.split('').forEach((letter) => robot.keyTap(letter));
    normalizaedText.split('').forEach((letter) => keyboard.paste(letter));

    robot.setKeyboardDelay(keyboardStandartDelay);
  },
  copy: () => {
    keyboard.tap('c', ['control']);

    const data = clipboardy.readSync();

    return data;
  },
  paste: (data = '') => {
    const normalizedData = String(data);

    clipboardy.writeSync(normalizedData);

    keyboard.tap('v', ['control']);
  },
  selectAll: () => {
    keyboard.tap('a', ['control']);
  },
  scroll: (key = 'top') => {
    switch (key) {
      case 'top':
        keyboard.tap('pageup', [], 5);
        break;
      case 'bottom':
        keyboard.tap('pagedown', [], 5);
        break;
      default:
        break;
    }
  },
};

export default keyboard;
