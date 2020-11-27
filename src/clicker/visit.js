/* eslint-disable linebreak-style */
/* eslint-disable no-undef */

import robot from 'robotjs';
import clipboardy from 'clipboardy';

import {
  toSleep, toClick, toPaste, sleepUntilGetCorrectPixel, toCopy, multipleTap, toPasteByKeyboard, toCopyByKeyboard, testCorrectData
} from '../utils';

const diagnosts = [
  [16069, 'АЛТЫНОВА АЛИЯ ФЕЛИКСОВНА'], [15023, 'БАЯЗИТОВА ЛИЛИЯ ИВАНОВНА'],
  [16009, 'Серов Оскар Валентинович'], [50405, 'ХУШМУРАДОВА ДИЛАРА ДУСМУРАДОВНА'],
  [51254, 'Ибрагимов Булат Айдарович'], [50146, 'РЯБОВА ВЕРОНИКА ЮРЬЕВНА'],
  [20000, 'Сагитова Ирина Радиковна'], [30000, 'Бикметова Ильмира Ринатовна'],
  [40000, 'Денисова Радмила Андреевна'], [10000, 'Мазитова Алина Фуатовна'],
  [50000, 'Новиков Денис Алексеевич'], [60000, 'Гареев Алик Маликович'],
  [70000, 'Халимуллина Светлана Ириковна'],
];

const visitCodes = [
  [874730, 'КТ головы без контрастирования'], [874731, 'КТ грудного отдела без контрастирования'],
  [874732, 'КТ конечностей без контрастирования'],
  [874733, 'КТ костей без контрастирования'],
  [874734, 'КТ молочной железы без контрастирования'],
  [874735, 'КТ мягких тканей без контрастирования'],
  [874736, 'КТ органов брюш.пол. и забрюш.прост. без контраст. '],
  [874737, 'КТ органов грудной клетки без контрастирования'],
  [874738, 'КТ органов малого таза без контрастирования'],
  [874739, 'КТ позвоночника без контрастирования'],
  [874740, 'КТ сосудов без контрастирования'],
  [874741, 'КТ сустава без контрастирования'],
  [874742, 'КТ шеи без контрастирования '],
  [874743, 'КТ сосудов с контрастированием'],
  [874744, 'КТ головы с контрастированием'],
  [874745, 'КТ конечностей с контрастированием ,'],
  [874746, 'КТ мягких тканей с контрастированием'],
  [874747, 'КТ органов брюш.пол. и забрюш.прост. с контраст'],
  [874748, 'КТ органов грудной полости с контрастирования '],
  [874749, 'КТ органов малого таза с контрастированием'],
  [874750, 'КТ позвоночника с контрастированием'],
  [874751, 'КТ шеи с контрастированием'],
  [874752, 'КТ головы с контраст.и ангиогр.инжек.'],
  [874753, 'КТ конечностей с контраст.и ангиогр.инжек. '],
  [874754, 'КТ орг.брюш.и забр.прос.с контраст.и ангиогр.инж.'],
  [874755, 'КТ орг. груд. полости с контраст.и ангиогр.инжек'],
  [874756, 'КТ позвоночника с контраст.и ангиогр.инжек. '],
  [874757, 'КТ сосудов с контраст.и ангиогр.инжек.'],
  [874758, 'КТ шеи с контраст.и ангиогр.инжек.'],
];

