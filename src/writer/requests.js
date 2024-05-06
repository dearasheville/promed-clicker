import {
  acceptWithoutRegistrationButtonData,
  searchButtonData,
  birthdayFormData,
  directionFormData,
  serviceLinkData,
  filterField,
  requestField,
} from './data-forms/requests.js';

import Button from '../graphical-widget/button.js';
import SimpleForm from '../graphical-widget/form-simple.js';
import Link from '../graphical-widget/link.js';

import {
  sleepUntilPointColorUnmatchesList,
} from '../utils/sleep.js';

const acceptWithoutRegistrationButton = new Button(acceptWithoutRegistrationButtonData);
const searchButton = new Button(searchButtonData);

const birthForm = new SimpleForm(birthdayFormData);
const directionForm = new SimpleForm(directionFormData);
const serviceLink = new Link(serviceLinkData);

const requests = {
  stage1: () => {
    sleepUntilPointColorUnmatchesList(filterField.point, filterField.color.normal);

    acceptWithoutRegistrationButton.press();
  },
  stage2: (patient, number) => {
    sleepUntilPointColorUnmatchesList(filterField.point, filterField.color.normal);

    birthForm.paste(patient.birth);
    directionForm.paste(number);
    searchButton.press();

    sleepUntilPointColorUnmatchesList(
      requestField.point,
      requestField.color.active,
      requestField.color.covid,
    );

    serviceLink.click();
  },
};

export default requests;
