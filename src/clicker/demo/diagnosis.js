/* eslint-disable linebreak-style */
/* eslint-disable max-len */

import robot from 'robotjs';
import clipboardy from 'clipboardy';

import {
  medicalCareSpreadsheet,
} from '../../bin/medicalSpreadsheet';

import {
  toSleep, sleepUntilGetCorrectPixel,
} from '../../utils/sleep';

import {
  toClick, toCopy, toPaste,
} from '../../input-devices/mouse';

import {
  uniteCsv,
} from '../../utils/logging';

/**
const fs = require('fs');

const transformArrayToCsv = (array) => {
  const csv = convertArrayToCSV(array, {
    separator: ';',
  });

  return csv;
};

const transformCsvToArray = (csv) => {
  const array = convertCSVToArray(csv, {
    type: 'array',
    separator: ';',
  });

  return array;
};

const uniteCs1 = (file = 'diagnosis.csv', surname, name, pathronymic) => {
  const previousData = transformCsvToArray(fs.readFileSync(file, 'utf8')); // Проверка на наличие данных? Если данных нет, задать аналогичную структуру по умолчанию?

  const newData = [
    [surname, name, pathronymic],
  ];

  fs.writeFileSync(file, transformArrayToCsv(previousData.concat(newData)));
};
*/

robot.setMouseDelay(100); // 100\250
robot.setKeyboardDelay(100); // 100\250

const search = (surname, name, pathronymic, birth) => {
  // "Человек: поиск", фамилия
  toClick.normal(175, 245);
  toPaste.lower(surname);

  // "Человек: поиск", имя
  toClick.normal(526, 245);
  toPaste.lower(name);

  // "Человек: поиск", отчество
  toClick.normal(715, 245);
  toPaste.lower(pathronymic);

  // "Человек: поиск", дата рождения
  toClick.normal(1040, 245);
  toPaste.lower(birth);

  toClick.normal(1800, 245);
  toClick.normal(175, 245);

  // "Человек: поиск", подтверждение заполнения формы
  robot.keyTap('enter');

  sleepUntilGetCorrectPixel([510, 495], 'e4e5e8');

  toSleep(1000);

  toClick.normal(510, 495);
  sleepUntilGetCorrectPixel([510, 495], 'fbf0d2');

  toClick.normal(595, 495);

  sleepUntilGetCorrectPixel([1818, 271], 'dfe8f6');

  toSleep(1000);

  toClick.normal(282, 691);
  toCopy.upper();

  const code = clipboardy.readSync().split(' ')[0];

  // uniteCs1('diagnosis.csv', `${surname} ${name} ${pathronymic}`, birth, code);

  // выход
  toClick.normal(1840, 1053);
  // сброс
  toClick.normal(1047, 309);

  sleepUntilGetCorrectPixel([510, 495], 'e4e5e8');

  sleepUntilGetCorrectPixel([161, 456], 'ffffff');

  toClick.normal(510, 495);
  sleepUntilGetCorrectPixel([510, 495], 'fbf0d2');
};

const getData = (array) => {
  const line = array;

  const person = line[1].split(' ');

  const surname = person[0];
  const name = person[1];
  const pathronymic = person[2];

  const birth = String(line[16]);

  return search(surname, name, pathronymic, birth);
};

medicalCareSpreadsheet.forEach(elem => getData(elem));

// search('Каргина', 'Елена', 'Геннадьевна', '17.07.1973');
