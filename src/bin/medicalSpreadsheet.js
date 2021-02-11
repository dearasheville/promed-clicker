/* eslint-disable linebreak-style */
/* eslint-disable no-undef */
/* eslint-disable max-len */

import xlsx from 'node-xlsx';
// import populate from 'xlsx-populate';

const medicalTicketSpreadsheet = xlsx.parse('./spreadsheets/medicalTicketSpreadsheet.xlsx')[0].data.slice(1);
const medicalCareSpreadsheet = xlsx.parse('./spreadsheets/medicalCareSpreadsheet.xlsx')[0].data.slice(1);

/**
populate.fromFileAsync('./spreadsheet.xlsx').then((workbook) => {
  workbook.sheet('My Sheet').cell('A1').value();

  return workbook.toFileAsync('./spreadsheet.xlsx');
});
*/

export { medicalTicketSpreadsheet, medicalCareSpreadsheet };
