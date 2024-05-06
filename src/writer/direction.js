import {
  saveButtonData,
  cancelButtonData,
  directionFormData,
  dateFormData,
  directedByWhomFormData,
  departmentFormData,
  clinicianFormData,
  diseaseFormData,
  courseFormData,
  cabinetFormData,
  rmsFormData,
  fdidsFormData,
  directionField,
} from './data-forms/direction.js';

import popupControl from './popup/popup-control.js';

import Button from '../graphical-widget/button.js';
import SimpleForm from '../graphical-widget/form-simple.js';
import BigComplexForm from '../graphical-widget/form-big.js';
import SmallComplexForm from '../graphical-widget/form-small.js';

import {
  sleepForMs,
  sleepUntilPointColorUnmatchesList,
} from '../utils/sleep.js';

const msToDelay = 5000;

const ownHealthFacility = 1;
// const otherHealthFacility = 2;

const chronicDiseaseCourse = 3;

const saveButton = new Button(saveButtonData);
const cancelButton = new Button(cancelButtonData);
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

const direction = (clinician, service) => {
  sleepUntilPointColorUnmatchesList(directionField.point, directionField.color.normal);

  directedByWhomForm.tap(ownHealthFacility);
  dateForm.paste(clinician.date);

  // let number = directionForm.option().paste('3026158').sleep().copy(); // test
  let number = directionForm.copy();

  departmentForm.expand().paste(clinician.department).confirm();
  clinicianForm.paste(clinician.fullname).confirm();
  diseaseForm.paste(clinician.disease).confirm();
  courseForm.tap(chronicDiseaseCourse);

  rmsForm.expand().paste(service.rms).confirm();

  switch (service.rms) {
    case 'A07.30.019':
      break;
    default:
      fdidsForm.clear().paste(service.fdids).confirm();
      break;
  }

  cabinetForm.expand().select(service.type);

  saveButton.press();

  sleepForMs(msToDelay); // directionField.color.normal

  const doesDirectionNeedToBeUpdated = () => {
    const popup = popupControl.direction();

    switch (popup) {
      case 'vimis':
        cancelButton.press();

        return false;
      case 'popup':
        number = directionForm
          .option()
          .option()
          .option()
          .option()
          .sleep()
          .copy();

        saveButton.press();

        doesDirectionNeedToBeUpdated();
        break;
      default:
        break;
    }

    return number;
  };

  return doesDirectionNeedToBeUpdated();
};

export default direction;
