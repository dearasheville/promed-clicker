import spreadsheet from './parser/spreadsheet.js';

import getData from './utils/get-data.js';

const [rowColumnStart, rowColumnEnd] = [0, 16];
const [servicesColumnStart, servicesColumnEnd] = [8, 16];
const [serviceTypeStart, serviceTypeEnd] = [0, 3];

const servicesTypes = ['802', '874', '875', '876'];

const clickerEngine = (clicker) => {
  spreadsheet.forEach((row) => {
    const normalizedRow = row.slice(rowColumnStart, rowColumnEnd).map(String);

    const [number] = normalizedRow;

    if (!number) {
      return false;
    }

    const patient = getData(normalizedRow, 'patient');
    const clinician = getData(normalizedRow, 'clinician');
    const diagnost = getData(normalizedRow, 'diagnost');

    const isDataFull = !!(patient && clinician && diagnost);

    if (!isDataFull) {
      return false;
    }

    const services = normalizedRow
      .slice(servicesColumnStart, servicesColumnEnd)
      .filter((cell) => {
        const serviceType = cell.slice(serviceTypeStart, serviceTypeEnd);
        const isServiceCorrect = servicesTypes.includes(serviceType);

        return isServiceCorrect;
      })
      .map((cell) => getData(cell, 'service'));

    services.forEach((service) => {
      const didClickerDoJob = clicker(patient, clinician, diagnost, service, number);

      if (didClickerDoJob) {
        console.log(`Выполнил: ${number}, ${patient.surname} ${patient.name}, ${service.id}\n`);
      } else {
        console.log(`Не выполнил: ${number}, ${patient.surname} ${patient.name}, ${service.id}\n`);
      }
    });
  });
};

export default clickerEngine;
