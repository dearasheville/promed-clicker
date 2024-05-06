import {
  visitFormData,
  dateFormData,
  timeFormData,
  journalFormData,
  diagnostFormData,
  dosimetryFormData,
} from '../data-forms/results/result2.js';

import SimpleForm from '../../graphical-widget/form-simple.js';
import BigComplexForm from '../../graphical-widget/form-big.js';

const journal = 0;
const dosimetry = 0;

const visitForm = new BigComplexForm(visitFormData);
const dateForm = new SimpleForm(dateFormData);
const timeForm = new SimpleForm(timeFormData);
const journalForm = new SimpleForm(journalFormData);
const diagnostForm = new BigComplexForm(diagnostFormData);
const dosimetryForm = new SimpleForm(dosimetryFormData);

const result2 = (diagnost, service) => {
  visitForm.expand().paste(service.id).confirm();
  dateForm.paste(diagnost.date);
  timeForm.paste(diagnost.time);
  journalForm.paste(journal);
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

export default result2;
