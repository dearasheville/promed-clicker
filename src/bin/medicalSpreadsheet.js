/* eslint-disable linebreak-style */
/* eslint-disable no-undef */

import xlsx from 'node-xlsx';
// import populate from 'xlsx-populate';

const spreadsheet = xlsx.parse('./spreadsheet.xlsx')[0];

/**
populate.fromFileAsync('./spreadsheet.xlsx').then((workbook) => {
  workbook.sheet('My Sheet').cell('A1').value();

  return workbook.toFileAsync('./spreadsheet.xlsx');
});
*/

export default spreadsheet.data.slice(1);
