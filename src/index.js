import visitList from './bin/spreadsheet.js';

import search from './utils/search.js';

import request from './clicker/request.js';

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

  if (researchDate === '' || diagnostName === '' || medicalVisitCode === '') {
    return false;
  }

  return [researchDate, diagnostCode || diagnostName, medicalVisitCode, medicalServiceCode, medicalDenominationCode, diseaseCode];
};

visitList.forEach((spreadsheetRow) => {
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
    const isMedicalVisitCode = spreadsheetCell.slice(0, 2) === '87';

    if (!isMedicalVisitCode) {
      return false;
    }

    const diagnostData = getDataAboutDiagnost(spreadsheetRow, medicalVisitCodesArray[index]);

    if (!diagnostData) {
      return false;
    }

    return request(patientData, clinicianData, diagnostData);
  });
});
