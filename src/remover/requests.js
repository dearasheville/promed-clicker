import Button from '../graphical-widget/button.js';
import SimpleForm from '../graphical-widget/form-simple.js';

import {
  sleepUntilPointColorUnmatchesList,
} from '../utils/sleep.js';

const searchButtonData = {
  point: {
    x: 90,
    y: 290,
  },
  width: 65,
  height: 21,
};

const cancelButtonData = {
  point: {
    x: 779,
    y: 359,
  },
  width: 77,
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

const searchButton = new Button(searchButtonData);
const cancelButton = new Button(cancelButtonData);

const birthForm = new SimpleForm(birthdayFormData);
const directionForm = new SimpleForm(directionFormData);

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
    x: 1700,
    y: 450,
  },
  color: {
    active: 'fbf0d2',
    covid: 'ffcccc',
  },
};

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
