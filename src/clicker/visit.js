/* eslint-disable linebreak-style */
/* eslint-disable no-undef */

import robot from 'robotjs';
import clipboardy from 'clipboardy';

import {
  toSleep, toClick, toPaste, sleepUntilGetCorrectPixel, toCopy,
} from '../utils';

robot.setMouseDelay(10); // 100
robot.setKeyboardDelay(10); // 100

const hospital = () => {
  toSleep(5000);
  
  if (robot.getPixelColor(1308, 196) === 'd0d1d4') {
    toCopy.test();

    const isOncology = clipboardy.readSync().indexOf('ГАУЗ РКОД МЗ РБ') !== -1;

    if (isOncology) {
      toClick.normal(1040, 620);
      toSleep(2500);
      toClick.normal(1860, 1050);
      toSleep(2500);
      toClick.normal(1860, 1050);

      return false;
    }

    toClick.normal(940, 620);
  }

  return true;
};


const visit = (diseaseCode, visitCode, diagnost, date) => {
  // "Посещение пациентом поликлиники: Добавление", дата
  sleepUntilGetCorrectPixel(788, 302, 'ccffcc');

  toClick.normal(377, 237);
  robot.typeString(date);

  // "Посещение пациентом поликлиники: Добавление", врач
  const diagnosts = [
    [16069, 'АЛТЫНОВА АЛИЯ ФЕЛИКСОВНА'], [15023, 'БАЯЗИТОВА ЛИЛИЯ ИВАНОВНА'],
    [16009, 'Серов Оскар Валентинович'], [50405, 'ХУШМУРАДОВА ДИЛАРА ДУСМУРАДОВНА'],
    [51254, 'Ибрагимов Булат Айдарович'], [50146, 'РЯБОВА ВЕРОНИКА ЮРЬЕВНА'],
    [20000, 'Сагитова Ирина Радиковна'], [30000, 'Бикметова Ильмира Ринатовна'],
    [40000, 'Денисова Радмила Андреевна'], [10000, 'Мазитова Алина Фуатовна'],
    [50000, 'Новиков Денис Алексеевич'], [60000, 'Гареев Алик Маликович'],
    [70000, 'Халимуллина Светлана Ириковна'],
  ];

  const diagnostCode = diagnosts.find(elem => (elem[1].split(' ').join(' ') === diagnost ? elem : false))[0];

  sleepUntilGetCorrectPixel(788, 302, 'ccffcc');


  toClick.normal(788, 302);

  toSleep(1000);

  robot.typeString(diagnostCode);

  sleepUntilGetCorrectPixel(307, 324, 'fbf0d2');

  robot.keyTap('enter');

  // "Посещение пациентом поликлиники: Добавление", вид обращения
  sleepUntilGetCorrectPixel(321, 371, 'ccffcc');

  toClick.normal(301, 368);
  if (diseaseCode.slice(0, 1) === 'Z') {
    robot.keyTap(2);
    robot.keyTap('tab');

    sleepUntilGetCorrectPixel(321, 466, 'ccffcc');

    toClick.normal(321, 466);
    robot.keyTap(2);
  } else {
    robot.keyTap(1);
  }

  // "Посещение пациентом поликлиники: Добавление", код посещения
  sleepUntilGetCorrectPixel(663, 561, 'ccffcc');

  toClick.normal(304, 564);

  toSleep(500);

  robot.typeString(visitCode);

  toSleep(750);

  // "Посещение пациентом поликлиники: Добавление", код посещения - выпадающее меню
  sleepUntilGetCorrectPixel(319, 611, 'fbf0d2');

  robot.keyTap('enter');

  // "Посещение пациентом поликлиники: Добавление", диагноз
  const gender = robot.getPixelColor(315, 925) === 'ccffcc' ? 'Мужской' : 'Женский';

  switch (gender) {
    case 'Мужской':
      toClick.normal(315, 925);
      break;
    case 'Женский':
      toClick.normal(315, 955);
      break;
    default:
      break;
  }

  toPaste.upper(diseaseCode.slice(0, 1));
  robot.typeString(diseaseCode);

  toSleep(1000);

  robot.keyTap('tab');

  toSleep(1000);

  // toClick.normal(900, 955);


  // "Посещение пациентом поликлиники: Добавление", характер
  if (diseaseCode.slice(0, 1) === 'Z') {
    toClick.normal(110, 1050);

    toSleep(1000);

    return hospital() === true;
  }

  switch (gender) {
    case 'Мужской':
      sleepUntilGetCorrectPixel(330, 960, 'ccffcc');

      toClick.normal(330, 960);
      break;
    case 'Женский':
      sleepUntilGetCorrectPixel(330, 995, 'ccffcc');

      toClick.normal(330, 995);
      break;
    default:
      break;
  }

  robot.keyTap(3);

  toSleep(1000);

  toClick.normal(110, 1050);

  toSleep(1000);

  return hospital() === true;
};


// visit('C44.3', 874737, 'Ибрагимов Булат Айдарович', '31.08.2020');

export default visit;
