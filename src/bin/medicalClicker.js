/* eslint-disable linebreak-style */

import robot from 'robotjs';

import search from '../clicker/search';
import direction from '../clicker/direction';
import surveillance from '../clicker/surveillance';
import visit from '../clicker/visit';
import service from '../clicker/service';
import result from '../clicker/result';

import mouse from '../input-devices/mouse';

import {
  sleepUntilGetCorrectPixel,
} from '../utils/sleep';

import {
  changeNetworkSpeed,
} from '../utils';

import errorPopupControl from '../utils/popup';

robot.setMouseDelay(100); // 100\250
robot.setKeyboardDelay(100); // 100\250

const clicker = (patientData, clinicianData, diagnostData) => {
  // "Человек: поиск", фон
  sleepUntilGetCorrectPixel([1865, 195], 'd7d8db');

  search(patientData);

  sleepUntilGetCorrectPixel([80, 660], 'fbf0d2');

  const directionResult = direction(clinicianData);
  const directionResultBoolean = directionResult[0];

  if (!directionResultBoolean) {
    return directionResult;
  }

  // "Посещения: Добавить"
  mouse.click(117, 608);

  surveillance();

  // "Талон амбулаторного пациента: Добавление", белый фон
  sleepUntilGetCorrectPixel([225, 495], 'ffffff');

  // "Посещение пациентом поликлиники: Добавление"
  const medicalVisitResult = visit(diagnostData);
  const medicalVisitResultBoolean = medicalVisitResult[0];

  if (!medicalVisitResultBoolean) {
    changeNetworkSpeed('toHigh');

    return medicalVisitResult;
  }

  // "Талон амбулаторного пациента: Добавление", выделенное желтым посещение
  sleepUntilGetCorrectPixel([75, 660], 'fbf0d2');

  changeNetworkSpeed('toHigh');

  // "Талон амбулаторного пациента: Добавление", выделенная белым услуга
  sleepUntilGetCorrectPixel([75, 825], 'ffffff');

  // "Талон амбулаторного пациента: Добавление", "Услуги: добавить"
  mouse.click(110, 755);

  // "Талон амбулаторного пациента: Добавление", "Добавить общую услугу"
  mouse.click(148, 785);

  // "Выполнение общей услуги: Добавление", незаполненное посещение
  const medicalServiceResult = service(diagnostData);
  const medicalServiceResultBoolean = medicalServiceResult[0];

  if (!medicalServiceResultBoolean) {
    return medicalServiceResult;
  }

  // "Талон амбулаторного пациента: Добавление", выделенный белым результат
  sleepUntilGetCorrectPixel([93, 974], 'ffffff');

  result();

  // "Талон амбулаторного пациента: Добавление", кнопка "сохранить"
  mouse.click(130, 1050);

  // "Талон амбулаторного пациента: Добавление", талон заполнен корректно
  sleepUntilGetCorrectPixel([1300, 200], '8a939e', '8a939d', 'd7d8db');

  return errorPopupControl('medicalTicket', [1300, 200], '8a939e', '8a939d');
};

export default clicker;
