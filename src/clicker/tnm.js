/* eslint-disable linebreak-style */
/* eslint-disable no-undef */

import robot from 'robotjs';
import { toClick, sleepUntilGetCorrectPixel, toSleep } from '../utils';

const tnm = (surname, name, pathronymic) => {
  sleepUntilGetCorrectPixel(719, 507, '36383c'); // Градиент!

  toClick.smooth(990, 635);

  sleepUntilGetCorrectPixel(872, 247, 'ffffff');

  toClick.smooth(1865, 1050);

  sleepUntilGetCorrectPixel(878, 896, '4d5b6e');

  toClick.smooth(130, 1050);

  toSleep(5000); // Вынужденная мера для стабилизации на низких скоростях, иначе нижняя проверка не успевает сработать. 

  if (robot.getPixelColor(719, 507) === '36383c') {
    toClick.smooth(1350, 500);

    toSleep(2500);

    toClick.normal(1860, 1050);

    console.log(surname, name, pathronymic);
  }
};

// tnm();

export default tnm;
