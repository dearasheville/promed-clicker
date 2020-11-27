/* eslint-disable linebreak-style */
/* eslint-disable no-undef */

import clicker from './bin/medicalClicker';
import spreadsheet from './bin/medicalSpreadsheet';
import { sleepUntilGetCorrectPixel, toSleep } from './utils';

const getData = (array, first, second) => {
  const line = array;

  const person = line[0].split(' ');

  const surname = person[0];
  const name = person[1];
  const pathronymic = person[2];

  const birth = String(line[2]);

  const diseaseCode = String(line[3]);
  const department = line[4];
  const clinician = line[5];

  const visitCode = String(first);
  const medicalService = String(`A${second.slice(1)}`);

  const diagnost = String(line[8].split(' ').join(' '));

  const date = String(line[7]);

  const isTheTicketFilledCorrect = () => {
    const ticketResultMessage = clicker(surname, name, pathronymic, birth, department, clinician, diseaseCode, visitCode, medicalService, diagnost, date);

    sleepUntilGetCorrectPixel(440, 820, 'fbf0d2', 'ffcccc');

    toSleep(2500);

    return ticketResultMessage ? true : isTheTicketFilledCorrect();
  };

  return isTheTicketFilledCorrect();
};

spreadsheet.map((elem) => {
  const res = elem.map((el, index, array) => {
    if (String(el).slice(0, 2) === '87') {
      return getData(elem, el, elem[array.indexOf(el) + 1]);
    }
  });
});
