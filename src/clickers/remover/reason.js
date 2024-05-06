import Button from '../../graphical-widget/button.js';
import SimpleForm from '../../graphical-widget/form-simple.js';

import {
  sleepUntilPointColorUnmatchesList,
} from '../../utils/sleep.js';

const option = 2;

const selectButtonData = {
  point: {
    x: 757,
    y: 691,
  },
  width: 75,
  height: 21,
};

const causeFormData = {
  point: {
    x: 765,
    y: 541,
  },
  width: 450,
  height: 22,
};

const selectButton = new Button(selectButtonData);

const causeForm = new SimpleForm(causeFormData);

const filterField = {
  point: {
    x: 1589,
    y: 253,
  },
  color: {
    normal: 'dfe8f6',
    covered: ['c8ced6', 'c7cdd6'],
  },
};

const reason = () => {
  sleepUntilPointColorUnmatchesList(filterField.point, filterField.color.covered);

  causeForm.expand().tap('down', [], option).confirm();

  selectButton.press();
};

export default reason;
