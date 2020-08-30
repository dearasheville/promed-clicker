/* eslint-disable linebreak-style */
/* eslint-disable no-undef */

import clicker from './bin/medicalClicker';
import spreadsheet from './bin/medicalSpreadsheet';

const getData = (array) => {
  const line = spreadsheet[0];

  const person = array[0].split(' ');

  const surname = person[0];
  const name = person[1];
  const pathronymic = person[2];
  const birth = array[1];

  const department = array[2];
  const clinician = array[3];
  const diseaseCode = array[4];

  const visitCode = array[5];
  const medicalService = array[6];

  return clicker(surname, name, pathronymic, birth, department, clinician, diseaseCode, visitCode, medicalService);
};

spreadsheet.forEach(elem => getData(elem));
