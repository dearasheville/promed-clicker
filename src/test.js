/* eslint-disable no-unused-vars */

import robot from 'robotjs';
import clipboard from 'clipboardy';
import xlsx from 'node-xlsx';

import matchRequiredAndPointColors from './utils/colors.js';
import changeNetworkSpeed from './utils/network.js';

import mouse from './input-devices/mouse.js';
import keyboard from './input-devices/keyboard.js';
import keyboardVirtual from './input-devices/keyboard-virtual.js';

import departments from './data-lists/departments.js';
import diagnosts from './data-lists/diagnosts.js';
import services from './data-lists/services.js';

import search from './utils/search.js';

import {
  toSleep, sleepUntilGetCorrectPixel,
} from './utils/sleep.js';

robot.setMouseDelay(100); // 100\250
robot.setKeyboardDelay(100); // 100\250

if (robot.getPixelColor(990, 578) === 'eceef0') {
  mouse.move(970, 557);

  mouse.copy('test');

  const message = clipboard.readSync().split(' ');

  mouse.click(990, 605);

  if (!message.includes('ресурсом')) {
    toSleep(1000);

    // "Заявка на исследование: Назначенные услуги", "Инструментальная диагностика"
    mouse.click(235, 711);
    sleepUntilGetCorrectPixel([235, 711], 'ccffcc');

    keyboard.type(medicalDenominationCode);

    keyboard.tap('enter');

    changeNetworkSpeed('toLow');

    keyboard.tap('tab', 2);
    keyboard.tap('enter');

    // "Заявка на исследование: Назначенные услуги", кнопка "Сохранить"
    mouse.click(100, 1065);

    changeNetworkSpeed('toHigh');
  }
