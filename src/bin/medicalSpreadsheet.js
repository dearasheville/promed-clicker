/* eslint-disable linebreak-style */
/* eslint-disable no-undef */

import xlsx from 'node-xlsx';

const spreadsheet = xlsx.parse('./spreadsheet.xlsx')[0];

export default spreadsheet.data;
