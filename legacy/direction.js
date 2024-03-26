import robot from 'robotjs';
import clipboard from 'clipboardy';

import departments from '../data-lists/departments.js';

import mouse from '../input-devices/mouse.js';
import keyboard from '../input-devices/keyboard.js';
import keyboardVirtual from '../input-devices/keyboard-virtual.js';

import changeNetworkSpeed from '../utils/network.js';

import {
  toSleep, sleepUntilGetCorrectPixel,
} from '../utils/sleep.js';

const diagnostFirst = (clinicianData, diagnostData) => {
  const directionDate = clinicianData[1];
  const diseaseCode = clinicianData[4];
  const clinicianDepartment = clinicianData[2];
  const clinicianName = clinicianData[3];

  const medicalVisitCode = diagnostData[2];
  const medicalServiceCode = diagnostData[3];
  const medicalDenominationCode = diagnostData[4];

  // "Заявка на исследование: Направление. Получение номера талона", затемненный синий фон блока
  // sleepUntilGetCorrectPixel([1850, 325], 'd4d9e3');

  // "Заявка на исследование: Направление", синий фон блока
  sleepUntilGetCorrectPixel([1850, 325], 'dfe8f6');

  // "Заявка на исследование: Направление", номер направления
  mouse.click(240, 235);
  keyboard.tap('tab');
  toSleep(2500); // Функциональность интерфейса РМИАС не загружается своевременно

  mouse.click(240, 235);
  const directionNumber = mouse.copy('diagnost');

  // "Заявка на исследование: Направление", дата направления
  keyboard.tap('tab');
  keyboard.type(directionDate);

  // "Заявка на исследование: Направление", кем направлен
  // sleepUntilGetCorrectPixel([285, 345], 'ccffcc');

  mouse.click(240, 290);
  sleepUntilGetCorrectPixel([240, 310], 'fbf0d2');

  // mouse.move(500, 390);
  // sleepUntilGetCorrectPixel([500, 390], 'fbf0d2');
  keyboard.tap('1');
  keyboard.tap('enter');

  keyboard.tap('tab');

  toSleep(5000);

  // "Заявка на исследование: Направление", "Отделение: зеленое поле ввода"
  sleepUntilGetCorrectPixel([240, 345], 'ccffcc');

  mouse.click(425, 275);

  mouse.click(720, 345);

  // toSleep(2500); // ??
  keyboard.type(12121);
  keyboard.tap('backspace', 5);
  mouse.click(720, 345);

  // mouse.click(883, 415, 'smooth');

  console.log(1);

  sleepUntilGetCorrectPixel([235, 360], 'fbf0d2');

  console.log(2);

  mouse.click(240, 345);

  const test1 = clinicianDepartment.split(' (')[0];
  const test2 = departments.filter((elem) => elem[1] === clinicianDepartment);

  if (test2[0] !== undefined) {
    keyboard.type(test2[0][0]);
    toSleep(500);
  } else {
    mouse.paste(test1.slice(0, -1));
    toSleep(500);
    keyboardVirtual.type(test1.substr(-1));
  }

  // keyboardVirtual.type(clinicianDepartment.slice(0, clinicianDepartment.length - 1));
  toSleep(2500); // ??
  mouse.move(235, 360);
  sleepUntilGetCorrectPixel([235, 360], 'fbf0d2');
  sleepUntilGetCorrectPixel([235, 337], 'eeeeee');
  keyboard.tap('enter');

  // "Заявка на исследование: Направление", Врач: зеленое поле ввода"
  // sleepUntilGetCorrectPixel([285, 480], 'ccffcc');

  mouse.click(235, 390);
  keyboard.type(1);
  keyboard.tap('backspace');

  mouse.paste(clinicianName.slice(0, -1));
  toSleep(500);
  keyboardVirtual.type(clinicianName.substr(-1));
  // keyboardVirtual.type(clinicianName);
  toSleep(2500); // ??
  mouse.move(235, 440);
  sleepUntilGetCorrectPixel([235, 440], 'fbf0d2');
  sleepUntilGetCorrectPixel([235, 388], 'eeeeee');
  keyboard.tap('enter');

  // "Заявка на исследование: Направление", диагноз
  // sleepUntilGetCorrectPixel([300, 670], 'ccffcc');

  mouse.click(235, 540);
  toSleep(2500); // Функциональность интерфейса РМИАС не загружается своевременно

  mouse.paste(diseaseCode.slice(0, -1), 'lower');
  keyboard.type(diseaseCode.substr(-1));
  toSleep(2500); // ??
  mouse.move(235, 575);
  sleepUntilGetCorrectPixel([235, 575], 'fbf0d2');
  keyboard.tap('enter');

  keyboard.tap('tab');
  keyboard.tap(3);
  keyboard.tap('tab');

  // "Заявка на исследование: Назначенные услуги", "Ресурс": зеленое поле
  sleepUntilGetCorrectPixel([235, 660], 'ccffcc');

  // "Заявка на исследование: Назначенные услуги", "Услуга": зеленое поле
  sleepUntilGetCorrectPixel([235, 685], 'ccffcc');
  mouse.click(235, 685);
  keyboard.tap('tab');

  const diagnosticType = medicalVisitCode.slice(0, 3);
  let pointY;

  switch (diagnosticType) {
    case '802':
      pointY = 938;
      break;
    case '874':
      pointY = 810;
      break;
    case '875':
      pointY = 778;
      break;
    case '876':
      pointY = 882; // 842
      break;
    default:
      break;
  }

  // "Заявка на исследование: Назначенные услуги", "Ресурс": пятый пункт списка
  mouse.click(410, 665);
  mouse.move(235, pointY);
  sleepUntilGetCorrectPixel([235, pointY], 'fbf0d2'); // мрт 778 кт 810 рнд 842

  keyboard.tap('tab');

  // "Заявка на исследование: Назначенные услуги", "Услуга": заполнение
  mouse.click(235, 690);
  mouse.paste(medicalServiceCode.slice(0, -1), 'lower');
  keyboard.type(medicalServiceCode.substr(-1));
  mouse.move(235, 710);
  sleepUntilGetCorrectPixel([235, 710], 'fbf0d2');

  toSleep(2000);

  keyboard.tap('enter');

  changeNetworkSpeed('toLow');

  keyboard.tap('tab', 2);
  keyboard.tap('enter');

  // "Заявка на исследование: Назначенные услуги", кнопка "Сохранить"
  mouse.click(100, 1065);

  changeNetworkSpeed('toHigh');

  // "АРМ Диагностики: Фильтр", затемененный синий фон блока
  sleepUntilGetCorrectPixel([1850, 250], 'c8ced6', 'c7cdd6', 'c3c7ce', 'c9ced7', 'bdc4cc');

  toSleep(1000); // ??

  if (robot.getPixelColor(1850, 250) === 'bdc4cc') {
    mouse.click(1218, 687);
    mouse.click(990, 605);
    mouse.click(1871, 1062);

    return false;
  }

  // "АРМ Диагностики: Данная услуга не связана с ресурсом", затемененный серый фон блока
  if (robot.getPixelColor(990, 578) === 'eceef0') {
    mouse.move(970, 557);

    mouse.copy('test');

    const message = clipboard.readSync().split(' ');

    mouse.click(990, 605);

    if (!(message.includes('ресурсом.'))) {
      toSleep(1000);

      // "Заявка на исследование: Назначенные услуги", "Инструментальная диагностика"
      mouse.click(235, 722);
      sleepUntilGetCorrectPixel([235, 722], 'ccffcc');

      keyboard.type(medicalDenominationCode);

      keyboard.tap('enter');

      changeNetworkSpeed('toLow');

      keyboard.tap('tab', 2);
      keyboard.tap('enter');

      // "Заявка на исследование: Назначенные услуги", кнопка "Сохранить"
      mouse.click(100, 1065);

      changeNetworkSpeed('toHigh');
    }
  }

  return directionNumber;
};

export default diagnostFirst;
