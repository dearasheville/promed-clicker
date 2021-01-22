/* eslint-disable linebreak-style */
/* eslint-disable no-undef */

import clicker from './bin/medicalClicker';
import spreadsheet from './bin/medicalSpreadsheet';
import { sleepUntilGetCorrectPixel, toSleep } from './utils';

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
    const ticketResultMessage = clicker(surname, name, pathronymic, birth, department, clinician, diseaseCode, visitCode, medicalService, diagnost, date);

    sleepUntilGetCorrectPixel(440, 820, 'fbf0d2', 'ffcccc');

    toSleep(2500);

    return ticketResultMessage ? true : isTheTicketFilledCorrect();
  };

  return isTheTicketFilledCorrect();
};

spreadsheet.map((spreadsheetRow) => {
  const res = spreadsheetRow.map((spreadsheetCell, index, initialRow) => {
    if (String(spreadsheetCell).slice(0, 2) === '87') {
      return spreadsheetCell[6] !== '/' ?
        getData(spreadsheetRow, spreadsheetCell, spreadsheetRow[initialRow.indexOf(spreadsheetCell) + 13]) :
        getData(spreadsheetRow, spreadsheetCell.slice(0, 6), spreadsheetRow[initialRow.indexOf(spreadsheetCell) + 13]);
    }
  });
});
