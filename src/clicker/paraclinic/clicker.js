import {
  sleepForMs,
} from '../../utils/sleep.js';

import requests from './requests.js';
import search from './search.js';
import direction from './direction.js';
import result from './result.js';

const paraclinicClicker = (patient, clinician, diagnost, service) => {
  sleepForMs(2500);

  requests.stage1();
  search(patient);
  const number = direction(clinician, service);

  requests.stage2(patient, number);
  result(diagnost, service);
};

export default paraclinicClicker;
