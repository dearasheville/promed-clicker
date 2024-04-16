import SimpleForm from '../../../graphical-widget/form-simple.js';
import BigComplexForm from '../../../graphical-widget/form-big.js';

const journal = 0;
const dosimetry = 0;

const visitFormData = {
  point: {
    x: 233,
    y: 339,
  },
  width: 483,
  height: 22,
};

const dateFormData = {
  point: {
    x: 233,
    y: 365,
  },
  width: 100,
  height: 22,
};

const timeFormData = {
  point: {
    x: 388,
    y: 365,
  },
  width: 60,
  height: 22,
};

const journalFormData = {
  point: {
    x: 233,
    y: 391,
  },
  width: 150,
  height: 22,
};

const diagnostFormData = {
  point: {
    x: 233,
    y: 511,
  },
  width: 500,
  height: 22,
};

const dosimetryFormData = {
  point: {
    x: 233,
    y: 615,
  },
  width: 100,
  height: 22,
};

const visitForm = new BigComplexForm(visitFormData);
const dateForm = new SimpleForm(dateFormData);
const timeForm = new SimpleForm(timeFormData);
const journalForm = new SimpleForm(journalFormData);
const diagnostForm = new BigComplexForm(diagnostFormData);
const dosimetryForm = new SimpleForm(dosimetryFormData);

const result2 = (diagnost, service) => {
  visitForm.expand().type(service.id).confirm();
  dateForm.paste(diagnost.date);
  timeForm.paste(diagnost.time);
  journalForm.paste(journal);
  diagnostForm.expand().type(diagnost.id).confirm();
  dosimetryForm.paste(dosimetry);
};

export default result2;
