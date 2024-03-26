import robot from 'robotjs';

import search from './search.js';

import mouse from '../input-devices/mouse.js';
import keyboard from '../input-devices/keyboard.js';

import {
  toSleep, sleepUntilGetCorrectPixel,
} from '../utils/sleep.js';

import direction from './direction.js';
import service from './service.js';

robot.setMouseDelay(100); // 100\250
robot.setKeyboardDelay(100); // 100\250

const reuqest = (patientData, clinicianData, diagnostData) => {
  const [patientBirth, patientSurname, patientName, patientPathronymic] = patientData;

  // "АРМ Диагностики: Фильтр", синий фон блока
  sleepUntilGetCorrectPixel([1850, 250], 'dfe8f6');

  // "АРМ Диагностики: Список заявок", кнопка "Принять без записи"
  mouse.click(155, 375);

  // "АРМ Диагностики: Фильтр", затемененный синий фон блока
  sleepUntilGetCorrectPixel([1850, 250], 'c8ced6', 'c7cdd6', 'c9ced7', 'c8ced6', 'c7cdd6');

  search(patientData);
  const directionNumber = direction(clinicianData, diagnostData);

  toSleep(5000);

  if (directionNumber === false) {
    toSleep(5000);

    return false;
  }

  // "АРМ Диагностики: Фильтр", синий фон блока
  sleepUntilGetCorrectPixel([1850, 250], 'dfe8f6', 'c8ced6', 'c7cdd6');

  // "АРМ Диагностики: Данная услуга не связана с ресурсом", затемененный серый фон блока
  if (robot.getPixelColor(990, 578) === 'eceef0') {
    mouse.click(990, 605);
  }

  // "АРМ Диагностики: Список заявок", белый фон блока
  sleepUntilGetCorrectPixel([1800, 600], 'ffffff');

  // "АРМ Диагностики: Фильтр", дата рождения
  mouse.click(773, 215);
  robot.keyTap('tab', 'shift');
  keyboard.tap('tab');

  // "АРМ Диагностики: Фильтр", рамка активной формы номера направления
  toSleep(2500); // ??
  keyboard.tap('delete');

  mouse.move(773, 215);
  mouse.paste(patientBirth);

  // "АРМ Диагностики: Фильтр", номер направления
  mouse.click(773, 215);
  keyboard.tap('tab');

  // "АРМ Диагностики: Фильтр", рамка активной формы номера направления
  toSleep(2500); // ??
  keyboard.tap('delete');

  mouse.move(1028, 213);
  mouse.paste(directionNumber);
  keyboard.tap('enter');

  toSleep(2500);
  mouse.click(205, 445);

  // "АРМ Диагностики: Список заявок", желтый\красный фон выделенного клинического случая
  sleepUntilGetCorrectPixel([155, 450], 'fbf0d2', 'ffcccc');

  // "АРМ Диагностики: Список заявок", прием
  mouse.click(205, 395);

  toSleep(2500);

  // "АРМ Диагностики: Список заявок", список услуг
  mouse.click(1260, 450);

  service(diagnostData);

  // "АРМ Диагностики: Список заявок", фон загрузки
  // sleepUntilGetCorrectPixel([1800, 500], 'e3e5e7');
  sleepUntilGetCorrectPixel([1800, 600], 'ffffff');

  toSleep(2500); // ??

  console.log(patientData);

  return true;
};

export default reuqest;
