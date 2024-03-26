/* eslint-disable linebreak-style */

import robot from 'robotjs';

import specific from './specific';

import mouse from '../input-devices/mouse';
import keyboard from '../input-devices/keyboard';

import {
  changeNetworkSpeed,
} from '../utils';

import {
  sleepUntilGetCorrectPixel, toSleep,
} from '../utils/sleep';

import errorPopupControl from '../utils/popup';

const visit = (diagnostData) => {
  const researchDate = diagnostData[0];
  const diagnostCode = diagnostData[1];

  const medicalVisitCode = diagnostData[2];
  const diseaseCode = diagnostData[4];

  sleepUntilGetCorrectPixel([1700, 200], 'dcdde0', 'dddee1', 'efefef', 'f0f0f0');
  sleepUntilGetCorrectPixel([1700, 200], 'efefef', 'f0f0f0');

  toSleep(2500); // ?

  sleepUntilGetCorrectPixel([800, 300], 'ccffcc');

  // "Посещение пациентом поликлиники: Добавление", дата
  mouse.click(380, 240);
  keyboard.type(researchDate);

  keyboard.tap('tab', 4);

  // "Посещение пациентом поликлиники: Добавление", врач
  keyboard.type(diagnostCode);
  sleepUntilGetCorrectPixel([1100, 360], 'fbf0d2');
  keyboard.tap('enter');

  // "Посещение пациентом поликлиники: Добавление", поле "вид обращения" доступно для заполнения
  sleepUntilGetCorrectPixel([321, 371], 'ccffcc');

  keyboard.tap('tab', 2);

  // "Посещение пациентом поликлиники: Добавление", вид обращения
  switch (diseaseCode.slice(0, 1).toLowerCase()) {
    case 'z':
      keyboard.tap(2);
      break;
    default:
      keyboard.tap(1);
      break;
  }

  keyboard.tap('tab', 3);

  // "Посещение пациентом поликлиники: Добавление", цель посещения
  switch (diseaseCode.slice(0, 1).toLowerCase()) {
    case 'z':
      keyboard.tap(2);
      break;
    default:
      keyboard.tap(1);
      break;
  }

  keyboard.tap('tab', 3);

  // "Посещение пациентом поликлиники: Добавление", код посещения
  sleepUntilGetCorrectPixel([663, 561], 'ccffcc');
  keyboard.type(medicalVisitCode);
  sleepUntilGetCorrectPixel([319, 611], 'fbf0d2');
  keyboard.tap('enter');

  mouse.click(900, 250);
  keyboard.tap('pagedown', 3);

  sleepUntilGetCorrectPixel([1800, 735], 'f0f0f0');

  // "Посещение пациентом поликлиники: Добавление", характер
  switch (true) {
    case robot.getPixelColor(300, 430) === 'ccffcc':
      mouse.click(300, 430);
      break;
    case robot.getPixelColor(300, 490) === 'ccffcc':
      mouse.click(300, 490);
      break;
    default:
      break;
  }

  keyboard.tap(3);

  // "Посещение пациентом поликлиники: Добавление", сторона поражения
  const mustTestBeFilled = robot.getPixelColor(300, 395) === 'ccffcc' || robot.getPixelColor(300, 455) === 'ccffcc';

  if (mustTestBeFilled) {
    switch (true) {
      case robot.getPixelColor(295, 395) === 'ccffcc':
        mouse.click(300, 395);

        keyboard.tap(4);

        sleepUntilGetCorrectPixel([295, 410], 'fbf0d2');

        mouse.click(295, 410);
        break;
      default:
        break;
    }

    // "Специфика", загрузка формы ожидания
    sleepUntilGetCorrectPixel([1700, 200], 'dcdde0', 'dddee1');
  }

  const mustSpecificsBeFilled = diseaseCode.slice(0, 1) === 'C' || diseaseCode.slice(0, 2) === 'D0';

  if (mustSpecificsBeFilled) {
    mouse.move(100, 765);
    sleepUntilGetCorrectPixel([75, 765], 'eeeeee');

    // "Специфика: специфика (онкология)"
    mouse.click(125, 765);

    // "Специфика", загрузка формы ожидания
    sleepUntilGetCorrectPixel([1700, 200], 'dcdde0', 'dddee1');
    sleepUntilGetCorrectPixel([1700, 200], 'd0d1d4', 'e3e3e3', '556677'); // Попап в посещении, фон в специфике или фон талона

    const testResult = errorPopupControl('medicalVisitAndMedicalSpecific', [1308, 196], 'd0d1d4');

    const testResultBoolean = testResult[0];

    if (!testResultBoolean) {
      return testResult;
    }

    specific();

    sleepUntilGetCorrectPixel([1700, 200], 'dcdde0', 'dddee1', 'efefef', 'f0f0f0');
    sleepUntilGetCorrectPixel([1700, 200], 'efefef', 'f0f0f0');
  }

  changeNetworkSpeed('toMedium');

  // "Посещение пациентом поликлиники: Добавление", кнопка "сохранить"
  mouse.click(110, 1050);

  sleepUntilGetCorrectPixel([1700, 195], 'd0d1d4', 'e3e3e3', '556677'); // Попап в посещении, фон в специфике или фон талона

  return errorPopupControl('medicalVisitAndMedicalSpecific', [1308, 196], 'd0d1d4');
};

export default visit;
