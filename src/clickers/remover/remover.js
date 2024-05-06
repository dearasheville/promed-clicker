import {
  sleepForMs,
} from '../../utils/sleep.js';

import requests from './requests.js';
import reason from './reason.js';

const paraclinicRemover = (patient, clinician, diagnost, service, number) => {
  sleepForMs(2500);

  requests(patient, number);
  reason();
};

export default paraclinicRemover;
