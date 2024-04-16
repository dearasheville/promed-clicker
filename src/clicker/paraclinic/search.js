import Button from '../../graphical-widget/button.js';
import SimpleForm from '../../graphical-widget/form-simple.js';

import {
  sleepUntilPointColorUnmatchesList,
} from '../../utils/sleep.js';

const searchButtonData = {
  point: {
    x: 557,
    y: 870,
  },
  width: 75,
  height: 21,
};

const selectButtonData = {
  point: {
    x: 719,
    y: 870,
  },
  width: 75,
  height: 21,
};

const surnameFormData = {
  point: {
    x: 571,
    y: 376,
  },
  width: 246,
  height: 22,
};

const nameFormData = {
  point: {
    x: 830,
    y: 376,
  },
  width: 246,
  height: 22,
};

const pathronymicFormData = {
  point: {
    x: 1089,
    y: 376,
  },
  width: 246,
  height: 22,
};

const birthdayFormData = {
  point: {
    x: 571,
    y: 424,
  },
  width: 91,
  height: 22,
};

const searchButton = new Button(searchButtonData);
const selectButton = new Button(selectButtonData);

const surnameForm = new SimpleForm(surnameFormData);
const nameForm = new SimpleForm(nameFormData);
const pathronymicForm = new SimpleForm(pathronymicFormData);
const birthForm = new SimpleForm(birthdayFormData);

const filterField = {
  point: {
    x: 1589,
    y: 253,
  },
  color: {
    normal: 'dfe8f6',
    covered: 'c8ced6',
  },
};

const patientField = {
  point: {
    x: 555,
    y: 763,
  },
  color: {
    active: 'fbf0d2',
    covid: '',
    hover: '',
    inactive: '',
  },
};

const search = (patient) => {
  sleepUntilPointColorUnmatchesList(filterField.point, filterField.color.covered);

  surnameForm.paste(patient.surname);
  nameForm.paste(patient.name);
  pathronymicForm.paste(patient.pathronymic);
  birthForm.paste(patient.birth);

  searchButton.press();

  sleepUntilPointColorUnmatchesList(patientField.point, patientField.color.active);

  selectButton.press();
};

export default search;
