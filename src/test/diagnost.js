/* eslint-disable no-trailing-spaces */
/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */

import robot from 'robotjs';
import clipboardy from 'clipboardy';
import key from 'node-key-sender';
import xlsx from 'node-xlsx';

import departments from '../data-lists/departments';
import diagnosts from '../data-lists/diagnosts';
import services from '../data-lists/services';

import diagnostFirst from './diagnostFirst';
import diagnostSecond from './diagnostSecond';
import diagnostThird from './diagnostThird';

import search from '../clicker/search';

import {
  medicalTicketSpreadsheet,
} from '../bin/medicalSpreadsheet';

import mouse from '../input-devices/mouse';
import keyboard from '../input-devices/keyboard';
import keyboardVirtual from '../input-devices/keyboard-virtual';

import {
  matchRequiredAndPointColors, changeNetworkSpeed, isRefillRequired,
} from '../utils';

import {
  toSleep, sleepUntilGetCorrectPixel,
} from '../utils/sleep';

import errorPopupControl from '../utils/popup';
import uniteCsv from '../utils/logging';

robot.setMouseDelay(100); // 100\250
robot.setKeyboardDelay(100); // 100\250

const diagnost = (patientData, clinicianData, diagnostData) => {
  console.log(patientData, clinicianData, diagnostData);

  // "АРМ Диагностики: Фильтр", синий фон блока
  sleepUntilGetCorrectPixel([1850, 250], 'dfe8f6');

  // "АРМ Диагностики: Список заявок", кнопка "Принять без записи"
  mouse.click(155, 375);

  // "АРМ Диагностики: Фильтр", затемененный синий фон блока (отличные цвета на W7)
  sleepUntilGetCorrectPixel([1850, 250], 'c8cdd7', 'c7cdd6', 'c9ced7');

  search(patientData);
  const directionNumber = diagnostFirst(clinicianData, diagnostData);
  
  // "АРМ Диагностики: Фильтр", синий фон блока
  sleepUntilGetCorrectPixel([1850, 250], 'dfe8f6', 'c8cdd7', 'c7cdd6');

  // "АРМ Диагностики: Данная услуга не связана с ресурсом", затемененный серый фон блока
  if (robot.getPixelColor(990, 578) === 'eceef0') {
    mouse.click(990, 605);
  }

  // "АРМ Диагностики: Список заявок", белый фон блока
  sleepUntilGetCorrectPixel([1700, 700], 'ffffff');

  // "АРМ Диагностики: Фильтр", номер направления
  mouse.click(773, 215);
  keyboard.tap('tab');

  // "АРМ Диагностики: Фильтр", рамка активной формы номера направления
  // sleepUntilGetCorrectPixel([1260, 235], '0000ff');
  toSleep(2500); // ??
  keyboard.tap('delete');
  
  mouse.move(1028, 213);
  mouse.paste(directionNumber);
  keyboard.tap('enter');

  // "АРМ Диагностики: Список заявок", желтый\красный фон выделенного клинического случая
  sleepUntilGetCorrectPixel([155, 450], 'fbf0d2', 'ffcccc');

  // "АРМ Диагностики: Список заявок", список услуг
  mouse.click(1260, 450);

  diagnostThird(diagnostData);

  // "АРМ Диагностики: Список заявок", фон загрузки
  sleepUntilGetCorrectPixel([1800, 500], 'e4e5e8');
  sleepUntilGetCorrectPixel([1800, 500], 'ffffff');

  toSleep(2500); // ??
};

export default diagnost;
