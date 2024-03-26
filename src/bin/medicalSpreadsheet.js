/* eslint-disable linebreak-style */

import xlsx from 'node-xlsx';

const medicalTicketSpreadsheet = xlsx.parse('./spreadsheets/medicalTicketSpreadsheet.xlsx')[0].data.slice(1);
const medicalCareSpreadsheet = xlsx.parse('./spreadsheets/medicalCareSpreadsheet.xlsx')[0].data.slice(1);
const medicalDirectionSpreadsheet = xlsx.parse('./spreadsheets/medicalDirectionSpreadsheet.xlsx')[0].data.slice(1);

export {
  medicalTicketSpreadsheet, medicalCareSpreadsheet, medicalDirectionSpreadsheet,
};
