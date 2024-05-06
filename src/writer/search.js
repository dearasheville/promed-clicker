import {
  searchButtonData,
  selectButtonData,
  surnameFormData,
  nameFormData,
  pathronymicFormData,
  birthdayFormData,
  filterField,
  patientField,
} from './data-forms/search.js';

import Button from '../graphical-widget/button.js';
import SimpleForm from '../graphical-widget/form-simple.js';

import {
  sleepUntilPointColorUnmatchesList,
} from '../utils/sleep.js';

const searchButton = new Button(searchButtonData);
const selectButton = new Button(selectButtonData);

const surnameForm = new SimpleForm(surnameFormData);
const nameForm = new SimpleForm(nameFormData);
const pathronymicForm = new SimpleForm(pathronymicFormData);
const birthForm = new SimpleForm(birthdayFormData);

const search = (patient) => {
  sleepUntilPointColorUnmatchesList(filterField.point, filterField.color.covered);

  surnameForm.paste(patient.surname);
  nameForm.paste(patient.name);
  pathronymicForm.paste(patient.pathronymic);
  birthForm.paste(patient.birth);

  searchButton.press();

  sleepUntilPointColorUnmatchesList(
    patientField.point,
    patientField.color.active,
    patientField.color.covid,
  );

  selectButton.press();
};

export default search;
