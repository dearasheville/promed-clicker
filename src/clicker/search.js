import {
  sleepUntilGetCorrectPixel,
} from '../utils/sleep.js';

import mouse from '../input-devices/mouse.js';
import keyboard from '../input-devices/keyboard.js';

const search = (patientData) => {
  const [patientBirth, patientSurname, patientName, patientPathronymic] = patientData;

  // "Человек: поиск", фамилия
  mouse.click(575, 385);
  mouse.paste(patientSurname);

  // "Человек: поиск", имя
  mouse.click(835, 385);
  mouse.paste(patientName);

  // "Человек: поиск", отчество
  mouse.click(1090, 385);
  mouse.paste(patientPathronymic);

  // "Человек: поиск", дата рождения
  mouse.click(575, 435);
  mouse.paste(patientBirth);

  // "Человек: поиск", подтверждение заполнения формы
  keyboard.tap('enter');

  sleepUntilGetCorrectPixel([555, 764], 'fbf0d2', 'ffcccc');

  keyboard.tap('enter');
};

// search('Каргина', 'Елена', 'Геннадьевна', '17.07.1973');

export default search;
