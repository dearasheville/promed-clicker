/* eslint-disable linebreak-style */
/* eslint-disable no-undef */
/* eslint-disable max-len */

import clicker from './bin/medicalClicker';
import { medicalTicketSpreadsheet } from './bin/medicalSpreadsheet';
import { sleepUntilGetCorrectPixel } from './utils';

const getData = (array, first, second) => {
  const line = array;

  const person = line[1].split(' ');

  const surname = person[0];
  const name = person[1];
  const pathronymic = person[2];

  const birth = String(line[16]);

  const diseaseCode = String(line[3]);

  const department = ''; // Временно скрыто.
  const clinician = ''; // Временно скрыто.

  const visitCode = String(first);
  const medicalService = String(`A${second.slice(1)}`);

  const diagnost = String(line[4].split(' ').join(' '));

  const date = String(line[17]);

  const isTheTicketFilledCorrect = () => {
    const ticketResult = clicker(surname, name, pathronymic, birth, department, clinician, diseaseCode, visitCode, medicalService, diagnost, date);

    // "Человек: поиск", фон
    sleepUntilGetCorrectPixel(1865, 195, 'd7d8db');

    // "Человек: поиск", выделенный желтым или красным результат поиска
    sleepUntilGetCorrectPixel(440, 820, 'fbf0d2', 'ffcccc');

    return ticketResult ? true : isTheTicketFilledCorrect();
  };

  return isTheTicketFilledCorrect();
};

medicalTicketSpreadsheet.map((spreadsheetRow) => {
  spreadsheetRow.map((spreadsheetCell, index, initialRow) => {
    if (String(spreadsheetCell).slice(0, 2) === '87') {
      return spreadsheetCell[6] !== '/'
        ? getData(spreadsheetRow, spreadsheetCell, spreadsheetRow[initialRow.indexOf(spreadsheetCell) + 13])
        : getData(spreadsheetRow, spreadsheetCell.slice(0, 6), spreadsheetRow[initialRow.indexOf(spreadsheetCell) + 13]);
    }
  });
});
