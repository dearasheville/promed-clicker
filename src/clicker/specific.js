/* eslint-disable linebreak-style */

import {
  sleepUntilGetCorrectPixel,
} from '../utils/sleep';

import mouse from '../input-devices/mouse';

const specific = () => {
  // "Специфика", белый фон карточки пациента
  sleepUntilGetCorrectPixel([872, 247], 'ffffff');

  // "Специфика", кнопка "закрыть"
  mouse.click(1865, 1050);
};

export default specific;
