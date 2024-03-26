/* eslint-disable linebreak-style */

const { convertArrayToCSV } = require('convert-array-to-csv');
const { convertCSVToArray } = require('convert-csv-to-array');

const fs = require('fs');

const transformArrayToCsv = (array) => {
  const csv = convertArrayToCSV(array, {
    separator: ';',
  });

  return csv;
};

const transformCsvToArray = (csv) => {
  const array = convertCSVToArray(csv, {
    type: 'array',
    separator: ';',
  });

  return array;
};

const uniteCsv = (file = 'test.csv', ...parameters) => {
  const previousData = transformCsvToArray(fs.readFileSync(file, 'utf8'));
  const newData = [[...parameters]];

  fs.writeFileSync(file, transformArrayToCsv(previousData.concat(newData)));
};

export default uniteCsv;
