/* eslint-disable linebreak-style */

import mouse from '../input-devices/mouse';

import {
  sleepUntilGetCorrectPixel,
} from './sleep';

import {
  matchRequiredAndPointColors,
} from '../utils';

const errorPopupReaction = () => {
  const errorMessage = mouse.copy('test');

  const errorMessages = [
    'В случае лечения установлен диагноз из диапазона',
    'Данное посещение имеет пересечение со случаем стационарного лечения',
    'Локализация отдаленных метастазов',
    'Создать карту диспансерного наблюдения',
    'Заключительный диагноз не совпадает ни с одним из диагнозов',
    'Дата начала услуги',
    'Период выполнения услуги',
    'Поле Врач обязательно',
    'Неверно сформированный ответ сервера',
  ].filter(error => errorMessage.includes(error))[0];

  switch (errorMessages) {
    case 'В случае лечения установлен диагноз из диапазона':
      mouse.click(990, 640);

      return [false, 'незаполненная специфика'];
    case 'Данное посещение имеет пересечение со случаем стационарного лечения':
      // "Пересечение со случаем стационарного лечения", кнопка "нет"
      mouse.click(1040, 620);

      return [false, 'стационарный случай'];
    case 'Локализация отдаленных метастазов':
      // "Ошибка", кнопка "ОК"
      // mouse.click(1334, 514); ??
      mouse.click(990, 620);

      return [false, 'незаполненная локализация отдаленных метастазов'];
    case 'Создать карту диспансерного наблюдения':
      // "Создать карту диспансерного наблюдения", кнопка "нет"
      mouse.click(1040, 620);

      return [true, null];
    case 'Заключительный диагноз не совпадает ни с одним из диагнозов':
      // "Заключительный диагноз не совпадает ни с одним из диагнозов", кнопка "да"
      mouse.click(940, 615);

      return [true, null];
    case 'Дата начала услуги':
      // Дата начала услуги раньше даты начала случая лечения, кнопка "да"
      mouse.click(940, 615);

      return [true, null];
    case 'Период выполнения услуги':
      // Период выполнения услуги превышает период случая лечения, кнопа "да"
      mouse.click(940, 615);

      return [true, null];
    default:
      // "Ошибка", кнопка "ОК"
      mouse.click(990, 610);

      // "Посещение пациентом поликлиники: Добавление", белый фон
      sleepUntilGetCorrectPixel([1500, 500], 'ffffff');

      // "Посещение пациентом поликлиники: Добавление", кнопка "отмена"
      mouse.click(1860, 1050);

      return [false, null];
  }
};

const errorPopupDetection = (point, ...colors) => {
  const isIncorrect = matchRequiredAndPointColors(point, ...colors);

  return isIncorrect ? errorPopupReaction() : [true, null];
};

const errorPopupControl = (stage, point, ...colors) => {
  const isError = errorPopupDetection(point, ...colors);

  const resultBoolean = isError[0];
  const resultMessage = isError[1];

  const medicalVisitAndMedicalSpecificPopup = () => {
    switch (resultBoolean) {
      case false:
        // "Посещение пациентом поликлиники: Добавление", белый фон
        sleepUntilGetCorrectPixel([1700, 200], 'efefef', 'f0f0f0');

        // "Посещение пациентом поликлиники: Добавление", кнопка "отмена"
        mouse.click(1860, 1050);

        // "Талон амбулаторного пациента: Добавление", кнопка "отмена"
        mouse.click(1860, 1050);

        // "Человек: поиск", фон
        sleepUntilGetCorrectPixel([1865, 195], 'd7d8db');

        // "Человек: поиск", выделенный желтым или красным результат поиска
        sleepUntilGetCorrectPixel([440, 820], 'fbf0d2', 'ffcccc');

        // "Талон амбулаторного пациента: Добавление", талон заполнен корректно
        return [resultBoolean, resultMessage];
      default:
        return [true, resultMessage];
    }
  };

  const medicalServicePopup = () => {
    switch (resultBoolean) {
      case false:
        // "Выполнение общей услуги: Добавление", кнопка "отмена"
        mouse.click(1411, 283);

        sleepUntilGetCorrectPixel([315, 337], 'ccffcc');

        mouse.click(1860, 1050);

        // "Талон амбулаторного пациента: Добавление", выделенное желтым посещение
        sleepUntilGetCorrectPixel([75, 660], 'fbf0d2');

        // "Талон амбулаторного пациента: Добавление", кнопка "отмена"
        mouse.click(1862, 1050);

        // "Человек: поиск", фон
        sleepUntilGetCorrectPixel([1865, 195], 'd7d8db');

        // "Человек: поиск", выделенный желтым или красным результат поиска
        sleepUntilGetCorrectPixel([440, 820], 'fbf0d2', 'ffcccc');

        // "Талон амбулаторного пациента: Добавление", талон требует повторного заполнения
        return [resultBoolean, resultMessage];
      default:
        return [true, resultMessage];
    }
  };

  const medicalTicket = () => {
    switch (resultBoolean) {
      case false:
        sleepUntilGetCorrectPixel([1805, 192], '556677');

        // "Талон амбулаторного пациента: Добавление", кнопка "отмена"
        mouse.click(1860, 1050);

        // "Человек: поиск", фон
        sleepUntilGetCorrectPixel([1865, 195], 'd7d8db');

        // "Человек: поиск", выделенный желтым или красным результат поиска
        sleepUntilGetCorrectPixel([440, 820], 'fbf0d2', 'ffcccc');

        // "Талон амбулаторного пациента: Добавление", талон заполнен корректно
        return [true, resultMessage];
      default:
        return [true, resultMessage];
    }
  };

  switch (stage) {
    case 'medicalVisitAndMedicalSpecific':
      return medicalVisitAndMedicalSpecificPopup();
    case 'medicalService':
      return medicalServicePopup();
    case 'medicalTicket':
      return medicalTicket();
    default:
      return undefined;
  }
};

export default errorPopupControl;
