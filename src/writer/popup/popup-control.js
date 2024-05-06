import {
  filterField,
  requestField,
} from '../data-forms/requests.js';

import {
  patientField,
} from '../data-forms/search.js';

import {
  directionField,
} from '../data-forms/direction.js';

import {
  mainDataField,
} from '../data-forms/result.js';

import mouse from '../../peripherals/mouse.js';
import keyboard from '../../peripherals/keyboard.js';

import Button from '../../graphical-widget/button.js';

import {
  doPointColorAndListColorMatch,
} from '../../utils/colors.js';

import {
  sleepForMs,
  sleepUntilPointColorUnmatchesList,
} from '../../utils/sleep.js';

const msToDelay = 2500;

const cabinetButtonData = {
  point: {
    x: 954,
    y: 595,
  },
  width: 75,
  height: 21,
};

const vimisButtonData = {
  point: {
    x: 1064,
    y: 683,
  },
  width: 109,
  height: 26,
};

const resultButtonData = {
  point: {
    x: 913,
    y: 595,
  },
  width: 74,
  height: 21,
};

const cabinetButton = new Button(cabinetButtonData);
const vimisButton = new Button(vimisButtonData);
const resultButton = new Button(resultButtonData);

const getPopupText = () => {
  const popupTextPoint = {
    x: 987,
    y: 555,
  };

  mouse.selectField(popupTextPoint);

  const data = keyboard.copy();

  return data;
};

const deepPopupControl = {
  direction: () => {
    sleepForMs(msToDelay);

    sleepUntilPointColorUnmatchesList(
      directionField.point,
      directionField.color.normal,
      directionField.color.popup,
      directionField.color.vimis,
      filterField.color.popup,
    );

    const doPopupAppeared = doPointColorAndListColorMatch(
      directionField.point,
      directionField.color.popup,
    );

    if (doPopupAppeared) {
      cabinetButton.press();

      deepPopupControl.direction();

      return 'popup';
    }

    const doVimisAppeared = doPointColorAndListColorMatch(
      directionField.point,
      directionField.color.vimis,
    );

    if (doVimisAppeared) {
      vimisButton.press();

      deepPopupControl.direction();

      return 'vimis';
    }

    return '';
  },
};

const popupControl = {
  direction: () => {
    sleepUntilPointColorUnmatchesList(
      directionField.point,
      directionField.color.normal,
      directionField.color.popup,
      directionField.color.vimis,
      filterField.color.normal,
      filterField.color.popup,
    );

    const isThereNoPopups = doPointColorAndListColorMatch(
      directionField.point,
      filterField.color.normal,
    );

    if (isThereNoPopups) {
      return '';
    }

    const popupText = getPopupText();
    const normalizedPopupText = popupText.trim().replace(/\n/g, '');

    cabinetButton.press();

    let errorResultText;

    switch (normalizedPopupText) {
      case 'Данный ресурс не связан с услугой.':
        errorResultText = deepPopupControl.direction();
        break;
      case 'Направление с указанным номером для данного пациента уже создано':
        errorResultText = 'popup';
        break;
      default:
        break;
    }

    return errorResultText;
  },
  result: () => {
    sleepUntilPointColorUnmatchesList(
      mainDataField.point,
      mainDataField.color.popup,
      filterField.color.normal,
    );

    const doPopupAppeared = doPointColorAndListColorMatch(
      mainDataField.point,
      mainDataField.color.popup,
    );

    if (doPopupAppeared) {
      resultButton.press();

      popupControl.result();
    }
  },
};

export default popupControl;
