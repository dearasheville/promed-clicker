import {
  visitFormData,
  dateFormData,
  timeFormData,
  journalFormData,
  diagnostFormData,
  dosimetryFormData,
  zoneFormData,
} from '../data-forms/results/result3.js';

import SimpleForm from '../../graphical-widget/form-simple.js';
import BigComplexForm from '../../graphical-widget/form-big.js';

const journal = 0;
const dosimetry = 0;

const zone1 = 159;
const zone2 = 11;

const visitForm = new BigComplexForm(visitFormData);
const dateForm = new SimpleForm(dateFormData);
const timeForm = new SimpleForm(timeFormData);
const journalForm = new SimpleForm(journalFormData);
const diagnostForm = new BigComplexForm(diagnostFormData);
const dosimetryForm = new SimpleForm(dosimetryFormData);
const zoneForm = new SimpleForm(zoneFormData);

const result3 = (diagnost, service) => {
  visitForm.expand().paste(service.id).confirm();
  dateForm.paste(diagnost.date);
  timeForm.paste(diagnost.time);
  journalForm.paste(journal);
  diagnostForm.expand().type(diagnost.id).confirm();
  dosimetryForm.paste(dosimetry);

  switch (service.rms) {
    case 'A06.01.001':
      zoneForm.type(zone1).confirm();
      break;
    case 'A06.30.005.002':
      zoneForm.type(zone2).confirm();
      break;
    default:
      break;
  }
};

export default result3;
