import SimpleForm from '../../../graphical-widget/form-simple.js';
import BigComplexForm from '../../../graphical-widget/form-big.js';

const dosimetry = 0;

const visitFormData = {
  point: {
    x: 233,
    y: 301,
  },
  width: 483,
  height: 22,
};

const dateFormData = {
  point: {
    x: 233,
    y: 327,
  },
  width: 100,
  height: 22,
};

const timeFormData = {
  point: {
    x: 388,
    y: 327,
  },
  width: 60,
  height: 22,
};

const diagnostFormData = {
  point: {
    x: 233,
    y: 435,
  },
  width: 500,
  height: 22,
};

const dosimetryFormData = {
  point: {
    x: 233,
    y: 539,
  },
  width: 100,
  height: 22,
};

const visitForm = new BigComplexForm(visitFormData);
const dateForm = new SimpleForm(dateFormData);
const timeForm = new SimpleForm(timeFormData);
const diagnostForm = new BigComplexForm(diagnostFormData);
const dosimetryForm = new SimpleForm(dosimetryFormData);

const result3 = (diagnost, service) => {
  visitForm.expand().type(service.id).confirm();
  dateForm.paste(diagnost.date);
  timeForm.paste(diagnost.time);
  diagnostForm.expand().type(diagnost.id).confirm();
  dosimetryForm.paste(dosimetry);
};

export default result3;
