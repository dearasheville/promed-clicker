/* eslint-disable linebreak-style */
/* eslint-disable no-undef */

const robot = require('robotjs');
const copypaste = require('copy-paste');
const clipboardy = require('clipboardy');
const spreadsheet = require('..');

/*
Фамилия: [381, 298]
Имя: [638, 298]
Отчество: [897, 298]
*/

const patientList = [{ }, { }];

const patient = {
  name, // Серов
  surname, // Денис
  pathronymic, // Оскарович
  birth, // 1995
};

const route = {
  medicalInstitution, // Отделение ЛПУ
  medicalDepartment, // Кабинет компьютерной томографии
  clinician, // Серов Оскар Валентинович
  diseaseCode, // A00.0
};

const visit = {
  treatmentType: typeOfTreatment, // Заболевание
  visitCode, // 874737
  diseaseNature, // Ранее установленное хроническое
};

const service = {
  medicalService, // A06.09.005
};

clipboardy.writeSync(test);

setTimeout(() => robot.keyToggle('v', 'down', 'control'), 5000);

setTimeout(() => robot.keyToggle('v', 'up', 'control'), 5100);
