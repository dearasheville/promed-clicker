import {
  selectButtonData,
  causeFormData,
} from '../data-forms/denial.js';

import {
  filterField,
} from '../data-forms/requests.js';

import Button from '../../graphical-widget/button.js';
import SimpleForm from '../../graphical-widget/form-simple.js';

import {
  sleepUntilPointColorUnmatchesList,
} from '../../utils/sleep.js';

const option = 2;

const selectButton = new Button(selectButtonData);
const causeForm = new SimpleForm(causeFormData);

const denial = () => {
  sleepUntilPointColorUnmatchesList(filterField.point, filterField.color.covered);

  causeForm.expand().tap('down', [], option).confirm();

  selectButton.press();
};

export default denial;
