import Button from '../../graphical-widget/button.js';
import SimpleForm from '../../graphical-widget/form-simple.js';
import Link from '../../graphical-widget/link.js';

import {
  sleepUntilPointColorUnmatchesList,
} from '../../utils/sleep.js';

const acceptWithoutRegistrationButtonData = {
  point: {
    x: 130,
    y: 359,
  },
  width: 125,
  height: 21,
};

const popupButtonData = {
  point: {
    x: 956,
    y: 595,
  },
  width: 75,
  height: 21,
};

const searchButtonData = {
  point: {
    x: 90,
    y: 290,
  },
  width: 65,
  height: 21,
};

const birthdayFormData = {
  point: {
    x: 770,
    y: 202,
  },
  width: 91,
  height: 22,
};

const directionFormData = {
  point: {
    x: 1028,
    y: 202,
  },
  width: 100,
  height: 22,
};

const serviceLinkData = {
  point: {
    x: 1260,
    y: 442,
  },
  width: 227,
  height: 23,
};

const acceptWithoutRegistrationButton = new Button(acceptWithoutRegistrationButtonData);
const popupButton = new Button(popupButtonData);
const searchButton = new Button(searchButtonData);

const birthForm = new SimpleForm(birthdayFormData);
const directionForm = new SimpleForm(directionFormData);
const serviceLink = new Link(serviceLinkData);

const filterField = {
  point: {
    x: 1650,
    y: 300,
  },
  color: {
    normal: 'dfe8f6',
    popup: 'c8ced6',
  },
};

const requestField = {
  point: {
    x: 1703,
    y: 455,
  },
  color: {
    active: 'fbf0d2',
    hover: '',
    nonactive: '',
  },
};

const requests = {
  stage1: () => {
    sleepUntilPointColorUnmatchesList(filterField.point, filterField.color.normal);

    acceptWithoutRegistrationButton.press();
  },
  stage2: (patient, number) => {
    sleepUntilPointColorUnmatchesList(filterField.point, filterField.color.popup);

    popupButton.press();

    sleepUntilPointColorUnmatchesList(filterField.point, filterField.color.normal);

    birthForm.paste(patient.birth);
    directionForm.paste(number);
    searchButton.press();

    sleepUntilPointColorUnmatchesList(requestField.point, requestField.color.active);

    serviceLink.click();
  },
};

export default requests;
