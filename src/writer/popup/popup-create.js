import ClassicPopup from '../../graphical-widget/classic-popup.js';
import ModernPopup from '../../graphical-widget/modern-popup.js';

import {
  getFirstPointMatchesListColor,
} from '../../utils/colors.js';

import {
  getPopupDataAccordingToPoint,
} from '../../utils/get-popup.js';

const startPoint = {
  x: 697,
  y: 496,
};

const endPoint = {
  x: 870,
  y: 521,
};

const outlineColors = ['415161', '1976d2'];

const servicePopupData = {
  type: 'service',
  point: {
    x: 854,
    y: 521,
  },
  width: 279,
  height: 109,
};

const formPopupData = {
  type: 'form',
  point: {
    x: 697,
    y: 521,
  },
  width: 594,
  height: 109,
};

const vimisPopupData = {
  type: 'vimis',
  point: {
    x: 870,
    y: 496,
  },
  width: 511,
  height: 244,
};

const popupsData = [
  servicePopupData,
  formPopupData,
  vimisPopupData,
];

const createPopup = () => {
  const point = getFirstPointMatchesListColor(startPoint, endPoint, outlineColors);
  const popupData = getPopupDataAccordingToPoint(popupsData, point);

  let popup;

  switch (popupData.type) {
    case 'service':
      popup = new ClassicPopup(popupData);
      break;
    case 'form':
      popup = new ClassicPopup(popupData);
      break;
    case 'vimis':
      popup = new ModernPopup(popupData);
      break;
    default:
      throw new Error();
  }

  return popup;
};

export default createPopup;
