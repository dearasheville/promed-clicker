/* eslint-disable linebreak-style */
/* eslint-disable no-undef */

const xlsx = require('node-xlsx');

// const workbook = xlsx.readFile('./spreadsheet.xlsx');
// const test = xlsx.utils.sheet_to_json(workbook, { header: 1 });

const workbook = xlsx.parse('./spreadsheet.xlsx')[0];

console.log(workbook.data[0]);

export default medicalSpreadsheet;
