import {
  searchButtonData,
  cancelButtonData,
  birthdayFormData,
  directionFormData,
  filterField,
  requestField,
} from '../data-forms/requests.js';

import Button from '../../graphical-widget/button.js';
import SimpleForm from '../../graphical-widget/form-simple.js';

import {
  sleepUntilPointColorUnmatchesList,
} from '../../utils/sleep.js';

const searchButton = new Button(searchButtonData);
const cancelButton = new Button(cancelButtonData);
const birthForm = new SimpleForm(birthdayFormData);
const directionForm = new SimpleForm(directionFormData);

const requests = (patient, number) => {
  sleepUntilPointColorUnmatchesList(filterField.point, filterField.color.normal);

  birthForm.paste(patient.birth);
  directionForm.paste(number);
  searchButton.press();

  sleepUntilPointColorUnmatchesList(
    requestField.point,
    requestField.color.active,
    requestField.color.covid,
  );

  cancelButton.press();
};

export default requests;
