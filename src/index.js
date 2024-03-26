/* eslint-disable linebreak-style */

import {
  medicalTicketSpreadsheet,
} from './bin/medicalSpreadsheet';

import clicker from './bin/medicalClicker';

import search from './utils/search';

import {
  isRefillRequired,
} from './utils';

import diagnost from './test/diagnost'; // test

const getDataAboutPatient = (line) => {
  const dataLine = line.map(String);

  const patientData = dataLine[1].split(' ');

  const patientBirth = dataLine[2];
  const patientSurname = patientData[0];
  const patientName = patientData[1];
  const patientPathronymic = patientData[2] || '';

  return [patientBirth, patientSurname, patientName, patientPathronymic];
};

const getDataAboutClinician = (line) => {
  const dataLine = line.map(String);

  const directionNumber = dataLine[0];
  const directionDate = dataLine[3];

  const clinicianData = dataLine[4].split(' / ');

  const clinicianDepartment = clinicianData[0];
  const clinicianDepartmentCode = clinicianDepartment;
  // const clinicianDepartmentCode = search(clinicianDepartment, 'departmentCode'); // ?
  const clinicianName = clinicianData[1];

  const diseaseCode = dataLine[5];

  if (clinicianDepartment === '' || clinicianName === '' || diseaseCode === '') {
    return false;
  }

  return [directionNumber, directionDate, clinicianDepartmentCode || clinicianDepartment, clinicianName, diseaseCode];
};

const getDataAboutDiagnost = (line, visitCell) => {
  const dataLine = line.map(String);

  const researchDate = dataLine[6];
  const diagnostName = dataLine[7].split(' ').join(' ');
  const diagnostCode = search(diagnostName, 'diagnostCode'); // ?

  const medicalVisitCode = String(visitCell).slice(0, 6);
  const medicalServiceCode = search(String(visitCell), 'serviceCode');
  const medicalDenominationCode = search(String(visitCell), 'denominationCode');

  const diseaseCode = dataLine[5];

  return [researchDate, diagnostCode || diagnostName, medicalVisitCode, medicalServiceCode, medicalDenominationCode, diseaseCode];
};

medicalTicketSpreadsheet.forEach((spreadsheetRow) => {
  const directionNumber = spreadsheetRow[0];

  if (directionNumber === undefined) {
    return false;
  }

  const patientData = getDataAboutPatient(spreadsheetRow);
  const clinicianData = getDataAboutClinician(spreadsheetRow);

  if (!clinicianData) {
    return false;
  }

  const medicalVisitCodesArray = spreadsheetRow.slice(8, 16).map(String);

  medicalVisitCodesArray.forEach((spreadsheetCell, index) => {
    const isMedicalVisitCode = spreadsheetCell.slice(0, 2);

    if (isMedicalVisitCode !== '87') {
      return false;
    }

    const diagnostData = getDataAboutDiagnost(spreadsheetRow, medicalVisitCodesArray[index]);

    const toFillTheTicket = () => {
      const ticketResult = diagnost(patientData, clinicianData, diagnostData);
      const ticketResultBoolean = true;

      /**
      const ticketResult = isRefillRequired(clicker(patientData, clinicianData, diagnostData));
      const ticketResultBoolean = ticketResult[0];
      const ticketResultMessage = ticketResult[1];

      if (ticketResultMessage !== null) {
        console.log(`${directionNumber}: ${ticketResultMessage}`); // Дополнить логирование через консоль записью строки в файл?
      }
      */

      return ticketResultBoolean ? true : toFillTheTicket();
    };

    return toFillTheTicket();
  });
});
