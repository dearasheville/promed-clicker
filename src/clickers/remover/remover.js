import {
  sleepForMs,
} from '../../utils/sleep.js';

import requests from './requests.js';
import reason from './denial.js';

const msToDelay = 2500;

const paraclinicRemover = (patient, clinician, diagnost, service, number) => {
  sleepForMs(msToDelay);

  requests(patient, number);
  reason();
};

export default paraclinicRemover;
