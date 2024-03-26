/* eslint-disable linebreak-style */
/* eslint-disable max-len */

import robot from 'robotjs';
import clipboardy from 'clipboardy';

import {
  medicalDirectionSpreadsheet,
} from '../../bin/medicalSpreadsheet';

import {
  sleepUntilGetCorrectPixel,
} from '../../utils/sleep';

import {
  toClick, toCopy, toPaste, mouse,
} from '../../input-devices/mouse';

import {
  keyboardVirtual,
} from '../../input-devices/keyboard-virtual';

import {
  uniteCsv,
} from '../../utils/logging';

robot.setMouseDelay(100); // 100\250
robot.setKeyboardDelay(100); // 100\250

const search = (directionNumber) => {
  mouse.click(350, 295);
  robot.keyTap('delete', 'control');
  robot.typeString(directionNumber);

  robot.keyTap('enter');

  sleepUntilGetCorrectPixel([1868, 225], 'e4e5e8');
  sleepUntilGetCorrectPixel([1868, 225], 'ffffff');

  sleepUntilGetCorrectPixel([70, 735], 'fbf0d2');

  robot.keyTap('f4');

  return true;
};

const direction = (directionNumber, clinicianDepartment, clinicianName = '', diseaseCode, directionDate) => {
  /**
  if (directionNumber === '' || clinicianName === '') {
    return false;
  }
  */

  mouse.click(945, 495);
  mouse.click(945, 495);
  mouse.click(945, 495);
  mouse.click(945, 495);

  toCopy.test();

  const isFilled = clipboardy.readSync().indexOf('Введите код диагноза') !== -1;

  if (!isFilled) {
    mouse.click(1856, 1053);

    sleepUntilGetCorrectPixel([1864, 211], 'ffffff');

    return true;
  }

  mouse.click(675, 335);

  robot.keyTap(1);

  mouse.click(1003, 337);

  sleepUntilGetCorrectPixel([914, 400], 'ccffcc');

  mouse.click(935, 400);
  keyboardVirtual.type(clinicianDepartment.slice(0, clinicianDepartment.length - 1));
  robot.moveMouse(357, 430);
  sleepUntilGetCorrectPixel([357, 430], 'fbf0d2');

  robot.keyTap('tab');

  mouse.click(935, 435);
  keyboardVirtual.type(clinicianName);
  robot.moveMouse(357, 465);
  sleepUntilGetCorrectPixel([357, 465], 'fbf0d2');

  robot.keyTap('tab');

  robot.typeString(directionNumber);

  robot.keyTap('tab');

  robot.typeString(directionDate);

  robot.keyTap('tab');

  mouse.click(480, 500);
  toPaste.lower(diseaseCode.slice(0, -1));
  robot.typeString(diseaseCode.substr(-1));
  robot.moveMouse(356, 532);
  sleepUntilGetCorrectPixel([356, 532], 'fbf0d2');

  robot.keyTap('tab');

  mouse.click(118, 1052);

  sleepUntilGetCorrectPixel([1860, 225], 'e4e5e8');
  sleepUntilGetCorrectPixel([1860, 225], 'ffffff', 'd7d8db');

  if (robot.getPixelColor(1860, 225) === 'd7d8db') {
    toCopy.secondTest();

    const errorMessage = clipboardy.readSync();
    const isError = errorMessage.indexOf('Период выполнения услуги') !== -1;

    if (isError) {
      mouse.click(940, 618);

      sleepUntilGetCorrectPixel([1868, 225], 'ffffff');
    }
  }

  return true;
};

const getData = (line) => {
  const dataLine = line.map(String);

  const ticketDate = dataLine[0];
  const ticketNumber = dataLine[1];

  const patientData = dataLine[2];
  const patientBirth = dataLine[3];

  const clinicianData = dataLine[6];

  const directionNumber = dataLine[5];

  const directionDate = dataLine[4];
  const clinicianDepartment = String(clinicianData).split(' / ')[0];
  const clinicianName = String(clinicianData).split(' / ')[1];
  const diseaseCode = dataLine[8];

  if (directionNumber === '') {
    return false;
  }

  if (clinicianDepartment === '' || clinicianName === '') {
    // uniteCsv2('direction.csv', ticketDate, ticketNumber, patientData, patientBirth, directionDate, directionNumber, 'Отсутствует', diseaseCode);
    console.log(`${ticketNumber} не заполнены данные об отделении или врача-клинициста;`);

    // mouse.click(1856, 1053);

    // sleepUntilGetCorrectPixel([1864, 211], 'ffffff');

    return false;
  }

  search(ticketNumber);

  sleepUntilGetCorrectPixel([1860, 225], 'e4e5e8');
  sleepUntilGetCorrectPixel([1860, 225], 'ffffff', 'd7d8db');

  if (robot.getPixelColor(1860, 225) === 'd7d8db') {
    toCopy.secondTest();

    const errorMessage = clipboardy.readSync();
    const isError = errorMessage.indexOf('Запись используется в реестре') !== -1;
    const isPaid = errorMessage.indexOf('Запись оплачена в реестре') !== -1;

    if (isError || isPaid) {
      // uniteCsv2('direction.csv', ticketDate, ticketNumber, patientData, patientBirth, directionDate, directionNumber, clinicianData, diseaseCode);
      console.log(`${ticketNumber} используется в реестре;`);

      mouse.click(989, 608);

      sleepUntilGetCorrectPixel([1868, 225], 'ffffff');

      mouse.click(1856, 1053);

      sleepUntilGetCorrectPixel([1864, 211], 'ffffff');

      return false;
    }
  }

  direction(directionNumber, clinicianDepartment, clinicianName, diseaseCode, directionDate);

  sleepUntilGetCorrectPixel([1868, 225], 'ffffff');

  console.log(`${ticketNumber} успешно заполнен;`);
};

medicalDirectionSpreadsheet.forEach(elem => getData(elem));