const hospital = () => {
  toSleep(5000); // Должна быть проверка на цвет фона, чтобы определить какое окно выскачило: стационар или простая прогрузка.
  // В противном случае снижение длительности сна ведет к тому, что проверка в любом случае проходит (на медленном 3G). 

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
  sleepUntilGetCorrectPixel(800, 300, 'ccffcc');

  // "Посещение пациентом поликлиники: Добавление", дата
  toClick.normal(380, 240);
  robot.typeString(date);

  multipleTap(robot.keyTap, 'tab', 4);

  // "Посещение пациентом поликлиники: Добавление", врач
  const diagnostCode = diagnosts.find(elem => elem[1].split(' ').join(' ') === diagnost)[0];

  toSleep(250); // Одна из двух нестабильных форм: врач и код посещения.
  robot.typeString(diagnostCode);

  sleepUntilGetCorrectPixel(1100, 330, 'fbf0d2');

  robot.keyTap('enter');

  /**
  if (!testCorrectData(diagnostCode)) { // Необходимо скорректировать проверку на достоверность ввода до проверки на желтизну.
    robot.typeString(diagnostCode);

    sleepUntilGetCorrectPixel(1100, 330, 'fbf0d2');

    robot.keyTap('enter');
  }
  */

  // "Посещение пациентом поликлиники: Добавление", вид обращения
  sleepUntilGetCorrectPixel(321, 371, 'ccffcc'); // Установить проверки на доступные поля повсеместно?

  multipleTap(robot.keyTap, 'tab', 2);

  if (diseaseCode.slice(0, 1) === 'Z') {
    robot.keyTap(2);

    // multipleTap(robot.keyTap, 'tab', 4); // ?
  } else {
    robot.keyTap(1);

    // multipleTap(robot.keyTap, 'tab', 3); // ?
  }

  multipleTap(robot.keyTap, 'tab', 3); // ?

  // "Посещение пациентом поликлиники: Добавление", цель посещения
  if (diseaseCode.slice(0, 1) === 'Z') {
    robot.keyTap(2);

    // multipleTap(robot.keyTap, 'tab', 2); // ?
  } else {
    robot.keyTap(1);

    // multipleTap(robot.keyTap, 'tab', 3); // ?
  }

  multipleTap(robot.keyTap, 'tab', 3);

  // "Посещение пациентом поликлиники: Добавление", код посещения
  const visitName = visitCodes.find(elem => String(elem[0]) === visitCode)[1];

  sleepUntilGetCorrectPixel(663, 561, 'ccffcc');

  toSleep(250); // Одна из двух нестабильных форм: врач и код посещения.
  robot.typeString(visitCode);

  sleepUntilGetCorrectPixel(319, 611, 'fbf0d2');

  robot.keyTap('enter');

  /**
  if (!testCorrectData(visitName)) { // Необходимо скорректировать проверку на достоверность ввода до проверки на желтизну.
    robot.typeString(visitCode);

    sleepUntilGetCorrectPixel(1100, 330, 'fbf0d2');

    robot.keyTap('enter');
  }
  */

  // "Посещение пациентом поликлиники: Добавление", диагноз
  const gender = robot.getPixelColor(805, 905) === 'ccffcc' ? 'Мужской' : 'Женский';

  switch (gender) {
    case 'Мужской':
      toClick.normal(805, 900);
      break;
    case 'Женский':
      toClick.normal(805, 935);
      break;
    default:
      break;
  }

  toPasteByKeyboard(diseaseCode.slice(0, 1));
  robot.typeString(diseaseCode);

  switch (gender) {
    case 'Мужской':
      robot.moveMouseSmooth(1000, 925);
      sleepUntilGetCorrectPixel(295, 925, 'fbf0d2');
      break;
    case 'Женский':
      robot.moveMouseSmooth(1000, 955);
      sleepUntilGetCorrectPixel(295, 955, 'fbf0d2');
      break;
    default:
      break;
  }

  robot.keyTap('tab');

  // "Посещение пациентом поликлиники: Добавление", характер
  // sleepUntilGetCorrectPixel(1500, 500, 'e3e5e7'); // Перепроверить корректность обеих проверок.
  sleepUntilGetCorrectPixel(1500, 500, 'ffffff');

  robot.keyTap(3);

  toClick.smooth(110, 1050); // Даже со smooth отрабатывает не всегда корректно.

  return hospital() === true;
};

// visit('D10.0', 874737, 'Ибрагимов Булат Айдарович', '31.08.2020');

export default visit;
