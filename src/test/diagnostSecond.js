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

const diagnostSecond = (clinicianData) => {
  const clinicianDepartment = clinicianData[2];
  const clinicianName = clinicianData[3];
  
  toSleep(1000); // ??

  // "АРМ Диагностики: Фильтр", затемененный синий фон блока
  sleepUntilGetCorrectPixel([1850, 325], 'c8cdd7', 'c3c7ce', 'c9ced7');

  // "АРМ Диагностики: Данная услуга не связана с ресурсом", затемененный серый фон блока (отличные цвета на W7)
  if (robot.getPixelColor(1100, 550) === 'eceef0') {
    mouse.click(990, 610);
  }

  // "Заявка на исследование: Направление", синий фон блока
  sleepUntilGetCorrectPixel([1850, 325], 'dfe8f6');
  console.log('ok');

  // "Заявка на исследование: Направление", "Отделение: зеленое поле ввода"
  sleepUntilGetCorrectPixel([285, 415], 'ccffcc');
  mouse.click(285, 415);

  toSleep(1000); // ??

  keyboardVirtual.type(clinicianDepartment.slice(0, clinicianDepartment.length - 1));
  mouse.move(285, 430);
  sleepUntilGetCorrectPixel([285, 430], 'fbf0d2');
  keyboard.tap('enter');
  
  // "Заявка на исследование: Направление", Врач: зеленое поле ввода"
  mouse.click(285, 480);

  toSleep(1000); // ??

  keyboardVirtual.type(clinicianName);
  mouse.move(285, 530);
  sleepUntilGetCorrectPixel([285, 530], 'fbf0d2');
  keyboard.tap('enter');

  // "Заявка на исследование: Назначенные услуги", кнопка "Сохранить"
  mouse.click(85, 1055);
  console.log('ok');

  // "Заявка на исследование: Направление", "Подождите, идет сохранение": затемненный синий фон блока (отличные цвета на W7)
  sleepUntilGetCorrectPixel([1850, 325], 'd4d9e3', 'c3c7ce', 'd4dae4', 'c9ced7');
  console.log('ok2');
};

export default diagnostSecond;
