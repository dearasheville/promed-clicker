/* eslint-disable prefer-destructuring */
/* eslint-disable linebreak-style */

import departments from '../data-lists/departments';
import diagnosts from '../data-lists/diagnosts';
import services from '../data-lists/services';

// const reverse = array => [array[1], array[0]];

const getClinicianDepartmentCode = clinicianDepartment => departments.find((listElem) => {
  const listDepartment = listElem[1];

  return listDepartment.toLowerCase() === clinicianDepartment.toLowerCase();
}) || [];

const getDiagnostCode = diagnostName => diagnosts.find((listElem) => {
  const listDiagnostName = listElem[1].split(' ').join(' ');

  return listDiagnostName.toLowerCase() === diagnostName.toLowerCase();
}) || [];

const getMedicalServiceCode = visitCell => services.find((listElem) => {
  const listVisitCode = listElem[0];

  return listVisitCode.toLowerCase() === visitCell.toLowerCase();
}) || [];

const getMedicalDenominationCode = visitCell => services.find((listElem) => {
  const listVisitCode = listElem[0];

  return listVisitCode.toLowerCase() === visitCell.toLowerCase();
}) || [];

const findCorrespondingCodeInList = (text, list) => {
  let arrayOfCodeAndText = [];
  let correspondingCode = '';

  switch (list) {
    case 'departmentCode':
      arrayOfCodeAndText = getClinicianDepartmentCode(String(text));
      correspondingCode = arrayOfCodeAndText[0];
      break;
    case 'diagnostCode':
      arrayOfCodeAndText = getDiagnostCode(String(text));
      correspondingCode = arrayOfCodeAndText[0];
      break;
    case 'serviceCode':
      // arrayOfCodeAndText = reverse(medicalServiceCode(String(text)));
      arrayOfCodeAndText = getMedicalServiceCode(String(text));
      correspondingCode = arrayOfCodeAndText[1];
      break;
    case 'denominationCode':
      arrayOfCodeAndText = getMedicalDenominationCode(String(text));
      correspondingCode = arrayOfCodeAndText[2];
      break;
    default:
      break;
  }

  return correspondingCode;

  // const correspondingCode = arrayOfCodeAndText[0];
  // return correspondingCode === undefined ? null : correspondingCode;
};

export default findCorrespondingCodeInList;
