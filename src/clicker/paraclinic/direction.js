import Button from '../../graphical-widget/button.js';
import SimpleForm from '../../graphical-widget/form-simple.js';
import BigComplexForm from '../../graphical-widget/form-big.js';
import SmallComplexForm from '../../graphical-widget/form-small.js';

import {
  sleepUntilPointColorUnmatchesList,
} from '../../utils/sleep.js';

const ownHealthFacility = 1;
// const otherHealthFacility = 2;

const chronicDiseaseCourse = 3;

const saveButtonData = {
  point: {
    x: 75,
    y: 1050,
  },
  width: 77,
  height: 21,
};

const directionFormData = {
  point: {
    x: 233,
    y: 222,
  },
  width: 150,
  height: 22,
};

const dateFormData = {
  point: {
    x: 233,
    y: 252,
  },
  width: 108,
  height: 22,
};

const directedByWhomFormData = {
  point: {
    x: 233,
    y: 278,
  },
  width: 500,
  height: 22,
};

const departmentFormData = {
  point: {
    x: 233,
    y: 334,
  },
  width: 500,
  height: 22,
};

const clinicianFormData = {
  point: {
    x: 233,
    y: 386,
  },
  width: 500,
  height: 22,
};

const diseaseFormData = {
  point: {
    x: 233,
    y: 562,
  },
  width: 500,
  height: 22,
};

const courseFormData = {
  point: {
    x: 233,
    y: 588,
  },
  width: 500,
  height: 22,
};

const cabinetFormData = {
  point: {
    x: 233,
    y: 683,
  },
  width: 192,
  height: 22,
};

const rmsFormData = {
  point: {
    x: 233,
    y: 709,
  },
  width: 798,
  height: 22,
};

const fdidsFormData = {
  point: {
    x: 233,
    y: 745,
  },
  width: 500,
  height: 22,
};

const saveButton = new Button(saveButtonData);

const directionForm = new SimpleForm(directionFormData);
const dateForm = new SimpleForm(dateFormData);

const directedByWhomForm = new SimpleForm(directedByWhomFormData);
const departmentForm = new SmallComplexForm(departmentFormData);
const clinicianForm = new BigComplexForm(clinicianFormData);
const diseaseForm = new SmallComplexForm(diseaseFormData);
const courseForm = new SimpleForm(courseFormData);
const cabinetForm = new BigComplexForm(cabinetFormData);

const rmsForm = new SmallComplexForm(rmsFormData);
const fdidsForm = new SmallComplexForm(fdidsFormData);

const directionField = {
  point: {
    x: 1650,
    y: 300,
  },
  color: {
    normal: 'dfe8f6',
    covered: 'c8ced6',
  },
};

const direction = (clinician, service) => {
  sleepUntilPointColorUnmatchesList(directionField.point, directionField.color.normal);

  const number = directionForm.copy();

  dateForm.paste(clinician.date);
  directedByWhomForm.tap(ownHealthFacility);
  directionForm.activate();

  departmentForm.expand().paste(clinician.department).confirm();
  clinicianForm.type(clinician.fullname).confirm();
  diseaseForm.paste(clinician.disease).confirm();
  courseForm.tap(chronicDiseaseCourse);

  rmsForm.expand().paste(service.rms).confirm();

  switch (service.rms) {
    case 'A07.30.019':
      break;
    default:
      fdidsForm.type(service.fdids).confirm();
      break;
  }

  cabinetForm.expand().select(service.type);

  saveButton.press();

  return number;
};

export default direction;
