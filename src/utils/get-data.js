import getCode from './get-code.js';

const getPatient = (row) => {
  const [, fullname, birth] = row;
  const [surname, name, pathronymic = ''] = fullname.split(' ');

  const isPatientDataFull = !!(surname || name || birth);

  if (!isPatientDataFull) {
    return false;
  }

  const patient = {
    surname, name, pathronymic, birth,
  };

  return patient;
};

const getClinician = (row) => {
  const [direction, , , date, departmentAndFullname, disease] = row;
  const [department, fullname] = departmentAndFullname.split(' / ');
  // const id = getCode(fullname, 'clinician');

  const isClinicianDataFull = !!(department || fullname || disease);

  if (!isClinicianDataFull) {
    return false;
  }

  const clinician = {
    direction, date, department, fullname, disease,
  };

  return clinician;
};

const getDiagnost = (row) => {
  const [, , , , , , date, fullname] = row;
  const id = getCode(fullname, 'diagnost');

  const isDiagnostDataFull = !!(fullname || date);

  if (!isDiagnostDataFull) {
    return false;
  }

  const diagnost = {
    id, date,
  };

  return diagnost;
};

const getService = (cell) => {
  const id = getCode(cell, 'service');
  const rms = getCode(cell, 'rms');
  const fdids = getCode(cell, 'fdids');

  const service = {
    id, rms, fdids,
  };

  return service;
};

const getData = (data, type) => {
  switch (type) {
    case 'patient':
      return getPatient(data);
    case 'clinician':
      return getClinician(data);
    case 'diagnost':
      return getDiagnost(data);
    case 'service':
      return getService(data);
    default:
      throw new Error();
  }
};

export default getData;
