/* eslint-disable linebreak-style */

import {
  sleepUntilGetCorrectPixel,
} from '../utils/sleep';

import mouse from '../input-devices/mouse';
import keyboard from '../input-devices/keyboard';
import keyboardVirtual from '../input-devices/keyboard-virtual';

const direction = (clinicianData) => {
  const directionNumber = clinicianData[0];
  const directionDate = clinicianData[1];

  const clinicianDepartment = clinicianData[2];
  const clinicianName = clinicianData[3];

  const diseaseCode = clinicianData[4];

  if (clinicianDepartment === '' || clinicianName === '' || diseaseCode === '') {
    // "Талон амбулаторного пациента: Добавление", кнопка "отмена"
    mouse.click(1860, 1050);

    return [false, 'не заполнены данные отделения, врача-клинициста или диагноза;'];
  }

  // "Данные о направлении", кем направлен
  mouse.click(675, 335);
  keyboard.tap(1);

  mouse.click(1003, 337);
  sleepUntilGetCorrectPixel([914, 400], 'ccffcc');

  // "Данные о направлении", отделение
  mouse.click(935, 400);
  keyboardVirtual.type(clinicianDepartment.slice(0, clinicianDepartment.length - 1));
  mouse.move(357, 430);
  sleepUntilGetCorrectPixel([357, 430], 'fbf0d2');

  keyboard.tap('tab');

  // "Данные о направлении", врач
  mouse.click(935, 435);
  keyboardVirtual.type(clinicianName);
  mouse.move(357, 465);
  sleepUntilGetCorrectPixel([357, 465], 'fbf0d2');

  keyboard.tap('tab');

  // "Данные о направлении", номер направления
  keyboardVirtual.type(directionNumber);

  keyboard.tap('tab');

  // "Данные о направлении", дата направления
  keyboardVirtual.type(directionDate);

  keyboard.tap('tab');

  // "Данные о направлении", диагноз направляющего учреждения
  mouse.click(480, 500);
  mouse.paste(diseaseCode.slice(0, -1));
  keyboard.type(diseaseCode.substr(-1));
  mouse.move(356, 532);
  sleepUntilGetCorrectPixel([356, 532], 'fbf0d2');

  keyboard.tap('tab');

  return [true, null];
};

// direction('1543409', 'ОНКО-ПРОКТОЛОГ', 'Каланова АЛЛА ПАВЛОВНА', 'D12.2', '30.04.2021');

export default direction;
