import {
  visitFormData,
  dateFormData,
  timeFormData,
  diagnostFormData,
  dosimetryFormData,
} from '../data-forms/results/result1.js';

import SimpleForm from '../../graphical-widget/form-simple.js';
import BigComplexForm from '../../graphical-widget/form-big.js';

const dosimetry = 0;

const visitForm = new BigComplexForm(visitFormData);
const dateForm = new SimpleForm(dateFormData);
const timeForm = new SimpleForm(timeFormData);
const diagnostForm = new BigComplexForm(diagnostFormData);
const dosimetryForm = new SimpleForm(dosimetryFormData);

const result1 = (diagnost, service) => {
  visitForm.expand().paste(service.id).confirm();
  dateForm.paste(diagnost.date);
  timeForm.paste(diagnost.time);
  diagnostForm.expand().type(diagnost.id).confirm();

  switch (service.type) {
    case 'ultrasound':
      break;
    case 'mri':
      break;
    default:
      dosimetryForm.paste(dosimetry);
      break;
  }
};

export default result1;
