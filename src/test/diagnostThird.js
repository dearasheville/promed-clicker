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

const diagnostThird = (diagnostData) => {
  const researchDate = diagnostData[0];
  const diagnostCode = diagnostData[1];
  const medicalVisitCode = diagnostData[2];
  const medicalDenominationCode = diagnostData[4];

  /**
  sleepUntilGetCorrectPixel([811, 342], 'ccffcc');

  mouse.click(885, 270);
  sleepUntilGetCorrectPixel([1745, 380], 'd7d8db');
  
  mouse.click(1400, 350);
  mouse.click(1400, 350);
  mouse.click(1400, 350);
  keyboard.tap('backspace');
  
  toSleep(500);
  mouse.paste(medicalServiceCode.slice(0, -1), 'lower');
  keyboard.type(medicalServiceCode.substr(-1));
  keyboard.tap('enter');
  // sleepUntilGetCorrectPixel([520, 425], 'e4e5e8');
  sleepUntilGetCorrectPixel([520, 425], 'fbf0d2');
  keyboard.tap('enter', 2);
  */
  // "Результат выполнения услуги: Основные данные", серый блок
  sleepUntilGetCorrectPixel([1500, 287], 'e4e5e8');
  console.log(5);
  sleepUntilGetCorrectPixel([1500, 287], 'ffffff');
  console.log(6);

  toSleep(5000);

  mouse.click(1775, 180);
  keyboard.tap('pageup');

  if (medicalDenominationCode !== '') {
    mouse.click(280, 260);
    keyboard.tap('delete');
    
    mouse.click(1000, 310); // test

    sleepUntilGetCorrectPixel([280, 260], 'ccffcc');
    toSleep(1000); // ??

    mouse.click(235, 260);
    keyboard.type(medicalDenominationCode);  
    mouse.move(235, 276);
    sleepUntilGetCorrectPixel([235, 276], 'fbf0d2');
    keyboard.tap('enter');
  }

  // "Результат выполнения услуги: Основные данные", "Код посещения"
  sleepUntilGetCorrectPixel([235, 318], 'ccffcc');
  
  // "Результат выполнения услуги: Основные данные", "Услуга: Поиск"
  mouse.click(722, 326);
  sleepUntilGetCorrectPixel([1745, 380], 'd7d8db');
  
  toSleep(1000); // ?

  keyboard.type(medicalVisitCode);
  keyboard.tap('enter');
  console.log(1);
  
  toSleep(2000); // ??
  // sleepUntilGetCorrectPixel([605, 450], 'fbf0d2');
  console.log(2);
  keyboard.tap('enter', 2);  

  // "Результат выполнения услуги: Основные данные", "Дата исследования"
  mouse.click(235, 352);
  keyboard.type(researchDate);

  // "Результат выполнения услуги: Основные данные", "Врач"
  mouse.click(235, 434);
  toSleep(1000); // ??
  keyboard.type(diagnostCode);
  mouse.move(240, 475);
  sleepUntilGetCorrectPixel([238, 475], 'fbf0d2');
  keyboard.tap('enter');

  /**
  // "Результат выполнения услуги: Основные данные", "Лучевая нагрузка"
  if (robot.getPixelColor(275, 575) === 'ccffcc') {
    mouse.click(275, 575);
    keyboard.type('3.6');

    keyboard.tap('tab');

    sleepUntilGetCorrectPixel([415, 575], 'ccffcc');
    mouse.click(415, 575);

    mouse.move(415, 620);
    sleepUntilGetCorrectPixel([415, 620], 'fbf0d2');

    keyboard.tap('tab');

    // "Результат выполнения услуги: Основные данные", "Результат"
    mouse.click(280, 655);
    keyboard.type('3');

    // "Результат выполнения услуги: Основные данные", "Причина направления"
    mouse.click(280, 720);
    keyboard.type('6');
  } else {
    // "Результат выполнения услуги: Основные данные", "Результат"
    mouse.click(280, 625);
    keyboard.type('3');

    // "Результат выполнения услуги: Основные данные", "Причина направления"
    mouse.click(280, 690);
    keyboard.type('6');
  }
  */

  // "Результат выполнения услуги: Основные данные", "Результат"
  mouse.click(235, 575);
  keyboard.type('3');

  // "Результат выполнения услуги: Основные данные", "Причина направления"
  mouse.click(235, 620);
  keyboard.type('6');

  // "Заявка на исследование: Назначенные услуги", кнопка "Сохранить"
  mouse.click(85, 1055);

  // "Заявка на исследование: Назначенные услуги", "Сохранение...": фон серого цвета 
  // sleepUntilGetCorrectPixel([1780, 285], 'e4e5e8', 'd7d8db', 'dfe8f6'); // test

  sleepUntilGetCorrectPixel([1780, 285], 'e4e5e8');
  sleepUntilGetCorrectPixel([1780, 285], 'd7d8db', 'dfe8f6');

  console.log(10);

  if (robot.getPixelColor(1780, 285) === 'd7d8db') {
    const test = mouse.copy('test');
    console.log(clipboardy.readSync());

    if (test.includes('АКиНЕО')) {
      mouse.click(950, 600);
    } else {
      mouse.click(992, 600);

      // "Результат выполнения услуги: Основные данные", "Врач"
      mouse.click(235, 434);
      toSleep(1000); // ??
      keyboard.type(diagnostCode);
      sleepUntilGetCorrectPixel([238, 453], 'fbf0d2');
      keyboard.tap('enter');
      
      mouse.click(85, 1055);
    }
  }
};

export default diagnostThird;
