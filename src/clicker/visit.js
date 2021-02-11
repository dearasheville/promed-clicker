/* eslint-disable linebreak-style */
/* eslint-disable no-undef */
/* eslint-disable max-len */

import robot, { getPixelColor } from 'robotjs';
import clipboardy from 'clipboardy';

import {
  sleepUntilGetCorrectPixel, toClick, toCopy, toPaste, multipleTap, changeNetworkSpeed,
} from '../utils';

const diagnosts = [
  [16009, 'Серов Оскар Валентинович'],

  [16069, 'Алтынова Алия Феликсовна'], [51254, 'Ибрагимов Булат Айдарович'], [50146, 'Рябова Вероника Юрьевна'],
  [40000, 'Денисова Радмила Андреевна'],

  [15023, 'Баязитова Лилия Ивановна'], [50405, 'Хушмурадова Дилара Дусмурадовна'],
  [20000, 'Сагитова Ирина Радиковна'], [30000, 'Бикметова Ильмира Ринатовна'], [10000, 'Мазитова Алина Фуатовна'],
  [50000, 'Новиков Денис Алексеевич'], [60000, 'Гареев Алик Маликович'],
  [70000, 'Халимуллина Светлана Ириковна'], [80000, 'Иванова Влада Владимировна'], [100000, 'Мударисова Диана Раилевна'],

  [15017, 'Яценко Татьяна Геннадьевна'], [15003, 'Фатхлисламова Гузэль Рифовна'], [15002, 'Хисамутдинова Гайша Масгутовна'],
  [51566, 'Дианова Альбина Фануровна'],
];

/**
const visitCodes = [
  [874730, 'КТ головы без контрастирования'],
  [874731, 'КТ грудного отдела без контрастирования'],
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
  [874752, 'КТ головы с контраст.и ангиогр.инжек.'],
  [874753, 'КТ конечностей с контраст.и ангиогр.инжек. '],
  [874754, 'КТ орг.брюш.и забр.прос.с контраст.и ангиогр.инж.'],
  [874755, 'КТ орг. груд. полости с контраст.и ангиогр.инжек'],
  [874756, 'КТ позвоночника с контраст.и ангиогр.инжек. '],
  [874757, 'КТ сосудов с контраст.и ангиогр.инжек.'],
  [874758, 'КТ шеи с контраст.и ангиогр.инжек.'],
];
*/

const hospital = () => {
  /**
  Должна быть проверка на цвет фона, чтобы определить какое окно выскачило: стационар или простая прогрузка.
  В противном случае, снижение длительности сна ведет к тому, что проверка в любом случае проходит (на медленном 3G).
  */

  // toSleep(5000);
  sleepUntilGetCorrectPixel(1308, 196, 'd0d1d4', '556677');

  const isHospital = robot.getPixelColor(1308, 196) === 'd0d1d4';

  // "Пересечение со случаем стационарного лечения", ситуационный попап
  if (isHospital) {
    toCopy.test();

    const isOncology = clipboardy.readSync().indexOf('ГАУЗ РКОД МЗ РБ') !== -1;

    if (isOncology) {
      // "Пересечение со случаем стационарного лечения", кнопка "нет"
      toClick.normal(1040, 620);

      // "Посещение пациентом поликлиники: Добавление", белый фон
      sleepUntilGetCorrectPixel(1500, 500, 'ffffff');

      // "Посещение пациентом поликлиники: Добавление", кнопка "отмена"
      toClick.normal(1860, 1050);

      return false;
    }

    // "Пересечение со случаем стационарного лечения", кнопка "да"
    toClick.normal(940, 620);
  }

  return true;
};

const visit = (diseaseCode, visitCode, diagnost, date) => {
  sleepUntilGetCorrectPixel(800, 300, 'ccffcc');

  changeNetworkSpeed('toLow');

  // "Посещение пациентом поликлиники: Добавление", дата
  toClick.normal(380, 240);
  robot.typeString(date);

  multipleTap(robot.keyTap, 'tab', 4);

  // "Посещение пациентом поликлиники: Добавление", врач
  const diagnostCode = String(diagnosts.find(elem => elem[1].split(' ').join(' ') === diagnost)[0]);

  // toSleep(250); // Нестабильная форма ("врач" и "код посещения")!
  robot.typeString(diagnostCode);
  // toPasteByKeyboard(diagnostCode.slice(0, -1));
  // robot.typeString(diagnostCode.substr(-1));
  // toPasteByKeyboardJava(diagnostCode);

  sleepUntilGetCorrectPixel(1100, 360, 'fbf0d2');

  robot.keyTap('enter');

  /**
  // Необходимо скорректировать проверку на достоверность ввода, до проверки на желтый цвет ховера
  if (!testCorrectData(diagnostCode)) {
    toPasteByKeyboardJava(diagnostCode);

    sleepUntilGetCorrectPixel(1100, 330, 'fbf0d2');

    robot.keyTap('enter');
  }
  */

  // "Посещение пациентом поликлиники: Добавление", поле "вид обращения" доступно для заполнения
  sleepUntilGetCorrectPixel(321, 371, 'ccffcc'); // Установить проверки на доступность полей повсеместно?

  multipleTap(robot.keyTap, 'tab', 2);

  // "Посещение пациентом поликлиники: Добавление", вид обращения
  if (diseaseCode.slice(0, 1) === 'Z') {
    robot.keyTap(2);
  } else {
    robot.keyTap(1);
  }

  multipleTap(robot.keyTap, 'tab', 3);

  // "Посещение пациентом поликлиники: Добавление", цель посещения
  if (diseaseCode.slice(0, 1) === 'Z') {
    robot.keyTap(2);
  } else {
    robot.keyTap(1);
  }

  multipleTap(robot.keyTap, 'tab', 3);

  // "Посещение пациентом поликлиники: Добавление", код посещения
  // const visitName = String(visitCodes.find(elem => String(elem[0]) === visitCode)[1]); // Добавить для корректности проверки МРТ и РНД.

  sleepUntilGetCorrectPixel(663, 561, 'ccffcc');

  // toSleep(250); // Нестабильная форма ("врач" и "код посещения")!
  robot.typeString(visitCode);
  // toPasteByKeyboardJava(visitCode);
  // toPasteByKeyboard(visitCode.slice(0, -1));
  // robot.typeString(visitCode.substr(-1));

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

  // toPasteByKeyboard(diseaseCode.slice(0, -1));
  toPaste.upper(diseaseCode.slice(0, -1));
  robot.typeString(diseaseCode.substr(-1));

  switch (gender) {
    case 'Мужской':
      robot.moveMouse(1000, 925);
      sleepUntilGetCorrectPixel(295, 925, 'fbf0d2');
      break;
    case 'Женский':
      robot.moveMouse(1000, 955);
      sleepUntilGetCorrectPixel(295, 955, 'fbf0d2');
      break;
    default:
      break;
  }

  robot.keyTap('tab');

  // "Посещение пациентом поликлиники: Добавление", характер
  sleepUntilGetCorrectPixel(1500, 500, 'e4e5e8');
  sleepUntilGetCorrectPixel(1500, 500, 'ffffff');

  robot.keyTap(3);

  // "Посещение пациентом поликлиники: Добавление", кнопка "сохранить"
  toClick.normal(110, 1050);

  // "Подождите, идет сохранение посещения", фон статус-бара
  sleepUntilGetCorrectPixel(1500, 500, 'e4e5e8');

  return hospital();
};

export default visit;
