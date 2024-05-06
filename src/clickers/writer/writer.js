import requests from './requests.js';
import search from './search.js';
import direction from './direction.js';
import result from './result.js';

import {
  sleepForMs,
} from '../../utils/sleep.js';

const msToDelay = 2500;

const paraclinicClicker = (patient, clinician, diagnost, service) => {
  sleepForMs(msToDelay);

  requests.stage1();
  search(patient);

  const number = direction(clinician, service);

  if (!number) {
    return false;
  }

  requests.stage2(patient, number);
  result(diagnost, service);

  return true;
};

export default paraclinicClicker;
