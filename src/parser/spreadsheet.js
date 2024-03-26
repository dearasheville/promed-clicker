import xlsx from 'node-xlsx';

const spreadsheet = xlsx.parse('./spreadsheets/spreadsheet.xlsx')[0].data.slice(1);

export default spreadsheet;
