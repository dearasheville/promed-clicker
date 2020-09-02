/* eslint-disable linebreak-style */
/* eslint-disable no-undef */

import clicker from './bin/medicalClicker';
import spreadsheet from './bin/medicalSpreadsheet';

const getData = (array) => {
  const line = array;

  const person = line[0].split(' ');

  const surname = person[0];
  const name = person[1];
  const pathronymic = person[2];
  const birth = line[1];

  const department = line[2];
  const clinician = line[3];
  const diseaseCode = line[4];

  const visitCode = line[5];
  const medicalService = line[6];

  const diagnost = line[7];

  const date = line[8];

  return clicker(surname, name, pathronymic, birth, department, clinician, diseaseCode, visitCode, medicalService, diagnost, date);
};

spreadsheet.forEach(elem => getData(elem));
