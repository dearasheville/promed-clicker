import xlsx from 'node-xlsx';

const sheetNumber = 0;
const sheetTitle = 1;

const data = xlsx.parse('./spreadsheets/spreadsheet.xlsx');
const spreadsheet = data[sheetNumber].data.slice(sheetTitle);

export default spreadsheet;
